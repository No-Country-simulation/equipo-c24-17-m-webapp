using server.Data.Models;
using server.Utils;
using System.Text.Json.Serialization;

namespace server.DTOs
{
    public class ConsultaDTO
    {
        public int Id { get; set; }
        public int IdHijo { get; set; }
        public DateOnly Fecha { get; set; }
        [JsonConverter(typeof(TimeOnlyConverter))]
        public TimeOnly HorarioInicio { get; set; }
        public TimeOnly HorarioFin { get; set; }
        public string NombreEspecialidad { get; set; }
        public string NombreEspecialista { get; set; }
        public string NombreHijo { get; set; }
        public string ApellidoHijo { get; set; }
    }
}
