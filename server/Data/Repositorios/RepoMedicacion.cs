using Microsoft.EntityFrameworkCore;
using server.Data.Models;

namespace server.Data.Repositorios
{
    public class RepoMedicacion
    {
        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public RepoMedicacion(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion


        public List<Medicacion> GetAllById(int id)
        {

            try
            {
                return _context.Medicaciones
                       .Where(x => x.IdHijo == id)
                       .ToList();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public Medicacion GetById(int id)
        {
            try
            {
                return _context.Medicaciones.Find(id);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public void CreateMedicacion(Medicacion obj_medicacion)
        {
            try
            {
                _context.Add(obj_medicacion);
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

        public void UpdateMedicacion(Medicacion obj_medicacion)
        {
            try
            {
                _context.Medicaciones.Update(obj_medicacion);
                _context.SaveChanges();
            }
            catch (DbUpdateException dbEx)
            {
                throw new Exception("Error al actualizar la medicación en la base de datos.", dbEx);
            }
            catch (Exception ex)
            {
                throw new Exception("Error general al actualizar la medicación.", ex);
            }
        }

        public void DeleteMedicacion(Medicacion obj_medicacion)
        {
            try
            {
                _context.Medicaciones.Remove(obj_medicacion);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new Exception("Error general al eliminar la medicación.", ex);
            }
        }
    }
}