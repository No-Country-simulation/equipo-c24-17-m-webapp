using Microsoft.EntityFrameworkCore;
using server.Data.Models;

namespace server.Data.Repositorios
{
    public class RepoEstudioMedico
    {
        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public RepoEstudioMedico(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion


        public List<EstudioMedico> GetAll()
        {
            List<EstudioMedico> lista_estudiosMedicos = [];

            try
            {
                return lista_estudiosMedicos = _context.EstudioMedico.ToList();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public EstudioMedico GetById(int id)
        {
            EstudioMedico estudioMedico_obtenido = new();
            try
            {
                return estudioMedico_obtenido = _context.EstudioMedico.Find(id);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public void CreateEstudioMedico(EstudioMedico obj_estudioMedico)
        {
            try
            {
                _context.Add(obj_estudioMedico);
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

        public void UpdateEstudioMedico(EstudioMedico obj_estudioMedico)
        {
            try
            {
                _context.EstudioMedico.Update(obj_estudioMedico);
                _context.SaveChanges();
            }
            catch (DbUpdateException dbEx)
            {
                throw new Exception("Error al actualizar el estudio médico en la base de datos.", dbEx);
            }
            catch (Exception ex)
            {
                throw new Exception("Error general al actualizar el estudio médico.", ex);
            }
        }

        public void DeleteEstudioMedico(EstudioMedico obj_estudioMedico)
        {
            try
            {
                _context.EstudioMedico.Remove(obj_estudioMedico);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new Exception("Error general al eliminar el estudio médico.", ex);
            }
        }
    }
}
