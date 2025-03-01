using server.Data;
using server.Data.Models;
using server.Data.Repositorios;

namespace server.Logica
{
    public class LogicaTipoIncidencia
    {
        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public LogicaTipoIncidencia(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion

        public List<TipoIncidencia> ObtenerTodasLosTiposDeIncidencias()
        {
            RepoTipoIncidencia repo_tipo_incidencia = new RepoTipoIncidencia(_context);
            List<TipoIncidencia> lista_tipo_incidencias = [];

            try
            {
                return lista_tipo_incidencias = repo_tipo_incidencia.GetAll();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
