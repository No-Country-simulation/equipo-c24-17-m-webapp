using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
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
                    id = table.Column<int>(type: "integer", nullable: false, defaultValueSql: "nextval('pariente_id_seq'::regclass)"),
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
                    table.PrimaryKey("pariente_pkey", x => x.id);
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
                    fecha = table.Column<DateOnly>(type: "date", nullable: false),
                    descripcion = table.Column<string>(type: "text", nullable: true),
                    created_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: true, defaultValueSql: "now()"),
                    id_tipoestudio = table.Column<int>(type: "integer", nullable: false),
                    id_hijo = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("estudiosmedicos_pkey", x => x.id);
                    table.ForeignKey(
                        name: "fk_hijo_estudiosmedicos",
                        column: x => x.id_hijo,
                        principalTable: "hijo",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "fk_tipoestudio_estudiosmedicos",
                        column: x => x.id_tipoestudio,
                        principalTable: "tipoestudio",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_estudiosmedicos_id_hijo",
                table: "estudiosmedicos",
                column: "id_hijo");

            migrationBuilder.CreateIndex(
                name: "IX_estudiosmedicos_id_tipoestudio",
                table: "estudiosmedicos",
                column: "id_tipoestudio");

            migrationBuilder.CreateIndex(
                name: "IX_hijo_id_usuario",
                table: "hijo",
                column: "id_usuario");

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
                name: "hijo");

            migrationBuilder.DropTable(
                name: "tipoestudio");

            migrationBuilder.DropTable(
                name: "usuario");
        }
    }
}
