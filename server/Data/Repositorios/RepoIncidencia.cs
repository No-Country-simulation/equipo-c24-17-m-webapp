using Microsoft.EntityFrameworkCore;
using server.Data.Models;

namespace server.Data.Repositorios
{
    public class RepoIncidencia
    {
        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public RepoIncidencia(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion


        public List<Incidencia> GetAll(int id)
        {
            List<Incidencia> lista_incidencias = [];

            try
            {
                return lista_incidencias = _context.Incidencias
                    .Where( x => x.IdHijo == id)
                    .ToList();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public Incidencia GetById(int id)
        {
            Incidencia incidencia_obtenida = new();
            try
            {
                return incidencia_obtenida = _context.Incidencias.Find(id);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public void CreateIncidencia(Incidencia obj_incidencia)
        {
            try
            {
                _context.Add(obj_incidencia);
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

        public void UpdateIncidencia(Incidencia obj_incidencia)
        {
            try
            {
                _context.Incidencias.Update(obj_incidencia);
                _context.SaveChanges();
            }
            catch (DbUpdateException dbEx)
            {
                throw new Exception("Error al actualizar la incidencia en la base de datos.", dbEx);
            }
            catch (Exception ex)
            {
                throw new Exception("Error general al actualizar al incidencia.", ex);
            }
        }

        public void DeleteIncidencia(Incidencia obj_incidencia)
        {
            try
            {
                _context.Incidencias.Remove(obj_incidencia);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new Exception("Error general al eliminar la incidencia.", ex);
            }
        }
    }
}