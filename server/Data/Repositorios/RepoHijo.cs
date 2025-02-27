using Microsoft.EntityFrameworkCore;
using server.Data.Models;

namespace server.Data.Repositorios
{
    public class RepoHijo
    {
        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public RepoHijo(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion


        public List<Hijo> GetAll()
        {
            List<Hijo> lista_hijos = [];

            try
            {
                return lista_hijos = _context.Hijos.ToList();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public Hijo GetById(int id)
        {
            Hijo hijo_obtenido = new();
            try
            {
                return hijo_obtenido = _context.Hijos.Find(id);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public void CreateHijo(Hijo obj_hijo)
        {
            try
            {
                _context.Add(obj_hijo);
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

        public void UpdateHijo(Hijo obj_hijo)
        {
            try
            {
                _context.Hijos.Update(obj_hijo);
                _context.SaveChanges();
            }
            catch (DbUpdateException dbEx)
            {
                throw new Exception("Error al actualizar el hijo en la base de datos.", dbEx);
            }
            catch (Exception ex)
            {
                throw new Exception("Error general al actualizar el hijo.", ex);
            }
        }

        public void DeleteHijo(Hijo obj_hijo)
        {
            try
            {
                _context.Hijos.Remove(obj_hijo);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new Exception("Error general al eliminar el hijo.", ex);
            }
        }

        public List<Hijo> ObtenerHijosDelUsuario(int id_padre)
        {
            List<Usuario> lista_hijos_usuario = [];

            try
            {
                // Filtrar directamente en la consulta
                var hijos = _context.Hijos
                    .Where(h => h.IdUsuario == id_padre) // Filtramos los hijos
                    .ToList();

                return hijos;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}