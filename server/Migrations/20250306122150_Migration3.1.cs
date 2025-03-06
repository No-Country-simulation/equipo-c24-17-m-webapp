using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class Migration31 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Fecha_inicio",
                table: "hijo",
                newName: "fecha_inicio");

            migrationBuilder.RenameColumn(
                name: "Fecha_culminacion",
                table: "hijo",
                newName: "fecha_culminacion");

            migrationBuilder.RenameColumn(
                name: "RealizaTerapias",
                table: "hijo",
                newName: "realiza_terapias");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "fecha_inicio",
                table: "hijo",
                newName: "Fecha_inicio");

            migrationBuilder.RenameColumn(
                name: "fecha_culminacion",
                table: "hijo",
                newName: "Fecha_culminacion");

            migrationBuilder.RenameColumn(
                name: "realiza_terapias",
                table: "hijo",
                newName: "RealizaTerapias");
        }
    }
}
