using System.Text.Json.Serialization;

namespace server.Data.Models
{
    public class Incidencia
    {
        public int Id { get; set; }
        public DateOnly Fecha { get; set; }
        public TimeOnly Hora { get; set; }
        public int IdTipoIncidencia { get; set; }
        public string Descripcion { get; set; }
        public DateTime CreatedAt { get; set; }

        [JsonIgnore]
        public virtual TipoIncidencia? IdTipoIncidenciaNavigation { get; set; } = null!;
    }
}
