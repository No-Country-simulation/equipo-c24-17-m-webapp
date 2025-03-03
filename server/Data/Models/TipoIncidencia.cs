using System.Text.Json.Serialization;

namespace server.Data.Models
{
    public class TipoIncidencia
    {
        public int Id { get; set; }

        public string Nombre { get; set; } = null!;

        [JsonIgnore]
        public virtual ICollection<Incidencia> Incidencias { get; set; } = new List<Incidencia>();
    }
}
