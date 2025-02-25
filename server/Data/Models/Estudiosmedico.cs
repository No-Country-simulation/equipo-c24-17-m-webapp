using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace server.Data.Models;

public partial class Estudiosmedico
{
    public int Id { get; set; }

    public DateOnly FechaRealizacion { get; set; }

    public string? Descripcion { get; set; }
    public string? ResultadoEstudio { get; set; }

    public DateTime? CreatedAt { get; set; }

    public int IdTipoestudio { get; set; }

    public int IdHijo { get; set; }

    public virtual Hijo IdHijoNavigation { get; set; } = null!;

    [JsonIgnore]

    public virtual Tipoestudio? IdTipoestudioNavigation { get; set; } = null!;
}
