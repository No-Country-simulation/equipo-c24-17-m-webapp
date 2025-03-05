namespace server.Data.Models
{
    public class TipoEspecialidad
    {
        public int Id { get; set; }

        public string Nombre { get; set; } = null!;

        public string? Descripcion { get; set; }

        public DateTime? CreatedAt { get; set; }
        public virtual ICollection<Consulta> Consultas { get; set; } = new List<Consulta>();
    }
}
