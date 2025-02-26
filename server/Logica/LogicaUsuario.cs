using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Data.Models;
using server.Data.Repositorios;

namespace server.Logica
{
    public class LogicaUsuario
    {
        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public LogicaUsuario(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion

        public List<Usuario> ObtenerTodosLosUsuarios()
        {
            RepoUsuario repo_usuario = new RepoUsuario(_context);
            List<Usuario> lista_usuarios = [];

            try
            {
                return lista_usuarios = repo_usuario.GetAll();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public Usuario ObtenerUsuarioPorId(int id)
        {
            RepoUsuario repo_usuario = new RepoUsuario(_context);
            Usuario usuario_encontrado = new();
            try
            {
                usuario_encontrado = repo_usuario.GetById(id);

                if(usuario_encontrado == null) throw new KeyNotFoundException("El usuario no existe.");
                return usuario_encontrado;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public void CrearUsuario(Usuario obj_usuario)
        {
            RepoUsuario repo_usuario = new RepoUsuario(_context);
            try
            {
                var usuario_existe = _context.Usuarios.Any(u => u.Correo.Equals(obj_usuario.Correo));
                if(usuario_existe == true) throw new KeyNotFoundException("Ya existe una cuenta con este correo electrónico");

                obj_usuario.CreatedAt = DateTime.SpecifyKind(obj_usuario.CreatedAt, DateTimeKind.Unspecified);
                repo_usuario.CreateUser(obj_usuario);
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
        
        public void ActualizarUsuario(int id, Usuario obj_usuario)
        {
            RepoUsuario repo_usuario = new RepoUsuario(_context);
            try
            {
                var usuario_existente = _context.Usuarios.Find(id) ?? throw new KeyNotFoundException("El usuario no existe.");
                usuario_existente.Nombre = obj_usuario.Nombre;
                usuario_existente.Correo = obj_usuario.Correo;
                usuario_existente.Imagen = obj_usuario.Imagen;

                repo_usuario.UpdateUser(usuario_existente);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }        
        
        public void EliminarUsuario(int id)
        {
            RepoUsuario repo_usuario = new RepoUsuario(_context);
            try
            {
                var usuario_existente = _context.Usuarios.Find(id) ?? throw new KeyNotFoundException("El usuario no existe.");
                repo_usuario.DeleteUser(usuario_existente);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
