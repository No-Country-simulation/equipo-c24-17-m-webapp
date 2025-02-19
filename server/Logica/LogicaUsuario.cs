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
                obj_usuario.CreatedAt = DateTime.SpecifyKind(obj_usuario.CreatedAt, DateTimeKind.Unspecified);
                repo_usuario.CreateUser(obj_usuario);
            }
            catch (Exception ex)
            {
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
                usuario_existente.IdRol = obj_usuario.IdRol;

                repo_usuario.UpdateUser(usuario_existente);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
