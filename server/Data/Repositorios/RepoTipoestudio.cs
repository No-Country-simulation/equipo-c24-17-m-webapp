using Microsoft.EntityFrameworkCore;
using server.Data.Models;

namespace server.Data.Repositorios
{
    public class RepoTipoestudio
    {
        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public RepoTipoestudio(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion

        public List<Tipoestudio> GetAll()
        {
            List<Tipoestudio> lista_tipo_estudio = [];

            try
            {
                return lista_tipo_estudio = _context.Tipoestudios.ToList();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public Tipoestudio GetById(int id)
        {
            Tipoestudio tipo_estudio_obtenido = new();
            try
            {
                return tipo_estudio_obtenido = _context.Tipoestudios.Find(id);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        public void CreateTipoEstudio(Tipoestudio obj_tipo_estudio)
        {
            try
            {
                _context.Add(obj_tipo_estudio);
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
        public void UpdateTipoEstudio(Tipoestudio obj_tipo_estudio)
        {
            try
            {
                _context.Tipoestudios.Update(obj_tipo_estudio);
                _context.SaveChanges();
            }
            catch (DbUpdateException dbEx)
            {
                throw new Exception("Error al actualizar el tipo de estudio en la base de datos.", dbEx);
            }
            catch (Exception ex)
            {
                throw new Exception("Error general al actualizar el tipo de estudio.", ex);
            }
        }
        public void DeleteTipoEstudio(Tipoestudio obj_tipo_estudio)
        {
            try
            {
                _context.Tipoestudios.Remove(obj_tipo_estudio);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new Exception("Error general al eliminar el tipo de estudio.", ex);
            }
        }
    }
}
