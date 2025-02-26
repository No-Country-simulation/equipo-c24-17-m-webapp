using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Data.Models;
using server.Data.Repositorios;

namespace server.Logica
{
    public class LogicaTerapia
    {
        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public LogicaTerapia(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion

        public List<Terapia> ObtenerTodosLasTerapias(int id)
        {
            RepoTerapia repo_terapia = new RepoTerapia(_context);
            List<Terapia> lista_terapias = [];

            try
            {
                return lista_terapias = repo_terapia.GetAllById(id);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public Terapia ObtenerTerapiaPorId(int id)
        {
            RepoTerapia repo_terapia = new RepoTerapia(_context);
            Terapia terapia_encontrada = new();
            try
            {
                terapia_encontrada = repo_terapia.GetById(id);

                if (terapia_encontrada == null) throw new KeyNotFoundException("La terapia solicitado no existe.");
                return terapia_encontrada;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public void CrearTerapia(Terapia obj_terapia)
        {
            RepoTerapia repo_terapia = new RepoTerapia(_context);
            try
            {
                var terapia_existe = _context.Terapias.Any(u => u.Id == obj_terapia.Id);
                if (terapia_existe == true) throw new KeyNotFoundException("Ya hay una terapia cargado con ese id");

                obj_terapia.CreatedAt = DateTime.SpecifyKind(obj_terapia.CreatedAt, DateTimeKind.Unspecified);
                repo_terapia.CreateTerapia(obj_terapia);
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

        public void ActualizarTerapia(int id, Terapia obj_terapia)
        {
            RepoTerapia repo_terapia = new RepoTerapia(_context);
            try
            {
                var terapia_existe = _context.Terapias.Find(id) ?? throw new KeyNotFoundException("La terapia no existe.");
                terapia_existe.Fecha_inicio = obj_terapia.Fecha_inicio;
                terapia_existe.Fecha_culminacion = obj_terapia.Fecha_culminacion;
                terapia_existe.Esta_activo = obj_terapia.Esta_activo;
                terapia_existe.Horario = obj_terapia.Horario;

                repo_terapia.UpdateTerapia(terapia_existe);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public void EliminarTerapia(int id)
        {
            RepoTerapia repo_terapia = new RepoTerapia(_context);
            try
            {
                var estudio_existente = _context.Terapias.Find(id) ?? throw new KeyNotFoundException("La terapia no existe.");
                repo_terapia.DeleteTerapia(estudio_existente);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}