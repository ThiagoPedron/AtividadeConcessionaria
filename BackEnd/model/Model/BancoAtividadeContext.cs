using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace model.Model;

public partial class BancoAtividadeContext : DbContext
{
    public BancoAtividadeContext()
    {
    }

    public BancoAtividadeContext(DbContextOptions<BancoAtividadeContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Alocacao> Alocacaos { get; set; }

    public virtual DbSet<Automoveis> Automoveis { get; set; }

    public virtual DbSet<Cliente> Clientes { get; set; }

    public virtual DbSet<Concessionaria> Concessionarias { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=THIAGOPC;Initial Catalog=banco-atividade;Integrated Security=True;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Alocacao>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("alocacao");

            entity.Property(e => e.Area).HasColumnName("area");
            entity.Property(e => e.Automovel).HasColumnName("automovel");
            entity.Property(e => e.ConcessionRia).HasColumnName("concession_ria");
            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Quantidade).HasColumnName("quantidade");
        });

        modelBuilder.Entity<Automoveis>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("automoveis");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Modelo)
                .HasMaxLength(50)
                .HasColumnName("modelo");
            entity.Property(e => e.PreO)
                .HasColumnType("money")
                .HasColumnName("pre_o");
        });

        modelBuilder.Entity<Cliente>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("clientes");

            entity.Property(e => e.Nome).HasMaxLength(50);
        });

        modelBuilder.Entity<Concessionaria>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("concessionarias");

            entity.Property(e => e.Id).HasColumnName("Id");
            entity.Property(e => e.Nome)
                .HasMaxLength(50)
                .HasColumnName("Nome");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
