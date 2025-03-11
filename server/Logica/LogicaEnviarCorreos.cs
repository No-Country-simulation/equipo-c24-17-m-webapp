using server.Clases;
using server.DTOs;
using server.Utils;

namespace server.Logica
{
    public class LogicaEnviarCorreos
    {

        public void EnviarCorreos(EmailRequest obj_email, ConsultaDiaDTO person)
        {
            var configuration = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
            .Build();

            var emailService = new EmailService(configuration);

            obj_email.Subject = obj_email.Subject;
            obj_email.To = obj_email.To;
            obj_email.Body = $@"
    <html lang='es'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Confirmación de Turno</title>
        <style>
            body {{
                font-family: Arial, sans-serif;
                background-color: #f5f5f5;
                padding: 20px;
            }}
            .container {{
                background: #FAEDDA;
                padding: 20px;
                border-radius: 10px;
                max-width: 600px;
                margin: auto;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }}
            .logo {{
                width: 300px;
                margin-bottom: 10px;
            }}
            .title {{
                text-align: center;
                font-size: 24px;
                font-weight: bold;
                color: #4F73CE;
                margin-bottom: 20px;
            }}
            .highlight {{
                font-weight: bold;
            }}
            .button {{
                display: block;
                text-align: center;
                background: #FF4E50;
                color: white !important;
                padding: 15px;
                text-decoration: none;
                border-radius: 5px;
                margin: 20px auto;
                width: 80%;
                font-size: 18px;
                font-weight: bold;
                border: none;
            }}
            .section-title {{
                color: #E67E22;
                font-weight: bold;
                margin-top: 20px;
            }}
        </style>
    </head>
    <body>
        <div class='container'>
            <img src=""https://uc5a8c39365d4949f240d5482356.previews.dropboxusercontent.com/p/thumb/ACk4u9bAYwhnveRMReNqRHR2GYeE0Cjfj4oM13neC8zgDqiI25MMdsdVzoAxfkG2K7j6plHVj8e94GZwq7wMiAU4BJ5fqoySA9fxWhv5HLWvuauhnxU4cykcuVQnfgOtNwsdzrj5oHSHfYzd4lVpwP-vpnj-_aGnX0bt5w9GLy6a8J2MpcsBJ5DAeQP5I0L-r1xcdtsYnFuxIX-zLNTvRr6BOdtWXGJenes6YShbct4sFSNeaNU38nhkIypfhkPBw7k1wCdloRejWF4zXhkvjdgH8e6bmp9ZRkDoAJbJk8aFnD5jWnVC5wkfwwDBWWSlJ8CdXdMEh6XJcyao5-d-a-jZ5R309Hj1MItK2MLTO8vhd3NrdNoGATavmkP1dN8iyVM/p.png?is_prewarmed=true"" alt=""Logo"" class=""logo"">
            <div class='title'>Asignación de turno para consulta de: {person.Servicio}</div>
            <p>Estimado/a usuario <span class='highlight'>{person.NombreUsuario}</span>:</p>
            <p>Te recordamos que has reservado un turno para una consulta terapéutica para tu hijo: <span class='highlight'>{person.NombreHijo} {person.ApellidoHijo}</span></p>
            <a href='https://teacompanio.up.railway.app/panel/familiares/{person.IdHijo}/terapias' class='button'> Ver turno de {person.NombreHijo} {person.ApellidoHijo} </a>
            <p>Si <span class='highlight'>no vas a asistir</span> a tu consulta presencial o por Telemedicina, es <span class='highlight'>importante</span> que la canceles o reprogrames para que otro paciente pueda tomarla.</p>
            <p class='section-title'>Datos del paciente:</p>
            <p>Fecha de Nacimiento: <span class='highlight'>{person.FechaNacimiento:dd/MM/yyyy}</span></p>
            <p>Edad: <span class='highlight'>{person.Edad} años</span></p>
            <p class='section-title'>Constancia del Turno:</p>
            <p>Servicio: <span class='highlight'>{person.Servicio}</span></p>
            <p>Profesional: <span class='highlight'>{person.Profesional}</span></p>
            <p>Turno para el día: <span class='highlight'>{person.FechaTurno:dd/MM/yyyy} - incio: {person.HorarioInicio}hs hasta: {person.HorarioFin}hs</span></p>
        </div>
    </body>
    </html>";

            emailService.SendEmail(obj_email.Subject, obj_email.To, obj_email.Body);
        }
    }
}
