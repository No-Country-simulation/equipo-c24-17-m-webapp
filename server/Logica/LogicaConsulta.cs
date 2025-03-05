using server.Clases;
using server.Data;
using server.Data.Models;
using server.Data.Repositorios;

namespace server.Logica
{
    public class LogicaConsulta
    {
        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public LogicaConsulta(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion

        public List<Consulta> ObtenerTodosLasConsultas()
        {
            RepoConsulta repo_consulta = new RepoConsulta(_context);
            List<Consulta> lista_consultas = [];

            try
            {
                return lista_consultas = repo_consulta.GetAll();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public Consulta ObtenerConsultaPorId(int id)
        {
            RepoConsulta repo_consulta = new RepoConsulta(_context);
            Consulta consulta_encontrada = new();
            try
            {
                consulta_encontrada = repo_consulta.GetById(id);

                if (consulta_encontrada == null) throw new KeyNotFoundException("La consulta solicitada no existe.");
                return consulta_encontrada;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public void CrearConsulta(Consulta obj_consulta)
        {
            RepoConsulta repo_consulta = new RepoConsulta(_context);
            try
            {
                repo_consulta.CreateConsulta(obj_consulta);
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

        public void ActualizarConsulta(int id, Consulta obj_consulta)
        {
            RepoConsulta repo_consulta = new RepoConsulta(_context);
            try
            {
                var consulta_existente = _context.Consultas.Find(id) ?? throw new KeyNotFoundException("La consulta no existe.");
                consulta_existente.Nombre_especialista = obj_consulta.Nombre_especialista;
                consulta_existente.Duracion = obj_consulta.Duracion;
                consulta_existente.Horario = obj_consulta.Horario;
                consulta_existente.Fecha = obj_consulta.Fecha;
                consulta_existente.IdEspecialidad = obj_consulta.IdEspecialidad;

                repo_consulta.UpdateConsulta(consulta_existente);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public void EliminarHijo(int id)
        {
            RepoConsulta repo_consulta = new RepoConsulta(_context);
            try
            {
                var consulta_existente = _context.Consultas.Find(id) ?? throw new KeyNotFoundException("La consulta no existe.");
                repo_consulta.DeleteConsulta(consulta_existente);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}