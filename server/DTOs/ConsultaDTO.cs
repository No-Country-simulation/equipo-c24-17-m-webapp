using server.Data.Models;
using server.Utils;
using System.Text.Json.Serialization;

namespace server.DTOs
{
    public class ConsultaDTO
    {
        public int Id{ get; set; }
        public int IdTipoEspecialidad { get; set; }
        public string NombreEspecialista { get; set; }
        public int IdHijo { get; set; }
        public List<DiaConsultaDTO> Dias { get; set; }
    }

    public class DiaConsultaDTO
    {
        public DayOfWeek Dia { get; set; }

        public string HorarioInicio { get; set; }

        public string HorarioFin { get; set; }
    }
}
