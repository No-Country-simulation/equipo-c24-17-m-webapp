using Microsoft.EntityFrameworkCore;
using server.Data.Models;
using System.Xml;

namespace server.Data.Repositorios
{
    public class RepoUsuario
    {
        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public RepoUsuario(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion


        public List<Usuario> GetAll()
        {
            List<Usuario> lista_usuarios = [];

            try
            {
                return lista_usuarios = _context.Usuarios.ToList();                
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public Usuario GetById(int id)
        {
            Usuario usuario_obtenido = new();
            try
            {
                return usuario_obtenido = _context.Usuarios.Find(id);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public void CreateUser(Usuario obj_usuario)
        {
            try
            {
                _context.Add(obj_usuario);
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

        public void UpdateUser(Usuario obj_usuario)
        {
            try
            {
                _context.Usuarios.Update(obj_usuario);
                _context.SaveChanges();
            }
            catch (DbUpdateException dbEx)
            {
                throw new Exception("Error al actualizar el usuario en la base de datos.", dbEx);
            }
            catch (Exception ex)
            {
                throw new Exception("Error general al actualizar el usuario.", ex);
            }
        }        
        
        public void DeleteUser(Usuario obj_usuario)
        {
            try
            {
                _context.Usuarios.Remove(obj_usuario);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new Exception("Error general al eliminar el usuario.", ex);
            }
        }
    }
}
