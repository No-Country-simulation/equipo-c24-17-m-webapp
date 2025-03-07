using server.Data.Models;
using server.Data.Repositorios;
using server.Data;

namespace server.Logica
{
    public class LogicaTipoEspecialidad
    {
        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public LogicaTipoEspecialidad(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion

        public List<TipoEspecialidad> ObtenerTodosLosEstudiosMedicos(int id)
        {
            RepoTipoEspecialidad repo_especialidad = new RepoTipoEspecialidad(_context);
            List<TipoEspecialidad> lista_especialistas = [];

            try
            {
                return lista_especialistas = repo_especialidad.GetAll();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
