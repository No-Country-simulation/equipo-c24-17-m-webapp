using Microsoft.EntityFrameworkCore;
using server.Data.Models;

namespace server.Data.Repositorios
{
    public class RepoTerapia
    {
        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public RepoTerapia(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion


        public List<Terapia> GetAllById(int id)
        {

            try
            {
                return _context.Terapias
                       .Where(x=> x.IdHijo == id)
                       .ToList();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public Terapia GetById(int id)
        {
            try
            {
                return _context.Terapias.Find(id);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public void CreateTerapia(Terapia obj_terapia)
        {
            try
            {
                _context.Add(obj_terapia);
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

        public void UpdateTerapia(Terapia obj_terapia)
        {
            try
            {
                _context.Terapias.Update(obj_terapia);
                _context.SaveChanges();
            }
            catch (DbUpdateException dbEx)
            {
                throw new Exception("Error al actualizar la terapia en la base de datos.", dbEx);
            }
            catch (Exception ex)
            {
                throw new Exception("Error general al actualizar la terapia.", ex);
            }
        }

        public void DeleteTerapia(Terapia obj_terapia)
        {
            try
            {
                _context.Terapias.Remove(obj_terapia);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new Exception("Error general al eliminar la terapia.", ex);
            }
        }
    }
}