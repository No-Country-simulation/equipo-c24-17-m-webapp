using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Data.Models;
using server.Data.Repositorios;

namespace server.Logica
{
    public class LogicaIncidencia
    {
        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public LogicaIncidencia(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion

        public List<Incidencia> ObtenerTodasLasIncidencias(int id)
        {
            RepoIncidencia repo_incidencia = new RepoIncidencia(_context);
            List<Incidencia> lista_incidencias= [];

            try
            {
                var hijo_encontrado = _context.Hijos.Find(id) ?? throw new KeyNotFoundException("No se encuentra el hijo o no existe en el registro");
                return lista_incidencias = repo_incidencia.GetAllById(id);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public Incidencia ObtenerIncidenciaPorId(int id)
        {
            RepoIncidencia repo_incidencia = new RepoIncidencia(_context);
            Incidencia incidencia_encontrada = new();
            try
            {
                incidencia_encontrada = repo_incidencia.GetById(id);

                if (incidencia_encontrada == null) throw new KeyNotFoundException("La incidencia solicitada no existe.");
                return incidencia_encontrada;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public void CrearIncidencia(Incidencia obj_incidencia)
        {
            RepoIncidencia repo_incidencia = new RepoIncidencia(_context);
            try
            {
                var incidencia_existe = _context.Incidencias.Any(u => u.Id == obj_incidencia.Id);
                if (incidencia_existe == true) throw new KeyNotFoundException("Ya existe una incidencia cargada con ese id");

                obj_incidencia.CreatedAt = DateTime.SpecifyKind(obj_incidencia.CreatedAt, DateTimeKind.Unspecified);
                repo_incidencia.CreateIncidencia(obj_incidencia);
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

        public void ActualizarIncidencia(int id, Incidencia obj_incidencia)
        {
            RepoIncidencia repo_Incidencia = new RepoIncidencia(_context);
            try
            {
                var tipo_incidencia = _context.TipoIncidencias.Find(obj_incidencia.IdTipoIncidencia) ?? throw new KeyNotFoundException("El tipo de incidencia no existe");
                var hijo_encontrado = _context.Hijos.Find(obj_incidencia.IdHijo) ?? throw new KeyNotFoundException("No se encuentra el hijo o no existe en el registro");

                var incidencia_existe = _context.Incidencias.Find(id) ?? throw new KeyNotFoundException("La incidencia solicitada no existe.");
                incidencia_existe.Descripcion = obj_incidencia.Descripcion;
                incidencia_existe.IdTipoIncidencia = obj_incidencia.IdTipoIncidencia;
                incidencia_existe.Fecha = obj_incidencia.Fecha;
                incidencia_existe.Hora = obj_incidencia.Hora;
                incidencia_existe.IdHijo = hijo_encontrado.Id;

                repo_Incidencia.UpdateIncidencia(incidencia_existe);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public void EliminarIncidencia(int id)
        {
            RepoIncidencia repo_Incidencia = new RepoIncidencia(_context);
            try
            {
                var estudio_existente = _context.Incidencias.Find(id) ?? throw new KeyNotFoundException("La incidencia solicitada no existe.");
                repo_Incidencia.DeleteIncidencia(estudio_existente);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}