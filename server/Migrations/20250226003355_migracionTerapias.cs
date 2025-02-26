using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class migracionTerapias : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "tipoespecialidad",
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
                    table.PrimaryKey("tipoespecialidad_pkey", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "terapia",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    fecha_inicio = table.Column<DateOnly>(type: "date", nullable: false),
                    fecha_culminacion = table.Column<DateOnly>(type: "date", nullable: false),
                    horario = table.Column<TimeOnly>(type: "time without time zone", nullable: false),
                    Esta_activo = table.Column<bool>(type: "boolean", nullable: false),
                    id_tipoespecialidad = table.Column<int>(type: "integer", nullable: false),
                    created_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValueSql: "now()"),
                    id_hijo = table.Column<int>(type: "integer", nullable: false)
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
                    table.ForeignKey(
                        name: "fk_tipoespecialidad_incidencias",
                        column: x => x.id_tipoespecialidad,
                        principalTable: "tipoespecialidad",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_terapia_id_hijo",
                table: "terapia",
                column: "id_hijo");

            migrationBuilder.CreateIndex(
                name: "IX_terapia_id_tipoespecialidad",
                table: "terapia",
                column: "id_tipoespecialidad");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "terapia");

            migrationBuilder.DropTable(
                name: "tipoespecialidad");

            migrationBuilder.AlterColumn<string>(
                name: "imagen",
                table: "usuario",
                type: "character varying(150)",
                fixedLength: true,
                maxLength: 150,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "character(150)",
                oldFixedLength: true,
                oldMaxLength: 150,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "nombre_diagnostico",
                table: "hijo",
                type: "character varying(150)",
                fixedLength: true,
                maxLength: 150,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "character(150)",
                oldFixedLength: true,
                oldMaxLength: 150,
                oldNullable: true);
        }
    }
}
