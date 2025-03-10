﻿using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using server.Data.Models;

namespace server.Data;

public partial class BdTeacompanioContext : DbContext
{
    public BdTeacompanioContext()
    {
    }

    public BdTeacompanioContext(DbContextOptions<BdTeacompanioContext> options)
        : base(options)
    {
    }

    public virtual DbSet<ConsultaDia> ConsultaDias { get; set; }
    public virtual DbSet<Consulta> Consultas { get; set; }
    public virtual DbSet<Medicacion> Medicaciones { get; set; }
    public virtual DbSet<TipoEspecialidad> TipoEspecialidades { get; set; }
    public virtual DbSet<TipoIncidencia> TipoIncidencias { get; set; }
    public virtual DbSet<Incidencia> Incidencias { get; set; }
    public virtual DbSet<EstudioMedico> EstudioMedico { get; set; }

    public virtual DbSet<Hijo> Hijos { get; set; }

    public virtual DbSet<Tipoestudio> Tipoestudios { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        var timeOnlyConverter = new ValueConverter<TimeOnly, TimeSpan>(
        v => v.ToTimeSpan(),      // Convierte `TimeOnly` a `TimeSpan` para PostgreSQL
        v => TimeOnly.FromTimeSpan(v) // Convierte `TimeSpan` de PostgreSQL a `TimeOnly`
);
        modelBuilder.Entity<Incidencia>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("incidencias_pkey");

            entity.ToTable("incidencia");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CreatedAt)
                .HasDefaultValueSql("now()")
                .HasColumnType("timestamp without time zone")
                .HasColumnName("created_at");
            entity.Property(e => e.Descripcion).HasColumnName("descripcion");
            entity.Property(e => e.Fecha).HasColumnName("fecha");
            entity.Property(e => e.Duracion).HasColumnName("duracion");
            entity.Property(e => e.Es_positiva).HasColumnName("es_positiva");
            entity.Property(e => e.IdTipoIncidencia).HasColumnName("id_tipoincidencia");
            entity.Property(e => e.IdHijo).HasColumnName("id_hijo");

            entity.HasOne(d => d.IdTipoIncidenciaNavigation)
                .WithMany(p => p.Incidencias)
                .HasForeignKey(d => d.IdTipoIncidencia)
                .HasConstraintName("fk_tipoincidencias_incidencias");

