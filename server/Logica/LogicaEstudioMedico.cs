using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Data.Models;
using server.Data.Repositorios;

namespace server.Logica
{
    public class LogicaEstudioMedico
    {
        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public LogicaEstudioMedico(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion

        public List<EstudioMedico> ObtenerTodosLosEstudiosMedicos(int id)
        {
            RepoEstudioMedico repo_estudioMedico = new RepoEstudioMedico(_context);
            List<EstudioMedico> lista_estudios_medicos = [];

            try
            {
                return lista_estudios_medicos = repo_estudioMedico.GetAllById(id);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public EstudioMedico ObtenerEstudioMedicoPorId(int id)
        {
            RepoEstudioMedico repo_estudioMedico = new RepoEstudioMedico(_context);
            EstudioMedico estudio_encontrado = new();
            try
            {
                estudio_encontrado = repo_estudioMedico.GetById(id);

                if (estudio_encontrado == null) throw new KeyNotFoundException("El estudio médico solicitado no existe.");
                return estudio_encontrado;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public void CrearEstudioMedico(EstudioMedico obj_estudioMedico)
        {
            RepoEstudioMedico repo_estudioMedico = new RepoEstudioMedico(_context);
            try
            {
                var estudio_existe = _context.EstudioMedico.Any(u => u.Id == obj_estudioMedico.Id);
                if (estudio_existe == true) throw new KeyNotFoundException("Ya hay un estudio médico cargado con ese id");

                obj_estudioMedico.CreatedAt = DateTime.SpecifyKind(obj_estudioMedico.CreatedAt, DateTimeKind.Unspecified);
                repo_estudioMedico.CreateEstudioMedico(obj_estudioMedico);
            }
            catch (Exception ex)
            {
                if (ex.InnerException != null)
                {
                    Console.WriteLine($"Inner Exception: {ex.InnerException.Message}");
                }
                throw new Exception(ex.Message);
            }
        }

        public void ActualizarEstudioMedico(int id, EstudioMedico obj_estudioMedico)
        {
            RepoEstudioMedico repo_EstudioMedico = new RepoEstudioMedico(_context);
            try
            {
                var estudio_existe = _context.EstudioMedico.Find(id) ?? throw new KeyNotFoundException("El estudio médico no existe.");
                var tipo_estudio = _context.Tipoestudios.Find(obj_estudioMedico.IdTipoestudio) ?? throw new KeyNotFoundException("El tipo de estudio médico no existe.");
                estudio_existe.Descripcion = obj_estudioMedico.Descripcion;
                estudio_existe.ResultadoEstudio = obj_estudioMedico.ResultadoEstudio;
                estudio_existe.FechaRealizacion = obj_estudioMedico.FechaRealizacion;
                estudio_existe.IdTipoestudio = tipo_estudio.Id;

                repo_EstudioMedico.UpdateEstudioMedico(estudio_existe);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public void EliminarEstudioMedico(int id)
        {
            RepoEstudioMedico repo_EstudioMedico = new RepoEstudioMedico(_context);
            try
            {
                var estudio_existente = _context.EstudioMedico.Find(id) ?? throw new KeyNotFoundException("El estudio médico no existe.");
                repo_EstudioMedico.DeleteEstudioMedico(estudio_existente);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}