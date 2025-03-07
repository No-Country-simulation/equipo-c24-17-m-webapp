using server.Data.Models;

namespace server.Clases
{
    public class HijoRequest
    {
        public string CorreoUsuario { get; set; }

        public string Nombre { get; set; } = null!;

        public string Apellido { get; set; } = null!;

        public DateOnly FechaNacimiento { get; set; }

        public string? NombreDiagnostico { get; set; }

        public string? DescripcionDiagnostico { get; set; }

        public DateOnly? FechaInicio { get; set; }
        public DateOnly? FechaCulminacion { get; set; }
    }
}
