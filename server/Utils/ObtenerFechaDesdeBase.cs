namespace server.Utils
{
    public class ObtenerFechaDesdeBase
    {

        public DateTime ObtenerProximaFecha(DayOfWeek diaBuscado)
            {
                DateTime hoy = DateTime.Today;
                int diasHastaProximo = ((int)diaBuscado - (int)hoy.DayOfWeek + 7) % 7;

                if (diasHastaProximo == 0)
                    diasHastaProximo = 7;

                return hoy.AddDays(diasHastaProximo);
        }

    }
}
