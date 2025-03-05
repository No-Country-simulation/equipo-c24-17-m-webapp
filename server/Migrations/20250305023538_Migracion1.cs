using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class Migracion1 : Migration
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
                    nombre = table.Column<string>(type: "character varying(150)", maxLength: 150, nullable: false)
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
                    imagen = table.Column<string>(type: "character varying(150)", maxLength: 150, nullable: true)
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
                    nombre_diagnostico = table.Column<string>(type: "character varying(150)", maxLength: 150, nullable: true),
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

            migrationBuilder.CreateTable(
                name: "incidencia",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    fecha = table.Column<DateOnly>(type: "date", nullable: false),
                    duracion = table.Column<int>(type: "integer", nullable: false),
                    id_tipoincidencia = table.Column<int>(type: "integer", nullable: false),
                    descripcion = table.Column<string>(type: "text", nullable: false),
                    es_positiva = table.Column<bool>(type: "boolean", nullable: false),
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

            migrationBuilder.CreateTable(
                name: "medicacion",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    nombre = table.Column<string>(type: "character varying(150)", maxLength: 150, nullable: false),
                    descripcion = table.Column<string>(type: "text", nullable: false),
                    horario = table.Column<TimeOnly>(type: "time without time zone", nullable: false),
                    created_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValueSql: "now()"),
                    id_hijo = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("medicacion_pkey", x => x.id);
                    table.ForeignKey(
                        name: "fk_hijos_medicaciones",
                        column: x => x.id_hijo,
                        principalTable: "hijo",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "terapia",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    fecha_inicio = table.Column<DateOnly>(type: "date", nullable: false),
                    fecha_culminacion = table.Column<DateOnly>(type: "date", nullable: false),
                    esta_activo = table.Column<bool>(type: "boolean", nullable: false),
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
                });

            migrationBuilder.CreateTable(
                name: "consulta",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    fecha = table.Column<DateOnly>(type: "date", nullable: false),
                    Horario = table.Column<TimeOnly>(type: "time without time zone", nullable: false),
                    duracion = table.Column<int>(type: "integer", nullable: false),
                    IdTipoEspecialidad = table.Column<int>(type: "integer", nullable: false),
                    nombre_especialista = table.Column<string>(type: "text", nullable: false),
                    id_terapia = table.Column<int>(type: "integer", nullable: false),
                    IdEspecialidad = table.Column<int>(type: "integer", nullable: false),
                    created_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false, defaultValueSql: "now()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("consultas_pkey", x => x.id);
                    table.ForeignKey(
                        name: "fk_terapia_consultas",
                        column: x => x.id_terapia,
                        principalTable: "terapia",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "fk_tipoespecialidad_consultas",
                        column: x => x.IdTipoEspecialidad,
                        principalTable: "tipoespecialidad",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_consulta_id_terapia",
                table: "consulta",
                column: "id_terapia");

            migrationBuilder.CreateIndex(
                name: "IX_consulta_IdTipoEspecialidad",
                table: "consulta",
                column: "IdTipoEspecialidad");

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
                name: "IX_incidencia_id_hijo",
                table: "incidencia",
                column: "id_hijo");

            migrationBuilder.CreateIndex(
                name: "IX_incidencia_id_tipoincidencia",
                table: "incidencia",
                column: "id_tipoincidencia");

            migrationBuilder.CreateIndex(
                name: "IX_medicacion_id_hijo",
                table: "medicacion",
                column: "id_hijo");

            migrationBuilder.CreateIndex(
                name: "IX_terapia_id_hijo",
                table: "terapia",
                column: "id_hijo");

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
                name: "consulta");

            migrationBuilder.DropTable(
                name: "estudiosmedicos");

            migrationBuilder.DropTable(
                name: "incidencia");

            migrationBuilder.DropTable(
                name: "medicacion");

            migrationBuilder.DropTable(
                name: "terapia");

            migrationBuilder.DropTable(
                name: "tipoespecialidad");

            migrationBuilder.DropTable(
                name: "tipoestudio");

            migrationBuilder.DropTable(
                name: "tipoincidencia");

            migrationBuilder.DropTable(
                name: "hijo");

            migrationBuilder.DropTable(
                name: "usuario");
        }
    }
}
