using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Data.Models;
using server.Data.Repositorios;

namespace server.Logica
{
    public class LogicaTipoestudio
    {
        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public LogicaTipoestudio(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion

        public List<Tipoestudio> ObtenerTodosLosTiposEstudio()
        {
            RepoTipoestudio repo_tipo_estudio = new RepoTipoestudio(_context);
            List<Tipoestudio> lista_tipo_estudio = [];

            try
            {
                return lista_tipo_estudio = repo_tipo_estudio.GetAll();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        public Tipoestudio ObtenerTipoEstudioPorId(int id)
        {
            RepoTipoestudio repo_tipo_estudio = new RepoTipoestudio(_context);
            Tipoestudio tipo_estudio_encontrado = new();
            try
            {
                tipo_estudio_encontrado = repo_tipo_estudio.GetById(id);

                if (tipo_estudio_encontrado == null) throw new KeyNotFoundException("El tipo de estudio solicitado no existe.");
                return tipo_estudio_encontrado;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        public void CrearTipoEstudio(Tipoestudio obj_tipo_estudio)
        {
            RepoTipoestudio repo_tipo_estudio = new RepoTipoestudio(_context);
            try
            {
                var tipo_estudio_existente = _context.Tipoestudios.Any(u => u.Id == obj_tipo_estudio.Id);
                if (tipo_estudio_existente == true) throw new KeyNotFoundException("Ya hay un tipo de estudio cargado con ese id");

                obj_tipo_estudio.CreatedAt = DateTime.SpecifyKind(obj_tipo_estudio.CreatedAt, DateTimeKind.Unspecified);
                repo_tipo_estudio.CreateTipoEstudio(obj_tipo_estudio);
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
        public void ActualizarTipoEstudio(int id, Tipoestudio obj_tipo_estudio)
        {
            RepoTipoestudio repo_tipo_estudio = new RepoTipoestudio(_context);
            try
            {
                var tipo_estudio_existente = _context.Tipoestudios.Find(id) ?? throw new KeyNotFoundException("El tipo de estudio no existe.");
                tipo_estudio_existente.Nombre = obj_tipo_estudio.Nombre;
                tipo_estudio_existente.Descripcion = obj_tipo_estudio.Descripcion;


                repo_tipo_estudio.UpdateTipoEstudio(tipo_estudio_existente);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        public void EliminarTipoEstudio(int id)
        {
            RepoTipoestudio repo_tipo_estudio = new RepoTipoestudio(_context);
            try
            {
                var tipo_estudio_existente = _context.Tipoestudios.Find(id) ?? throw new KeyNotFoundException("El tipo de estudio no existe.");
                repo_tipo_estudio.DeleteTipoEstudio(tipo_estudio_existente);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}