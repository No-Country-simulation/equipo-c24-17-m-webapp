using server.Clases;
using server.Utils;

namespace server.Logica
{
    public class LogicaEnviarCorreos
    {

        public void EnviarCorreos(EmailRequest obj_email)
        {
            var configuration = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
            .Build();

            var emailService = new EmailService(configuration);

            obj_email.Subject = "gabrielleaurevoir@gmail.com";
            obj_email.To = "prueba2";
            obj_email.Body = @"<html lang='es'>
            <head>
                <meta charset='UTF-8'>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                <title>Confirmación de Turno</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            padding: 20px;
        }
        .container {
            background: #FAEDDA;
            padding: 20px;
            border-radius: 10px;
            max-width: 600px;
            margin: auto;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .logo {
            width: 300px;
            margin-bottom: 10px;
        }
        .title {
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            color: #4F73CE;
            margin-bottom: 20px;
        }
        .highlight {
            font-weight: bold;
        }
        .button {
            display: block;
            text-align: center;
            background: #FF4E50;
            color: white !important; /* ← Forzar el color blanco */
            padding: 15px;
            text-decoration: none;
            border-radius: 5px;
            margin: 20px auto;
            width: 80%;
            font-size: 18px;
            font-weight: bold;
            border: none;
        }
        .section-title {
            color: #E67E22;
            font-weight: bold;
            margin-top: 20px;
        }
    </style>
            </head>
            <body>
                <div class='container'>
                    <img src=""https://uc5a8c39365d4949f240d5482356.previews.dropboxusercontent.com/p/thumb/ACk4u9bAYwhnveRMReNqRHR2GYeE0Cjfj4oM13neC8zgDqiI25MMdsdVzoAxfkG2K7j6plHVj8e94GZwq7wMiAU4BJ5fqoySA9fxWhv5HLWvuauhnxU4cykcuVQnfgOtNwsdzrj5oHSHfYzd4lVpwP-vpnj-_aGnX0bt5w9GLy6a8J2MpcsBJ5DAeQP5I0L-r1xcdtsYnFuxIX-zLNTvRr6BOdtWXGJenes6YShbct4sFSNeaNU38nhkIypfhkPBw7k1wCdloRejWF4zXhkvjdgH8e6bmp9ZRkDoAJbJk8aFnD5jWnVC5wkfwwDBWWSlJ8CdXdMEh6XJcyao5-d-a-jZ5R309Hj1MItK2MLTO8vhd3NrdNoGATavmkP1dN8iyVM/p.png?is_prewarmed=true"" alt=""Logo"" class=""logo"">
                    <div class='title'>Recordatorio de turno: Terapia de Fonoaudiología</div>
                    <p>Estimado/a <span class='highlight'>GIL DUARTE GABRIELA TERESITA</span>:</p>
                    <p>Te recordamos que has reservado un turno para una consulta terapeutica para tu hijo: </p>
                    <a href='https://teacompanio.up.railway.app/panel/familiares/#/terapias' class='button'> Parra Gil Thiago </a>
                    <p>Si <span class='highlight'>no vas a asistir</span> a tu consulta presencial o por Telemedicina, es <span class='highlight'>importante</span> que por favor la canceles o reprogrames para que otro paciente que lo necesita pueda tomarla, disminuyendo la demora en la asignación.</p>
                    <p class='section-title'>Datos del paciente:</p>
                    <p>Fecha de Nacimiento: <span class='highlight'>27/07/2019</span></p>
                    <p>Edad: <span class='highlight'>5 años</span></p>
                    <p class='section-title'>Constancia del Turno:</p>
                    <p>Servicio: <span class='highlight'>Fonoaudiología</span></p>
                    <p>Profesional: <span class='highlight'>Dr. Paco Pedro de la mar.</span></p>
                    <p>Turno para el día: <span class='highlight'>06/03/2025 - 17:30 hs</span></p>
                </div>
            </body>
            </html>";
            emailService.SendEmail(obj_email.Subject, obj_email.To, obj_email.Body);
        }

        public void ArmarBody()
        {

        }
    }
}
