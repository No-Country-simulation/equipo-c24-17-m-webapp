namespace server.Data.Models
{
    public class TipoEspecialidad
    {
        public int Id { get; set; }

        public string Nombre { get; set; } = null!;

        public string? Descripcion { get; set; }

        public DateTime? CreatedAt { get; set; }
        public virtual ICollection<Terapia> Terapias { get; set; } = new List<EstudioMedico>();
    }
}
