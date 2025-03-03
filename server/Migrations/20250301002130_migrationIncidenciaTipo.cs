using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class migrationIncidenciaTipo : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "created_at",
                table: "tipoincidencia");

            migrationBuilder.DropColumn(
                name: "descripcion",
                table: "tipoincidencia");

            migrationBuilder.AlterColumn<string>(
                name: "hora",
                table: "incidencia",
                type: "character varying(50)",
                nullable: false,
                oldClrType: typeof(TimeOnly),
                oldType: "time without time zone");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "nombre",
                table: "medicacion");

            migrationBuilder.AddColumn<DateTime>(
                name: "created_at",
                table: "tipoincidencia",
                type: "timestamp without time zone",
                nullable: true,
                defaultValueSql: "now()");

            migrationBuilder.AddColumn<string>(
                name: "descripcion",
                table: "tipoincidencia",
                type: "text",
                nullable: true);

            migrationBuilder.AlterColumn<TimeOnly>(
                name: "hora",
                table: "incidencia",
                type: "time without time zone",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");
        }
    }
}
