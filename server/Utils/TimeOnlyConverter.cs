using System.Text.Json.Serialization;
using System.Text.Json;

namespace server.Utils
{
    public class TimeOnlyConverter : JsonConverter<TimeOnly>
    {
        public override TimeOnly Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            var timeString = reader.GetString();
            if (string.IsNullOrEmpty(timeString))
            {
                throw new JsonException("El valor de la hora no puede estar vacío.");
            }

            if (DateTime.TryParseExact(timeString, "HH:mm", null, System.Globalization.DateTimeStyles.None, out var dateTime))
            {
                return TimeOnly.FromDateTime(dateTime);
            }

            throw new JsonException($"No se pudo convertir '{timeString}' en un TimeOnly válido.");
        }

        public override void Write(Utf8JsonWriter writer, TimeOnly value, JsonSerializerOptions options)
        {
            writer.WriteStringValue(value.ToString("HH:mm"));
        }
    }
}
