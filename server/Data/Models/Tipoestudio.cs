using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace server.Data.Models;

public partial class Tipoestudio
{
    public int Id { get; set; }

    public string Nombre { get; set; } = null!;

    public string? Descripcion { get; set; }

    public DateTime? CreatedAt { get; set; }
    public virtual ICollection<Estudiosmedico> Estudiosmedicos { get; set; } = new List<Estudiosmedico>();
}
