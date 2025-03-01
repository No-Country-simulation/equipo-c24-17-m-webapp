using server.Data.Models;

namespace server.DTOs
{
    public class IncidenciaDTO
    {
            public int Id { get; set; }
            public DateOnly Fecha { get; set; }
            public int Duracion { get; set; }
            public string Descripcion { get; set; }
            public List<TipoIncidencia> TipoIncidencias { get; set; } = new List<TipoIncidencia>();
    }
}
