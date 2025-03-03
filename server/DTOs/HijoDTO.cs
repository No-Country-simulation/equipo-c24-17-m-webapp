using server.Data.Models;

namespace server.DTOs
{
    public class HijoDTO
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public DateOnly Fecha_nacimiento { get; set; }
        public string? NombreDiagnostico { get; set; }
        public string? DescripcionDiagnostico { get; set; }

        public List<Incidencia> Incidencias { get; set; } = new List<Incidencia>();
    }
}