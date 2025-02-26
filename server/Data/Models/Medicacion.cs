using server.Utils;
using System.Text.Json.Serialization;

namespace server.Data.Models
{
    public class Medicacion
    {
        public int Id { get; set; }
        public int Nombre { get; set; }
        public string Descripcion { get; set; }

        [JsonConverter(typeof(TimeOnlyConverter))]
        public TimeOnly Horario { get; set; }

    }
}
