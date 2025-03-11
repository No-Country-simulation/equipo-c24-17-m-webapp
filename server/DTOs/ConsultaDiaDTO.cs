namespace server.DTOs
{
    public class ConsultaDiaDTO
    {
        public int IdHijo { get; set; }
        public string NombreUsuario { get; set; }
        public string ApellidoUsuario { get; set; }
        public string ApellidoHijo { get; set; }
        public string NombreHijo { get; set; }
        public DateOnly FechaNacimiento { get; set; }
        public int Edad { get; set; }
        public string Servicio { get; set; }
        public string Profesional { get; set; }
        public DayOfWeek Dia { get; set; }
        public string HorarioInicio { get; set; }
        public string HorarioFin { get; set; }
        public DateTime FechaTurno { get; set; }
    }
}
