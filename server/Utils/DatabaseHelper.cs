using System;
using Microsoft.Extensions.Configuration;

namespace server.Utils
{
    public class DatabaseHelper
    {
        private readonly IConfiguration _configuration;

        public DatabaseHelper(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string GetConnectionString()
        {
            // Obtener DATABASE_URL desde appsettings.json
            string databaseUrl = _configuration.GetConnectionString("DATABASE_URL");

            if (string.IsNullOrEmpty(databaseUrl))
            {
                throw new InvalidOperationException("DATABASE_URL is not set in appsettings.json.");
            }

            if (!databaseUrl.StartsWith("postgres://"))
            {
                throw new InvalidOperationException("DATABASE_URL must start with 'postgres://'.");
            }

            // Parsear la URL para extraer los datos de conexión
            databaseUrl = databaseUrl.Substring("postgres://".Length);
            var userInfoEnd = databaseUrl.IndexOf('@');
            var hostPortEnd = databaseUrl.IndexOf('/');

            if (userInfoEnd == -1 || hostPortEnd == -1)
            {
                throw new InvalidOperationException("DATABASE_URL is not in the correct format.");
            }

            var userInfo = databaseUrl.Substring(0, userInfoEnd).Split(':');
            var username = userInfo[0];
            var password = userInfo[1];

            var hostPort = databaseUrl.Substring(userInfoEnd + 1, hostPortEnd - userInfoEnd - 1).Split(':');
            var host = hostPort[0];
            var port = hostPort.Length > 1 ? int.Parse(hostPort[1]) : 5432;

            var database = databaseUrl.Substring(hostPortEnd + 1);

            return $"Host={host};Port={port};Username={username};Password={password};Database={database};";
        }
    }
}