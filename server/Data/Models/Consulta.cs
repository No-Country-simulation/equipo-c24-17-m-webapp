using server.Utils;
using System.Text.Json.Serialization;

namespace server.Data.Models
{
    public class Consulta
    {
        public int Id { get; set; }
        public DateOnly Fecha { get; set; }
        [JsonConverter(typeof(TimeOnlyConverter))]
        public TimeOnly Horario { get; set; }
        public int Duracion { get; set; }
        public int IdTipoEspecialidad { get; set; }
        public string Nombre_especialista { get; set; } 
        public int IdTerapia { get; set; }
        public int IdEspecialidad { get; set; }
        public DateTime CreatedAt { get; set; }

        [JsonIgnore]
        public virtual TipoEspecialidad? IdTipoEspecialidadNavigation { get; set; } = null!;
        [JsonIgnore]
        public virtual Terapia? IdTerapiaNavigation { get; set; } = null!;

    }
}
