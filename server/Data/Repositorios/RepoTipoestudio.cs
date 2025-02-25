using Microsoft.EntityFrameworkCore;
using server.Data.Models;

namespace server.Data.Repositorios
{
    public class RepoTipoestudio
    {
        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public RepoTipoestudio(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion

        public List<Tipoestudio> GetAll()
        {
            List<Tipoestudio> lista_tipo_estudio = [];

            try
            {
                return lista_tipo_estudio = _context.Tipoestudios.ToList();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public Tipoestudio GetById(int id)
        {
            Tipoestudio tipo_estudio_obtenido = new();
            try
            {
                return tipo_estudio_obtenido = _context.Tipoestudios.Find(id);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
