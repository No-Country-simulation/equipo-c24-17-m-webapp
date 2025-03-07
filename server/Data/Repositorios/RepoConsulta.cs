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


        public List<Consulta> GetAll(int id)
        {
            List<Consulta> lista_consultas = [];

            try
            {
                return lista_consultas = _context.Consultas
                    .Where(i => i.IdHijo== id)
                    .Include(x=> x.IdTipoEspecialidadNavigation)
                    .Include(h=> h.IdHijoNavigation)
                    .ToList();
            }
            catch (Exception ex)
            {
                throw new Exception(($"Error al obtener consultas: {ex}"));
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

        public async Task<int> CrearConsultaAsync(Consulta consulta, List<ConsultaDia> dias)
        {
            using var transaction = await _context.Database.BeginTransactionAsync();
            try
            {
                _context.Consultas.Add(consulta);
                await _context.SaveChangesAsync();

                foreach (var dia in dias)
                {
                    dia.IdConsulta = consulta.Id;
                    _context.ConsultaDias.Add(dia);
                }

                await _context.SaveChangesAsync();
                await transaction.CommitAsync();

                return consulta.Id;
            }
            catch (Exception ex)
            {
                await transaction.RollbackAsync();
                throw new Exception("Error al crear la consulta: ", ex);
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