using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Data.Models;
using server.Data.Repositorios;

namespace server.Logica
{
    public class LogicaMedicacion
    {
        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public LogicaMedicacion(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion

        public List<Medicacion> ObtenerTodasLasMedicaciones(int id)
        {
            RepoMedicacion repo_medicacion = new RepoMedicacion(_context);
            List<Medicacion> lista_medicaciones = [];

            try
            {
                return lista_medicaciones = repo_medicacion.GetAllById(id);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public Medicacion ObtenerMedicacionPorId(int id)
        {
            RepoMedicacion repo_medicacion = new RepoMedicacion(_context);
            Medicacion medicacion_encontrada = new();
            try
            {
                medicacion_encontrada = repo_medicacion.GetById(id);

                if (medicacion_encontrada == null) throw new KeyNotFoundException("La medicacion solicitada no existe.");
                return medicacion_encontrada;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public void CrearMedicacion(Medicacion obj_medicacion)
        {
            RepoMedicacion repo_medicacion = new RepoMedicacion(_context);
            try
            {
                var medicacion_existe = _context.Medicaciones.Any(u => u.Id == obj_medicacion.Id);
                if (medicacion_existe == true) throw new KeyNotFoundException("Ya hay una medicacion cargada con ese id");

                obj_medicacion.CreatedAt = DateTime.SpecifyKind(obj_medicacion.CreatedAt, DateTimeKind.Unspecified);
                repo_medicacion.CreateMedicacion(obj_medicacion);
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

        public void ActualizarMedicacion(int id, Medicacion obj_medicacion)
        {
            RepoMedicacion repo_medicacion = new RepoMedicacion(_context);
            try
            {
                var medicacion_encontrada = _context.Medicaciones.Find(id) ?? throw new KeyNotFoundException("La medicacion no existe.");
                medicacion_encontrada.Nombre = obj_medicacion.Nombre;
                medicacion_encontrada.Descripcion = obj_medicacion.Descripcion;
                medicacion_encontrada.Horario = obj_medicacion.Horario;

                repo_medicacion.UpdateMedicacion(medicacion_encontrada);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public void EliminarMedicacion(int id)
        {
            RepoMedicacion repo_medicacion = new RepoMedicacion(_context);
            try
            {
                var medicacion_existente = _context.Medicaciones.Find(id) ?? throw new KeyNotFoundException("La medicacion no existe.");
                repo_medicacion.DeleteMedicacion(medicacion_existente);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}