using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class Migration7 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<TimeOnly>(
                name: "HorarioFin",
                table: "diaconsulta",
                type: "time without time zone",
                nullable: false,
                defaultValue: new TimeOnly(0, 0));

            migrationBuilder.AddColumn<TimeOnly>(
                name: "HorarioInicio",
                table: "diaconsulta",
                type: "time without time zone",
                nullable: false,
                defaultValue: new TimeOnly(0, 0));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "HorarioFin",
                table: "diaconsulta");

            migrationBuilder.DropColumn(
                name: "HorarioInicio",
                table: "diaconsulta");
        }
    }
}
