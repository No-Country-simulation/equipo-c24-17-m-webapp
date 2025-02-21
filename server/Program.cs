using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Utils;

var builder = WebApplication.CreateBuilder(args);

var config = builder.Configuration;

var connectionString = Environment.GetEnvironmentVariable("DATABASE_URL");

if (string.IsNullOrEmpty(connectionString))
{
    connectionString = builder.Configuration.GetConnectionString("PostgreSQL");
}
else
{
    string conexion_url = connectionString;
    DatabaseHelper dataBaseHelper = new DatabaseHelper(config);
    connectionString = dataBaseHelper.GetConnectionString(conexion_url);
}

// Configurar DbContext con la cadena de conexión
builder.Services.AddDbContext<BdTeacompanioContext>(options =>
    options.UseNpgsql(connectionString));


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//configura CORS para permitir cualquier acceso
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

// Configura Kestrel para escuchar en ambos IPv4 and IPv6
builder.WebHost.ConfigureKestrel(options =>
{
    options.ListenAnyIP(5000); // Escucha en IPv4 (0.0.0.0) and IPv6 (::) en el puesto 5000
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowAll");
app.MapControllers();
app.Run();
