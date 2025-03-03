using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class migrationIncidenciaTipo1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "hora",
                table: "incidencia",
                newName: "duracion");

                migrationBuilder.AlterColumn<string>(
                name: "duracion",
                table: "incidencia",
                type: "character varying(50)",
                nullable: false,
                oldClrType: typeof(TimeOnly),
                oldType: "time without time zone");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "duracion",
                table: "incidencia",
                newName: "hora");
        }
    }
}
