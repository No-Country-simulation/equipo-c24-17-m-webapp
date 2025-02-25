using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Data.Models;
using server.Data.Repositorios;

namespace server.Logica
{
    public class LogicaTipoestudio
    {
        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public LogicaTipoestudio(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion

        public List<Tipoestudio> ObtenerTodosLosTiposEstudio()
        {
            RepoTipoestudio repo_tipo_estudio = new RepoTipoestudio(_context);
            List<Tipoestudio> lista_tipo_estudio = [];

            try
            {
                return lista_tipo_estudio = repo_tipo_estudio.GetAll();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}