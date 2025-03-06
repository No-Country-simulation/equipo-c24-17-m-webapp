﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using server.Data;

#nullable disable

namespace server.Migrations
{
    [DbContext(typeof(BdTeacompanioContext))]
    [Migration("20250306122150_Migration3.1")]
    partial class Migration31
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("server.Data.Models.Consulta", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("id");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("CreatedAt")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp without time zone")
                        .HasColumnName("created_at")
                        .HasDefaultValueSql("now()");

                    b.Property<int>("Duracion")
                        .HasColumnType("integer")
                        .HasColumnName("duracion");

                    b.Property<DateOnly>("Fecha")
                        .HasColumnType("date")
                        .HasColumnName("fecha");

                    b.Property<TimeOnly>("Horario")
                        .HasColumnType("time without time zone");

                    b.Property<int>("IdHijo")
                        .HasColumnType("integer")
                        .HasColumnName("id_hijo");

                    b.Property<int>("IdTipoEspecialidad")
                        .HasColumnType("integer");

                    b.Property<string>("NombreEspecialista")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("nombre_especialista");

                    b.HasKey("Id")
                        .HasName("consultas_pkey");

                    b.HasIndex("IdHijo");

                    b.HasIndex("IdTipoEspecialidad");

                    b.ToTable("consulta", (string)null);
                });

            modelBuilder.Entity("server.Data.Models.EstudioMedico", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("id");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("CreatedAt")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp without time zone")
                        .HasColumnName("created_at")
                        .HasDefaultValueSql("now()");

                    b.Property<string>("Descripcion")
                        .HasColumnType("text")
                        .HasColumnName("descripcion");

                    b.Property<DateOnly>("FechaRealizacion")
                        .HasColumnType("date")
                        .HasColumnName("fecha_realizacion");

                    b.Property<int>("IdHijo")
                        .HasColumnType("integer")
                        .HasColumnName("id_hijo");

                    b.Property<int>("IdTipoestudio")
                        .HasColumnType("integer")
                        .HasColumnName("id_tipoestudio");

                    b.Property<string>("ResultadoEstudio")
                        .HasColumnType("text")
                        .HasColumnName("resultado_estudio");

                    b.HasKey("Id")
                        .HasName("estudiosmedicos_pkey");

                    b.HasIndex("IdHijo");

                    b.HasIndex("IdTipoestudio");

                    b.ToTable("estudiosmedicos", (string)null);
                });

            modelBuilder.Entity("server.Data.Models.Hijo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("id");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Apellido")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("character varying(50)")
                        .HasColumnName("apellido");

                    b.Property<DateTime>("CreatedAt")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp without time zone")
                        .HasColumnName("created_at")
                        .HasDefaultValueSql("now()");

                    b.Property<string>("DescripcionDiagnostico")
                        .HasColumnType("text")
                        .HasColumnName("descripcion_diagnostico");

                    b.Property<DateOnly?>("FechaCulminacion")
                        .HasColumnType("date")
                        .HasColumnName("fecha_culminacion");

                    b.Property<DateOnly?>("FechaInicio")
                        .HasColumnType("date")
                        .HasColumnName("fecha_inicio");

                    b.Property<DateOnly>("FechaNacimiento")
                        .HasColumnType("date")
                        .HasColumnName("fecha_nacimiento");

                    b.Property<int>("IdUsuario")
                        .HasColumnType("integer")
                        .HasColumnName("id_usuario");

                    b.Property<string>("Nombre")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("character varying(50)")
                        .HasColumnName("nombre");

                    b.Property<string>("NombreDiagnostico")
                        .HasMaxLength(150)
                        .HasColumnType("character(150)")
                        .HasColumnName("nombre_diagnostico")
                        .IsFixedLength();

                    b.Property<bool>("RealizaTerapias")
                        .HasColumnType("boolean")
                        .HasColumnName("realiza_terapias");

                    b.HasKey("Id")
                        .HasName("hijos_pkey");

                    b.HasIndex("IdUsuario");

                    b.ToTable("hijo", (string)null);
                });

            modelBuilder.Entity("server.Data.Models.Incidencia", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("id");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("CreatedAt")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp without time zone")
                        .HasColumnName("created_at")
                        .HasDefaultValueSql("now()");

                    b.Property<string>("Descripcion")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("descripcion");

                    b.Property<int>("Duracion")
                        .HasColumnType("integer")
                        .HasColumnName("duracion");

                    b.Property<bool>("Es_positiva")
                        .HasColumnType("boolean")
                        .HasColumnName("es_positiva");

                    b.Property<DateOnly>("Fecha")
                        .HasColumnType("date")
                        .HasColumnName("fecha");

                    b.Property<int>("IdHijo")
                        .HasColumnType("integer")
                        .HasColumnName("id_hijo");

                    b.Property<int>("IdTipoIncidencia")
                        .HasColumnType("integer")
                        .HasColumnName("id_tipoincidencia");

                    b.HasKey("Id")
                        .HasName("incidencias_pkey");

                    b.HasIndex("IdHijo");

                    b.HasIndex("IdTipoIncidencia");

                    b.ToTable("incidencia", (string)null);
                });

            modelBuilder.Entity("server.Data.Models.Medicacion", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("id");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("CreatedAt")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp without time zone")
                        .HasColumnName("created_at")
                        .HasDefaultValueSql("now()");

                    b.Property<string>("Descripcion")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("descripcion");

                    b.Property<TimeOnly>("Horario")
                        .HasColumnType("time without time zone")
                        .HasColumnName("horario");

                    b.Property<int>("IdHijo")
                        .HasColumnType("integer")
                        .HasColumnName("id_hijo");

                    b.Property<string>("Nombre")
                        .IsRequired()
                        .HasMaxLength(150)
                        .HasColumnType("character varying(150)")
                        .HasColumnName("nombre");

                    b.HasKey("Id")
                        .HasName("medicacion_pkey");

                    b.HasIndex("IdHijo");

                    b.ToTable("medicacion", (string)null);
                });

            modelBuilder.Entity("server.Data.Models.TipoEspecialidad", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("id");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<DateTime?>("CreatedAt")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp without time zone")
                        .HasColumnName("created_at")
                        .HasDefaultValueSql("now()");

                    b.Property<string>("Descripcion")
                        .HasColumnType("text")
                        .HasColumnName("descripcion");

                    b.Property<string>("Nombre")
                        .IsRequired()
                        .HasMaxLength(150)
                        .HasColumnType("character varying(150)")
                        .HasColumnName("nombre");

                    b.HasKey("Id")
                        .HasName("tipoespecialidad_pkey");

                    b.ToTable("tipoespecialidad", (string)null);
                });

            modelBuilder.Entity("server.Data.Models.TipoIncidencia", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("id");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Nombre")
                        .IsRequired()
                        .HasMaxLength(150)
                        .HasColumnType("character varying(150)")
                        .HasColumnName("nombre");

                    b.HasKey("Id")
                        .HasName("tipoincidencia_pkey");

                    b.ToTable("tipoincidencia", (string)null);
                });

            modelBuilder.Entity("server.Data.Models.Tipoestudio", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("id");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<DateTime?>("CreatedAt")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp without time zone")
                        .HasColumnName("created_at")
                        .HasDefaultValueSql("now()");

                    b.Property<string>("Descripcion")
                        .HasColumnType("text")
                        .HasColumnName("descripcion");

                    b.Property<string>("Nombre")
                        .IsRequired()
                        .HasMaxLength(150)
                        .HasColumnType("character varying(150)")
                        .HasColumnName("nombre");

                    b.HasKey("Id")
                        .HasName("tipoestudio_pkey");

                    b.ToTable("tipoestudio", (string)null);
                });

            modelBuilder.Entity("server.Data.Models.Usuario", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("id");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Correo")
                        .IsRequired()
                        .HasMaxLength(150)
                        .HasColumnType("character varying(150)")
                        .HasColumnName("correo");

                    b.Property<DateTime>("CreatedAt")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp without time zone")
                        .HasColumnName("created_at")
                        .HasDefaultValueSql("now()");

                    b.Property<string>("Imagen")
                        .HasMaxLength(150)
                        .HasColumnType("character(150)")
                        .HasColumnName("imagen")
                        .IsFixedLength();

                    b.Property<string>("Nombre")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("character varying(100)")
                        .HasColumnName("nombre");

                    b.HasKey("Id")
                        .HasName("usuario_pkey");

                    b.HasIndex(new[] { "Correo" }, "usuario_correo_key")
                        .IsUnique();

                    b.ToTable("usuario", (string)null);
                });

            modelBuilder.Entity("server.Data.Models.Consulta", b =>
                {
                    b.HasOne("server.Data.Models.Hijo", "IdHijoNavigation")
                        .WithMany("Consultas")
                        .HasForeignKey("IdHijo")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired()
                        .HasConstraintName("fk_hijo_consultas");

                    b.HasOne("server.Data.Models.TipoEspecialidad", "IdTipoEspecialidadNavigation")
                        .WithMany("Consultas")
                        .HasForeignKey("IdTipoEspecialidad")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired()
                        .HasConstraintName("fk_tipoespecialidad_consultas");

                    b.Navigation("IdHijoNavigation");

                    b.Navigation("IdTipoEspecialidadNavigation");
                });

            modelBuilder.Entity("server.Data.Models.EstudioMedico", b =>
                {
                    b.HasOne("server.Data.Models.Hijo", "IdHijoNavigation")
                        .WithMany("Estudiosmedicos")
                        .HasForeignKey("IdHijo")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired()
                        .HasConstraintName("fk_hijo_estudiosmedicos");

                    b.HasOne("server.Data.Models.Tipoestudio", "IdTipoestudioNavigation")
                        .WithMany("Estudiosmedicos")
                        .HasForeignKey("IdTipoestudio")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired()
                        .HasConstraintName("fk_tipoestudio_estudiosmedicos");

                    b.Navigation("IdHijoNavigation");

                    b.Navigation("IdTipoestudioNavigation");
                });

            modelBuilder.Entity("server.Data.Models.Hijo", b =>
                {
                    b.HasOne("server.Data.Models.Usuario", "IdUsuarioNavigation")
                        .WithMany("Hijos")
                        .HasForeignKey("IdUsuario")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired()
                        .HasConstraintName("fk_usuarios_hijo");

                    b.Navigation("IdUsuarioNavigation");
                });

            modelBuilder.Entity("server.Data.Models.Incidencia", b =>
                {
                    b.HasOne("server.Data.Models.Hijo", "IdHijoNavigation")
                        .WithMany("Incidencias")
                        .HasForeignKey("IdHijo")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired()
                        .HasConstraintName("fk_hijos_incidencias");

                    b.HasOne("server.Data.Models.TipoIncidencia", "IdTipoIncidenciaNavigation")
                        .WithMany("Incidencias")
                        .HasForeignKey("IdTipoIncidencia")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired()
                        .HasConstraintName("fk_tipoincidencias_incidencias");

                    b.Navigation("IdHijoNavigation");

                    b.Navigation("IdTipoIncidenciaNavigation");
                });

            modelBuilder.Entity("server.Data.Models.Medicacion", b =>
                {
                    b.HasOne("server.Data.Models.Hijo", "IdHijoNavigation")
                        .WithMany("Medicaciones")
                        .HasForeignKey("IdHijo")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired()
                        .HasConstraintName("fk_hijos_medicaciones");

                    b.Navigation("IdHijoNavigation");
                });

            modelBuilder.Entity("server.Data.Models.Hijo", b =>
                {
                    b.Navigation("Consultas");

                    b.Navigation("Estudiosmedicos");

                    b.Navigation("Incidencias");

                    b.Navigation("Medicaciones");
                });

            modelBuilder.Entity("server.Data.Models.TipoEspecialidad", b =>
                {
                    b.Navigation("Consultas");
                });

            modelBuilder.Entity("server.Data.Models.TipoIncidencia", b =>
                {
                    b.Navigation("Incidencias");
                });

            modelBuilder.Entity("server.Data.Models.Tipoestudio", b =>
                {
                    b.Navigation("Estudiosmedicos");
                });

            modelBuilder.Entity("server.Data.Models.Usuario", b =>
                {
                    b.Navigation("Hijos");
                });
#pragma warning restore 612, 618
        }
    }
}
