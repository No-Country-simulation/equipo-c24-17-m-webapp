using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace server.Data.Models;

public partial class Hijo
{
    public int Id { get; set; }

    public string Nombre { get; set; } = null!;

    public string Apellido { get; set; } = null!;

    public DateOnly FechaNacimiento { get; set; }

    public DateTime CreatedAt { get; set; }

    public int IdUsuario { get; set; }

    public string? NombreDiagnostico { get; set; }

    public string? DescripcionDiagnostico { get; set; }

    [JsonIgnore]
    public virtual ICollection<EstudioMedico> Estudiosmedicos { get; set; } = new List<EstudioMedico>();

    [JsonIgnore]
    public virtual Usuario? IdUsuarioNavigation { get; set; } = null!;

    [JsonIgnore]
    public virtual ICollection<Incidencia> Incidencias { get; set; } = new List<Incidencia>();    
    [JsonIgnore]
    public virtual ICollection<Terapia> Terapias { get; set; } = new List<Terapia>();
}