            entity.HasOne(d => d.IdHijoNavigation)
                .WithMany(h => h.Incidencias)
                .HasForeignKey(d => d.IdHijo)
                .HasConstraintName("fk_hijos_incidencias")
                .OnDelete(DeleteBehavior.Cascade);
        });
        //-------------------------------------------------------------------------------------


        modelBuilder.Entity<Consulta>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("consultas_pkey");

            entity.ToTable("consulta");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CreatedAt)
                .HasDefaultValueSql("now()")
                .HasColumnType("timestamp without time zone")
                .HasColumnName("created_at");
            entity.Property(e => e.NombreEspecialista).HasColumnName("nombre_especialista");
            entity.Property(e => e.IdHijo).HasColumnName("id_hijo");

            entity.HasOne(d => d.IdTipoEspecialidadNavigation)
                .WithMany(p => p.Consultas)
                .HasForeignKey(d => d.IdTipoEspecialidad)
                .HasConstraintName("fk_tipoespecialidad_consultas");

            entity.HasOne(d => d.IdHijoNavigation)
                .WithMany(p => p.Consultas)
                .HasForeignKey(d => d.IdHijo)
                .HasConstraintName("fk_hijo_consultas");
        });
        //-------------------------------------------------------------------------------------


        modelBuilder.Entity<ConsultaDia>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("dia_consulta_pkey");

            entity.ToTable("diaconsulta");

            entity.Property(t => t.HorarioInicio).HasColumnName("horario_inicio");
            entity.Property(t => t.HorarioFin).HasColumnName("horario_fin");


            entity.Property(e => e.Dia).HasColumnName("dia");
            entity.Property(e => e.IdConsulta).HasColumnName("id_consulta");
            entity.Property(e => e.CreatedAt)
            .HasDefaultValueSql("now()")
            .HasColumnType("timestamp without time zone")
            .HasColumnName("created_at");


            entity.HasOne(d => d.IdConsultaNavigation)
                .WithMany(p => p.ConsultasDias)
                .HasForeignKey(d => d.IdConsulta)
                .HasConstraintName("fk_consultas_consultasdias");
        });
        //-------------------------------------------------------------------------------------


        modelBuilder.Entity<Medicacion>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("medicacion_pkey");

            entity.ToTable("medicacion");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CreatedAt)
                .HasDefaultValueSql("now()")
                .HasColumnType("timestamp without time zone")
                .HasColumnName("created_at");
            entity.Property(e => e.Horario).HasColumnName("horario");
            entity.Property(e => e.Descripcion).HasColumnName("descripcion");
            entity.Property(e => e.Nombre)
                .HasMaxLength(150)
                .HasColumnName("nombre");
            entity.Property(e => e.IdHijo).HasColumnName("id_hijo");

            entity.HasOne(d => d.IdHijoNavigation)
                .WithMany(h => h.Medicaciones)
                .HasForeignKey(d => d.IdHijo)
                .HasConstraintName("fk_hijos_medicaciones")
                .OnDelete(DeleteBehavior.Cascade);
        });

        modelBuilder.Entity<TipoEspecialidad>(entity =>
    {
        entity.HasKey(e => e.Id).HasName("tipoespecialidad_pkey");

        entity.ToTable("tipoespecialidad");

        entity.Property(e => e.Id).HasColumnName("id");
        entity.Property(e => e.Nombre)
            .HasMaxLength(150)
            .HasColumnName("nombre");
    });

        modelBuilder.Entity<TipoIncidencia>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("tipoincidencia_pkey");

            entity.ToTable("tipoincidencia");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Nombre)
                .HasMaxLength(150)
                .HasColumnName("nombre");
        });

        modelBuilder.Entity<EstudioMedico>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("estudiosmedicos_pkey");

            entity.ToTable("estudiosmedicos");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CreatedAt)
                .HasDefaultValueSql("now()")
                .HasColumnType("timestamp without time zone")
                .HasColumnName("created_at");
            entity.Property(e => e.Descripcion).HasColumnName("descripcion");
            entity.Property(e => e.ResultadoEstudio).HasColumnName("resultado_estudio");
            entity.Property(e => e.FechaRealizacion).HasColumnName("fecha_realizacion");
            entity.Property(e => e.IdHijo).HasColumnName("id_hijo");
            entity.Property(e => e.IdTipoestudio).HasColumnName("id_tipoestudio");

            entity.HasOne(d => d.IdHijoNavigation).WithMany(p => p.Estudiosmedicos)
                .HasForeignKey(d => d.IdHijo)
                .HasConstraintName("fk_hijo_estudiosmedicos");

            entity.HasOne(d => d.IdTipoestudioNavigation).WithMany(p => p.Estudiosmedicos)
                .HasForeignKey(d => d.IdTipoestudio)
                .HasConstraintName("fk_tipoestudio_estudiosmedicos");
        });

        modelBuilder.Entity<Hijo>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("hijos_pkey");

            entity.ToTable("hijo");

            entity.Property(e => e.Id)


                .HasColumnName("id");
            entity.Property(e => e.Apellido)
                .HasMaxLength(50)
                .HasColumnName("apellido");
            entity.Property(e => e.CreatedAt)
                .HasDefaultValueSql("now()")
                .HasColumnType("timestamp without time zone")
                .HasColumnName("created_at");
            entity.Property(e => e.DescripcionDiagnostico).HasColumnName("descripcion_diagnostico");
            entity.Property(e => e.FechaNacimiento).HasColumnName("fecha_nacimiento");
            entity.Property(e => e.IdUsuario).HasColumnName("id_usuario");
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .HasColumnName("nombre");
            entity.Property(e => e.NombreDiagnostico)
                .HasMaxLength(150)
                .IsFixedLength()
                .HasColumnName("nombre_diagnostico");
            entity.Property(e => e.FechaInicio).HasColumnName("fecha_inicio");
            entity.Property(e => e.FechaCulminacion).HasColumnName("fecha_culminacion");

            entity.HasOne(d => d.IdUsuarioNavigation).WithMany(p => p.Hijos)
                .HasForeignKey(d => d.IdUsuario)
                .HasConstraintName("fk_usuarios_hijo");
        });

        modelBuilder.Entity<Tipoestudio>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("tipoestudio_pkey");

            entity.ToTable("tipoestudio");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CreatedAt)
                .HasDefaultValueSql("now()")
                .HasColumnType("timestamp without time zone")
                .HasColumnName("created_at");
            entity.Property(e => e.Descripcion).HasColumnName("descripcion");
            entity.Property(e => e.Nombre)
                .HasMaxLength(150)
                .HasColumnName("nombre");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("usuario_pkey");

            entity.ToTable("usuario");

            entity.HasIndex(e => e.Correo, "usuario_correo_key").IsUnique();

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Correo)
                .HasMaxLength(150)
                .HasColumnName("correo");
            entity.Property(e => e.CreatedAt)
                .HasDefaultValueSql("now()")
                .HasColumnType("timestamp without time zone")
                .HasColumnName("created_at");
            entity.Property(e => e.Imagen)
                .HasMaxLength(150)
                .IsFixedLength()
                .HasColumnName("imagen");
            entity.Property(e => e.Nombre)
                .HasMaxLength(100)
                .HasColumnName("nombre");
        });

        OnModelCreatingPartial(modelBuilder);
    }
    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
