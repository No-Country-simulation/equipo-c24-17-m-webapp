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

        public void CrearUsuario(Usuario obj_usuario)
        {
            RepoUsuario repo_usuario = new RepoUsuario(_context);

            obj_usuario.CreatedAt = DateTime.SpecifyKind(obj_usuario.CreatedAt, DateTimeKind.Unspecified);
            repo_usuario.CreateUser(obj_usuario);
        }
    }
}
