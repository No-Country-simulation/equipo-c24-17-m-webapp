using server.Data.Models;
using server.Utils;
using System.Text.Json.Serialization;

public class ConsultaDia
{
    public int Id { get; set; }

    public int IdConsulta { get; set; }
    public DayOfWeek Dia { get; set; }

    public TimeOnly HorarioInicio { get; set; }

    public TimeOnly HorarioFin { get; set; }

    public DateTime CreatedAt { get; set; }

    [JsonIgnore]
    public virtual Consulta? IdConsultaNavigation { get; set; }
}
