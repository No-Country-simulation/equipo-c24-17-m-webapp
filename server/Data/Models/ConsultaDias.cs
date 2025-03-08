using server.Data.Models;
using server.Utils;
using System.Text.Json.Serialization;

public class ConsultaDia
{
    public int Id { get; set; }

    public int IdConsulta { get; set; }
    public DayOfWeek Dia { get; set; }

    public string HorarioInicio { get; set; }

    public string HorarioFin { get; set; }

    public DateTime CreatedAt { get; set; }

    [JsonIgnore]
    public virtual Consulta? IdConsultaNavigation { get; set; }
}
