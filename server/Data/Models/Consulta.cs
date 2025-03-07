using server.Utils;
using System.Text.Json.Serialization;

namespace server.Data.Models
{
    public class Consulta
    {
        public int Id { get; set; }
        public DateOnly Fecha { get; set; }
        [JsonConverter(typeof(TimeOnlyConverter))]
        public TimeOnly HorarioInicio { get; set; }
        [JsonConverter(typeof(TimeOnlyConverter))]
        public TimeOnly HorarioFin { get; set; }
        public int IdTipoEspecialidad { get; set; }
        public string NombreEspecialista { get; set; }

        [JsonIgnore]
        public DateTime CreatedAt { get; set; }
        public int IdHijo { get; set; }

        [JsonIgnore]
        public virtual TipoEspecialidad? IdTipoEspecialidadNavigation { get; set; } = null!;
        [JsonIgnore]
        public virtual Hijo? IdHijoNavigation { get; set; } = null!;

    }
}
