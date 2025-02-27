﻿using server.Utils;
using System.Text.Json.Serialization;

namespace server.Data.Models
{
    public class Terapia
    {
        public int Id { get; set; }
        public DateOnly Fecha_inicio { get; set; }
        public DateOnly Fecha_culminacion { get; set; }

        [JsonConverter(typeof(TimeOnlyConverter))]
        public TimeOnly Horario { get; set; }
        public bool Esta_activo { get; set; }
        public int IdTipoEspecialidad { get; set; }
        public DateTime CreatedAt { get; set; }
        public int IdHijo { get; set; }

        [JsonIgnore]
        public virtual Hijo? IdHijoNavigation { get; set; } = null!;

        [JsonIgnore]
        public virtual TipoEspecialidad? IdTipoEspecialidadNavigation { get; set; } = null!;
    }
}
