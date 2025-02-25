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
            migrationBuilder.CreateTable(
                name: "tipoestudio",
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
                    table.PrimaryKey("tipoestudio_pkey", x => x.id);
                });

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
                name: "usuario",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    nombre = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    correo = table.Column<string>(type: "character varying(150)", maxLength: 150, nullable: false),
                    created_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValueSql: "now()"),
                    imagen = table.Column<string>(type: "character(150)", fixedLength: true, maxLength: 150, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("usuario_pkey", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "hijo",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    nombre = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    apellido = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    fecha_nacimiento = table.Column<DateOnly>(type: "date", nullable: false),
                    created_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValueSql: "now()"),
                    id_usuario = table.Column<int>(type: "integer", nullable: false),
                    nombre_diagnostico = table.Column<string>(type: "character(150)", fixedLength: true, maxLength: 150, nullable: true),
                    descripcion_diagnostico = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("hijos_pkey", x => x.id);
                    table.ForeignKey(
                        name: "fk_usuarios_hijo",
                        column: x => x.id_usuario,
                        principalTable: "usuario",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "estudiosmedicos",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    fecha_realizacion = table.Column<DateOnly>(type: "date", nullable: false),
                    descripcion = table.Column<string>(type: "text", nullable: true),
                    resultado_estudio = table.Column<string>(type: "text", nullable: true),
                    created_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValueSql: "now()"),
                    id_tipoestudio = table.Column<int>(type: "integer", nullable: false),
                    id_hijo = table.Column<int>(type: "integer", nullable: false),
                    IdHijoNavigationId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("estudiosmedicos_pkey", x => x.id);
                    table.ForeignKey(
                        name: "FK_estudiosmedicos_hijo_IdHijoNavigationId",
                        column: x => x.IdHijoNavigationId,
                        principalTable: "hijo",
                        principalColumn: "id");
                    table.ForeignKey(
                        name: "fk_tipoestudio_estudiosmedicos",
                        column: x => x.id_tipoestudio,
                        principalTable: "tipoestudio",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
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
                    id_hijo = table.Column<int>(type: "integer", nullable: false),
                    created_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValueSql: "now()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("incidencias_pkey", x => x.id);
                    table.ForeignKey(
                        name: "fk_hijos_incidencias",
                        column: x => x.id_hijo,
                        principalTable: "hijo",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "fk_tipoincidencias_incidencias",
                        column: x => x.id_tipoincidencia,
                        principalTable: "tipoincidencia",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_estudiosmedicos_id_tipoestudio",
                table: "estudiosmedicos",
                column: "id_tipoestudio");

            migrationBuilder.CreateIndex(
                name: "IX_estudiosmedicos_IdHijoNavigationId",
                table: "estudiosmedicos",
                column: "IdHijoNavigationId");

            migrationBuilder.CreateIndex(
                name: "IX_hijo_id_usuario",
                table: "hijo",
                column: "id_usuario");

            migrationBuilder.CreateIndex(
                name: "IX_incidencia_id_hijo",
                table: "incidencia",
                column: "id_hijo");

            migrationBuilder.CreateIndex(
                name: "IX_incidencia_id_tipoincidencia",
                table: "incidencia",
                column: "id_tipoincidencia");

            migrationBuilder.CreateIndex(
                name: "usuario_correo_key",
                table: "usuario",
                column: "correo",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "estudiosmedicos");

            migrationBuilder.DropTable(
                name: "incidencia");

            migrationBuilder.DropTable(
                name: "tipoestudio");

            migrationBuilder.DropTable(
                name: "hijo");

            migrationBuilder.DropTable(
                name: "tipoincidencia");

            migrationBuilder.DropTable(
                name: "usuario");
        }
    }
}
