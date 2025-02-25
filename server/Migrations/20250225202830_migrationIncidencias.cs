using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class migrationIncidencias : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_estudiosmedicos_hijo_IdHijoNavigationId",
                table: "estudiosmedicos");

            migrationBuilder.AlterColumn<int>(
                name: "IdHijoNavigationId",
                table: "estudiosmedicos",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.CreateTable(
                name: "tipoincidencia",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    nombre = table.Column<string>(type: "character varying(150)", maxLength: 150, nullable: false),
                    descripcion = table.Column<string>(type: "text", nullable: true),
                    created_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: true, defaultValueSql: "now()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("tipoincidencia_pkey", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "incidencia",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    fecha = table.Column<DateOnly>(type: "date", nullable: false),
                    hora = table.Column<TimeOnly>(type: "time without time zone", nullable: false),
                    id_tipoincidencia = table.Column<int>(type: "integer", nullable: false),
                    descripcion = table.Column<string>(type: "text", nullable: false),
                    created_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValueSql: "now()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("incidencias_pkey", x => x.id);
                    table.ForeignKey(
                        name: "fk_tipoincidencias_incidencias",
                        column: x => x.id_tipoincidencia,
                        principalTable: "tipoincidencia",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_incidencia_id_tipoincidencia",
                table: "incidencia",
                column: "id_tipoincidencia");

            migrationBuilder.AddForeignKey(
                name: "FK_estudiosmedicos_hijo_IdHijoNavigationId",
                table: "estudiosmedicos",
                column: "IdHijoNavigationId",
                principalTable: "hijo",
                principalColumn: "id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_estudiosmedicos_hijo_IdHijoNavigationId",
                table: "estudiosmedicos");

            migrationBuilder.DropTable(
                name: "incidencia");

            migrationBuilder.DropTable(
                name: "tipoincidencia");

            migrationBuilder.AlterColumn<int>(
                name: "IdHijoNavigationId",
                table: "estudiosmedicos",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_estudiosmedicos_hijo_IdHijoNavigationId",
                table: "estudiosmedicos",
                column: "IdHijoNavigationId",
                principalTable: "hijo",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
