using Microsoft.EntityFrameworkCore;
using server.Data.Models;

namespace server.Data.Repositorios
{
    public class RepoConsulta
    {
        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public RepoConsulta(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion


        public List<Consulta> GetAll()
        {
            List<Consulta> lista_consultas = [];

            try
            {
                return lista_consultas = _context.Consultas.ToList();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public Consulta GetById(int id)
        {
            Consulta consulta_obtenida = new();
            try
            {
                return consulta_obtenida = _context.Consultas.Find(id);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public void CreateConsulta(Consulta obj_consulta)
        {
            try
            {
                _context.Add(obj_consulta);
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

        public void UpdateConsulta(Consulta obj_consulta)
        {
            try
            {
                _context.Consultas.Update(obj_consulta);
                _context.SaveChanges();
            }
            catch (DbUpdateException dbEx)
            {
                throw new Exception("Error al actualizar la consuklta en la base de datos.", dbEx);
            }
            catch (Exception ex)
            {
                throw new Exception("Error general al actualizar el hijo.", ex);
            }
        }

        public void DeleteConsulta(Consulta obj_consulta)
        {
            try
            {
                _context.Consultas.Remove(obj_consulta);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new Exception("Error general al eliminar la consulta.", ex);
            }
        }
        public List<Consulta> ObtenerConsultasDeHijoEspecifico(int id)
        {
            var obj_hijo = _context.Hijos.Where(x => x.Id.Equals(id)).FirstOrDefault();

            return _context.Consultas
                .Where(o => o.Id == obj_hijo.Id)
                .ToList();
        }
    }
}