using Microsoft.EntityFrameworkCore;
using server.Clases;
using server.Data;
using server.Data.Models;
using server.Data.Repositorios;

namespace server.Logica
{
    public class LogicaHijo
    {
        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public LogicaHijo(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion

        public List<Hijo> ObtenerTodosLosHijos()
        {
            RepoHijo repo_hijo = new RepoHijo(_context);
            List<Hijo> lista_hijos = [];

            try
            {
                return lista_hijos = repo_hijo.GetAll();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public Hijo ObtenerHijoPorId(int id)
        {
            RepoHijo repo_hijo = new RepoHijo(_context);
            Hijo hijo_encontrado = new();
            try
            {
                hijo_encontrado = repo_hijo.GetById(id);

                if (hijo_encontrado == null) throw new KeyNotFoundException("El hijo solicitado no existe.");
                return hijo_encontrado;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public void CrearHijo(HijoRequest obj_request)
        {
            RepoHijo repo_hijo = new RepoHijo(_context);
            try
            {
                var hijo_existe = _context.Hijos.Any(u => u.Id == obj_request.Hijo.Id);
                if (hijo_existe == true) throw new KeyNotFoundException("Ya hay un hijo cargado con ese id");


                var obtener_id_usuario = _context.Usuarios.Where(x => x.Correo.Equals(obj_request.CorreoUsuario)).FirstOrDefault();
                if(obtener_id_usuario == null) throw new KeyNotFoundException("No existe un usuario asociado a ese correo electrónico");

                Hijo obj_hijo = new Hijo
                {
                    Nombre = obj_request.Hijo.Nombre,
                    Apellido = obj_request.Hijo.Apellido,
                    FechaNacimiento = obj_request.Hijo.FechaNacimiento,
                    NombreDiagnostico = obj_request.Hijo.NombreDiagnostico,
                    DescripcionDiagnostico = obj_request.Hijo.DescripcionDiagnostico,
                    IdUsuario = obtener_id_usuario.Id,
                    CreatedAt = DateTime.SpecifyKind(obj_request.Hijo.CreatedAt, DateTimeKind.Unspecified)
                };

                repo_hijo.CreateHijo(obj_hijo);
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

        public void ActualizarHijo(int id, Hijo obj_hijo)
        {
            RepoHijo repo_Hijo = new RepoHijo(_context);
            try
            {
                var hijo_existente = _context.Hijos.Find(id) ?? throw new KeyNotFoundException("El Hijo no existe.");
                hijo_existente.Nombre = obj_hijo.Nombre;
                hijo_existente.Apellido = obj_hijo.Apellido;
                hijo_existente.FechaNacimiento = obj_hijo.FechaNacimiento;
                hijo_existente.NombreDiagnostico = obj_hijo.NombreDiagnostico;
                hijo_existente.DescripcionDiagnostico = obj_hijo.DescripcionDiagnostico;

                repo_Hijo.UpdateHijo(hijo_existente);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public void EliminarHijo(int id)
        {
            RepoHijo repo_Hijo = new RepoHijo(_context);
            try
            {
                var hijo_existente = _context.Hijos.Find(id) ?? throw new KeyNotFoundException("El hijo no existe.");
                repo_Hijo.DeleteHijo(hijo_existente);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
