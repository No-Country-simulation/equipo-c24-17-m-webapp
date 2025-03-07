using Microsoft.EntityFrameworkCore;
using server.Data.Models;

namespace server.Data.Repositorios
{
    public class RepoTipoEspecialidad
    {

        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public RepoTipoEspecialidad(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion

        public List<TipoEspecialidad> GetAll()
        {
            List<TipoEspecialidad> lista_tipos = [];

            try
            {
                return lista_tipos = _context.TipoEspecialidades.ToList();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public TipoEspecialidad GetById(int id)
        {
            TipoEspecialidad tipo_obtenido = new();
            try
            {
                return tipo_obtenido = _context.TipoEspecialidades.Find(id);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public void CreateTipoEspecialidad(TipoEspecialidad obj_tipo_especialidad)
        {
            try
            {
                _context.Add(obj_tipo_especialidad);
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

        public void UpdateTipoEspecialidad(TipoEspecialidad obj_tipo_especialidad)
        {
            try
            {
                _context.TipoEspecialidades.Update(obj_tipo_especialidad);
                _context.SaveChanges();
            }
            catch (DbUpdateException dbEx)
            {
                throw new Exception("Error al actualizar el tipo de especialidad en la base de datos.", dbEx);
            }
            catch (Exception ex)
            {
                throw new Exception("Error general al actualizar el tipo de especialidad.", ex);
            }
        }

        public void DeleteTipoEspecialidad(TipoEspecialidad obj_tipo_especialidad)
        {
            try
            {
                _context.TipoEspecialidades.Remove(obj_tipo_especialidad);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new Exception("Error general al eliminar el tipo de especialidad.", ex);
            }
        }
    }
}
