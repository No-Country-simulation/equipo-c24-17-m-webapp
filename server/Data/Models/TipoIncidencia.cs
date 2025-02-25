namespace server.Data.Models
{
    public class TipoIncidencia
    {
        public int Id { get; set; }

        public string Nombre { get; set; } = null!;

        public string? Descripcion { get; set; }

        public DateTime? CreatedAt { get; set; }
        public virtual ICollection<Incidencia> Incidencias { get; set; } = new List<Incidencia>();
    }
}
