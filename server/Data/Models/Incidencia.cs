﻿using server.Utils;
using System.Text.Json.Serialization;

namespace server.Data.Models
{
    public class Incidencia
    {
        public int Id { get; set; }
        public DateOnly Fecha { get; set; }

        [JsonConverter(typeof(TimeOnlyConverter))]
        public string Duracion { get; set; }
        public int IdTipoIncidencia { get; set; }
        public string Descripcion { get; set; }
        public int IdHijo { get; set; }
        public DateTime CreatedAt { get; set; }

        [JsonIgnore]
        public virtual TipoIncidencia? IdTipoIncidenciaNavigation { get; set; } = null!;        
        [JsonIgnore]
        public virtual Hijo? IdHijoNavigation { get; set; } = null!;
    }
}
