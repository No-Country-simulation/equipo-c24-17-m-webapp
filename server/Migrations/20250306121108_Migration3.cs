using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class Migration3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "fk_terapia_consultas",
                table: "consulta");

            migrationBuilder.DropTable(
                name: "terapia");

            migrationBuilder.RenameColumn(
                name: "id_terapia",
                table: "consulta",
                newName: "id_hijo");

            migrationBuilder.RenameIndex(
                name: "IX_consulta_id_terapia",
                table: "consulta",
                newName: "IX_consulta_id_hijo");

            migrationBuilder.AddColumn<DateOnly>(
                name: "Fecha_culminacion",
                table: "hijo",
                type: "date",
                nullable: true);

            migrationBuilder.AddColumn<DateOnly>(
                name: "Fecha_inicio",
                table: "hijo",
                type: "date",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "RealizaTerapias",
                table: "hijo",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddForeignKey(
                name: "fk_hijo_consultas",
                table: "consulta",
                column: "id_hijo",
                principalTable: "hijo",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "fk_hijo_consultas",
                table: "consulta");

            migrationBuilder.DropColumn(
                name: "Fecha_culminacion",
                table: "hijo");

            migrationBuilder.DropColumn(
                name: "Fecha_inicio",
                table: "hijo");

            migrationBuilder.DropColumn(
                name: "RealizaTerapias",
                table: "hijo");

            migrationBuilder.RenameColumn(
                name: "id_hijo",
                table: "consulta",
                newName: "id_terapia");

            migrationBuilder.RenameIndex(
                name: "IX_consulta_id_hijo",
                table: "consulta",
                newName: "IX_consulta_id_terapia");

            migrationBuilder.CreateTable(
                name: "terapia",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    id_hijo = table.Column<int>(type: "integer", nullable: false),
                    created_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValueSql: "now()"),
                    esta_activo = table.Column<bool>(type: "boolean", nullable: false),
                    fecha_culminacion = table.Column<DateOnly>(type: "date", nullable: false),
                    fecha_inicio = table.Column<DateOnly>(type: "date", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("terapias_pkey", x => x.id);
                    table.ForeignKey(
                        name: "fk_hijos_terapias",
                        column: x => x.id_hijo,
                        principalTable: "hijo",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_terapia_id_hijo",
                table: "terapia",
                column: "id_hijo");

            migrationBuilder.AddForeignKey(
                name: "fk_terapia_consultas",
                table: "consulta",
                column: "id_terapia",
                principalTable: "terapia",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
