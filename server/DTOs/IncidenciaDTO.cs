﻿namespace server.DTOs
{
    public class IncidenciaDTO
    {
            public int Id { get; set; }
            public DateOnly Fecha { get; set; }
            public string Duracion { get; set; }
            public string Descripcion { get; set; }
            public string NombreTipoIncidencia { get; set; }
    }
}
