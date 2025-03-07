using server.Utils;
using System.Text.Json.Serialization;

namespace server.Data.Models
{
    public class Consulta
    {
        public int Id { get; set; }
        public int IdTipoEspecialidad { get; set; }
        public string NombreEspecialista { get; set; }
        public int IdHijo { get; set; }

        [JsonIgnore]
        public DateTime CreatedAt { get; set; }
        public int IdHijo { get; set; }

        [JsonIgnore]
        public List<ConsultaDia> ConsultasDias { get; set; } = new List<ConsultaDia>();
        [JsonIgnore]
        public virtual TipoEspecialidad? IdTipoEspecialidadNavigation { get; set; }
        public virtual Hijo? IdHijoNavigation { get; set; }
    }
}
