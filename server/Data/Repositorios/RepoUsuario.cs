using server.Data.Models;

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
    }
}
