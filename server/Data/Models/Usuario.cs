using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace server.Data.Models;

public partial class Usuario
{
    public int Id { get; set; }

    public string Nombre { get; set; } = null!;

    public string Correo { get; set; } = null!;

    public int IdRol { get; set; }

    public DateTime? CreatedAt { get; set; }

    [JsonIgnore]
    public virtual Rol IdRolNavigation { get; set; } = null!;
}
