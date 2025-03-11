using Microsoft.EntityFrameworkCore;
using server.Clases;
using server.Data;
using server.Data.Models;
using server.Data.Repositorios;
using server.DTOs;
using server.Utils;

namespace server.Logica
{
    public class LogicaConsulta
    {
        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public LogicaConsulta(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion


        public List<ConsultaDTO> ObtenerConsultasDeHijosPorId(int id)
        {
            RepoConsulta repo_consulta = new RepoConsulta(_context);

            List<ConsultaDTO> lista_consultas = repo_consulta.GetAll(id)
                .Select(h => new ConsultaDTO
                {
                    Id = h.Id,
                    NombreEspecialista = h.NombreEspecialista,
                    IdHijo = h.IdHijo,
                    IdTipoEspecialidad = h.IdTipoEspecialidad,
                    Dias = h.ConsultasDias.Select(i => new DiaConsultaDTO
                    {
                        HorarioInicio = i.HorarioInicio,
                        HorarioFin = i.HorarioFin,
                        Dia = i.Dia
                    }).ToList()
                }
                    ).ToList();

            return lista_consultas;

        }
        public Consulta ObtenerConsultaPorId(int id)
        {
            RepoConsulta repo_consulta = new RepoConsulta(_context);
            Consulta consulta_encontrada = new();
            try
            {
                consulta_encontrada = repo_consulta.GetById(id);

                if (consulta_encontrada == null) throw new KeyNotFoundException("La consulta solicitada no existe.");
                return consulta_encontrada;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        public async Task<int> CrearConsultaAsync(ConsultaDTO request)
        {
            try
            {
                RepoConsulta repo_consulta = new RepoConsulta(_context);

                if (request == null || request.Dias == null || !request.Dias.Any())
                    throw new ArgumentException("Debe seleccionar al menos un día de consulta.");

                var consulta = new Consulta
                {
                    IdTipoEspecialidad = request.IdTipoEspecialidad,
                    NombreEspecialista = request.NombreEspecialista,
                    IdHijo = request.IdHijo
                };

                var diasConsulta = request.Dias.Select(d => new ConsultaDia
                {
                    Dia = d.Dia,
                    HorarioInicio = d.HorarioInicio,
                    HorarioFin = d.HorarioFin
                }).ToList();

                return await repo_consulta.CrearConsultaAsync(consulta, diasConsulta);

            }
            catch (Exception ex)
            {
                throw new Exception($"Ocurrio un problema al crear la consulta : {ex.Message}");
            }
        }

        public void UpdateConsulta(int id, ConsultaDTO obj_consulta)
        {
            var repo_consulta = new RepoConsulta(_context);
            try
            {
                var consulta = _context.Consultas.FirstOrDefault(c => c.Id == id);
                if (consulta == null)
                {
                    throw new Exception("La consulta no existe.");
                }

                consulta.IdTipoEspecialidad = obj_consulta.IdTipoEspecialidad;
                consulta.NombreEspecialista = obj_consulta.NombreEspecialista;
                consulta.IdHijo = obj_consulta.IdHijo;

                var horarioExistente = _context.ConsultaDias.FirstOrDefault(d => d.IdConsulta == id);
                if (horarioExistente != null)
                {
                    horarioExistente.Dia = obj_consulta.Dias[0].Dia;
                    horarioExistente.HorarioInicio = obj_consulta.Dias[0].HorarioInicio;
                    horarioExistente.HorarioFin = obj_consulta.Dias[0].HorarioFin;
                }
                else
                {
                    var horarioNuevo = new ConsultaDia
                    {
                        IdConsulta = id,
                        Dia = obj_consulta.Dias[0].Dia,
                        HorarioInicio = obj_consulta.Dias[0].HorarioInicio,
                        HorarioFin = obj_consulta.Dias[0].HorarioFin
                    };
                    _context.ConsultaDias.Add(horarioNuevo);
                }

                repo_consulta.UpdateConsulta(consulta);
            }
            catch (Exception ex)
            {
                throw new Exception("Error al actualizar la consulta: " + ex.Message, ex);
            }
        }

        public void EliminarConsulta(int id)
        {
            RepoConsulta repo_consulta = new RepoConsulta(_context);
            try
            {
                var consulta_existente = _context.Consultas.Find(id) ?? throw new KeyNotFoundException("La consulta no existe.");
                repo_consulta.DeleteConsulta(consulta_existente);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }


        public void EnviarCorreoDeRecepcion(ConsultaDTO request, int id_consulta)
        {

            EmailRequest obj_correo = new EmailRequest();

            //-----------------------------------------------------------------------------------------------
            //obtener al padre a traves del id del hijo y armar el objeto del correo a mandar.

            var correo_padre = _context.Hijos
                .Include(x => x.IdUsuarioNavigation)
                .Where(i => i.Id == request.IdHijo).Select(x => x.IdUsuarioNavigation.Correo).First();

            //-----------------------------------------------------------------------------------------------

            //armar el objeto para mostrar el mensaje en el correo

            ConsultaDiaDTO obj_consulta = new ConsultaDiaDTO();
            ObtenerFechaDesdeBase func_fecha = new ObtenerFechaDesdeBase();

            var consultaDiasDTO = _context.ConsultaDias
            .Include(x => x.IdConsultaNavigation)
                .ThenInclude(x => x.IdTipoEspecialidadNavigation)
            .Include(o => o.IdConsultaNavigation.IdHijoNavigation)
            .Where(i => i.IdConsultaNavigation.IdHijo == request.IdHijo)
                .Where(e => e.IdConsulta == id_consulta)
            .Select(cd => new ConsultaDiaDTO
            {
                IdHijo = cd.IdConsultaNavigation.IdHijoNavigation.Id,
                NombreUsuario = cd.IdConsultaNavigation.IdHijoNavigation.IdUsuarioNavigation.Nombre.ToUpper(),
                NombreHijo = cd.IdConsultaNavigation.IdHijoNavigation.Nombre.ToUpper(),
                ApellidoHijo = cd.IdConsultaNavigation.IdHijoNavigation.Apellido.ToUpper(),
                FechaNacimiento = cd.IdConsultaNavigation.IdHijoNavigation.FechaNacimiento,
                Edad = DateTime.Now.Year - cd.IdConsultaNavigation.IdHijoNavigation.FechaNacimiento.Year,
                Servicio = cd.IdConsultaNavigation.IdTipoEspecialidadNavigation.Nombre.ToUpper(),
                Profesional = cd.IdConsultaNavigation.NombreEspecialista.ToUpper(),
                Dia = cd.Dia,
                HorarioInicio = cd.HorarioInicio.ToString(),
                HorarioFin = cd.HorarioFin.ToString(),
                FechaTurno = func_fecha.ObtenerProximaFecha(cd.Dia)
            })
            .First();

            obj_correo.Subject = correo_padre;
            obj_correo.To = $"Confirmación de turno para: {consultaDiasDTO.NombreHijo} {consultaDiasDTO.ApellidoHijo}";

            LogicaEnviarCorreos enviar_correo = new LogicaEnviarCorreos();
            enviar_correo.EnviarCorreos(obj_correo, consultaDiasDTO);
        }
    }
}