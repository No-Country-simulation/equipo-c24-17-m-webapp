using Microsoft.EntityFrameworkCore;
using server.Data.Models;

namespace server.Data.Repositorios
{
    public class RepoTipoIncidencia
    {

        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public RepoTipoIncidencia(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion

        public List<TipoIncidencia> GetAll()
        {
            List<TipoIncidencia> lista_tipos = [];

            try
            {
                return lista_tipos = _context.TipoIncidencias.ToList();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public TipoIncidencia GetById(int id)
        {
            TipoIncidencia tipo_obtenido = new();
            try
            {
                return tipo_obtenido = _context.TipoIncidencias.Find(id);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public void CreateTipoIncidencia(TipoIncidencia obj_tipo_incidencia)
        {
            try
            {
                _context.Add(obj_tipo_incidencia);
                _context.SaveChanges();
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

        public void UpdateTipoIncidencia(TipoIncidencia obj_tipo_incidencia)
        {
            try
            {
                _context.TipoIncidencias.Update(obj_tipo_incidencia);
                _context.SaveChanges();
            }
            catch (DbUpdateException dbEx)
            {
                throw new Exception("Error al actualizar el tipo de incidencia en la base de datos.", dbEx);
            }
            catch (Exception ex)
            {
                throw new Exception("Error general al actualizar el tipo de incidencia.", ex);
            }
        }

        public void DeleteTipoIncidencia(TipoIncidencia obj_tipo_incidencia)
        {
            try
            {
                _context.TipoIncidencias.Remove(obj_tipo_incidencia);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new Exception("Error general al eliminar el tipo de incidencia.", ex);
            }
        }
    }
}
