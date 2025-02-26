using System.Text.Json.Serialization;
using System.Text.Json;

namespace server.Utils
{
    public class TimeOnlyConverter : JsonConverter<TimeOnly>
        {
            private const string Format = "HH:mm";

            public override TimeOnly Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
            {
                return TimeOnly.ParseExact(reader.GetString()!, Format);
            }

            public override void Write(Utf8JsonWriter writer, TimeOnly value, JsonSerializerOptions options)
            {
                writer.WriteStringValue(value.ToString(Format));
            }
        }
}
