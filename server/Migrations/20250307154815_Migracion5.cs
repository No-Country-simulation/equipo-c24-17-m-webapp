using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class Migracion5 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "fecha",
                table: "consulta");

            migrationBuilder.DropColumn(
                name: "horario_fin",
                table: "consulta");

            migrationBuilder.DropColumn(
                name: "horario_inicio",
                table: "consulta");

            migrationBuilder.CreateTable(
                name: "diaconsulta",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    id_consulta = table.Column<int>(type: "integer", nullable: false),
                    dia = table.Column<int>(type: "integer", nullable: false),
                    horario_inicio = table.Column<TimeOnly>(type: "time without time zone", nullable: false),
                    horario_fin = table.Column<TimeOnly>(type: "time without time zone", nullable: false),
                    created_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValueSql: "now()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("dia_consulta_pkey", x => x.Id);
                    table.ForeignKey(
                        name: "fk_consultas_consultasdias",
                        column: x => x.id_consulta,
                        principalTable: "consulta",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_diaconsulta_id_consulta",
                table: "diaconsulta",
                column: "id_consulta");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "diaconsulta");

            migrationBuilder.AddColumn<DateOnly>(
                name: "fecha",
                table: "consulta",
                type: "date",
                nullable: false,
                defaultValue: new DateOnly(1, 1, 1));

            migrationBuilder.AddColumn<TimeOnly>(
                name: "horario_fin",
                table: "consulta",
                type: "time without time zone",
                nullable: false,
                defaultValue: new TimeOnly(0, 0, 0));

            migrationBuilder.AddColumn<TimeOnly>(
                name: "horario_inicio",
                table: "consulta",
                type: "time without time zone",
                nullable: false,
                defaultValue: new TimeOnly(0, 0, 0));
        }
    }
}
