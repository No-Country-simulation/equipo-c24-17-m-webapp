using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class Migration4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "created_at",
                table: "tipoespecialidad");

            migrationBuilder.DropColumn(
                name: "descripcion",
                table: "tipoespecialidad");

            migrationBuilder.DropColumn(
                name: "duracion",
                table: "consulta");

            migrationBuilder.RenameColumn(
                name: "Horario",
                table: "consulta",
                newName: "horario_inicio");

            migrationBuilder.AddColumn<TimeOnly>(
                name: "horario_fin",
                table: "consulta",
                type: "time without time zone",
                nullable: false,
                defaultValue: new TimeOnly(0, 0, 0));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "horario_fin",
                table: "consulta");

            migrationBuilder.RenameColumn(
                name: "horario_inicio",
                table: "consulta",
                newName: "Horario");

            migrationBuilder.AddColumn<DateTime>(
                name: "created_at",
                table: "tipoespecialidad",
                type: "timestamp without time zone",
                nullable: true,
                defaultValueSql: "now()");

            migrationBuilder.AddColumn<string>(
                name: "descripcion",
                table: "tipoespecialidad",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "duracion",
                table: "consulta",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}
