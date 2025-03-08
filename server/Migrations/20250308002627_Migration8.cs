using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class Migration8 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "HorarioInicio",
                table: "diaconsulta",
                newName: "horario_inicio");

            migrationBuilder.RenameColumn(
                name: "HorarioFin",
                table: "diaconsulta",
                newName: "horario_fin");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "horario_inicio",
                table: "diaconsulta",
                newName: "HorarioInicio");

            migrationBuilder.RenameColumn(
                name: "horario_fin",
                table: "diaconsulta",
                newName: "HorarioFin");
        }
    }
}
