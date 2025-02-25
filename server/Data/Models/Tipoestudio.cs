namespace server.Data.Models;

public partial class Tipoestudio
{
    public int Id { get; set; }

    public string Nombre { get; set; } = null!;

    public string? Descripcion { get; set; }

    public DateTime? CreatedAt { get; set; }
    public virtual ICollection<EstudioMedico> Estudiosmedicos { get; set; } = new List<EstudioMedico>();
}
