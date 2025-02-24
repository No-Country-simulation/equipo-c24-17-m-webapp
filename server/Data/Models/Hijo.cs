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
    public virtual ICollection<Estudiosmedico> Estudiosmedicos { get; set; } = new List<Estudiosmedico>();

    [JsonIgnore]

    public virtual Usuario? IdUsuarioNavigation { get; set; } = null!;
}
