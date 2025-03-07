using server.Clases;
using server.Data;
using server.Data.Models;
using server.Data.Repositorios;
using server.DTOs;

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

        public void EliminarHijo(int id)
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
    }
}