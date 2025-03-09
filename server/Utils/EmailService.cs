using System.Net.Mail;
using System.Net;
using System;
using Microsoft.Extensions.Configuration;

namespace server.Utils
{
    public class EmailService
    {
        private readonly IConfiguration _configuration;

        public EmailService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public void SendEmail(string toEmail, string subject, string body)
        {
            try
            {
                var smtpSettings = _configuration.GetSection("SmtpSettings");

                using var smtpClient = new SmtpClient(smtpSettings["Server"])
                {
                    Port = int.Parse(smtpSettings["Port"]),
                    Credentials = new NetworkCredential(smtpSettings["Username"], smtpSettings["Password"]),
                    EnableSsl = bool.Parse(smtpSettings["EnableSSL"])
                };

                var mailMessage = new MailMessage
                {
                    From = new MailAddress(smtpSettings["FromEmail"]),
                    Subject = subject,
                    Body = body,
                    IsBodyHtml = true
                };

                mailMessage.To.Add(toEmail);

                smtpClient.Send(mailMessage);

                Console.WriteLine("✅ Correo enviado a " + toEmail);
            }
            catch (Exception ex)
            {
                Console.WriteLine("❌ Error enviando correo: " + ex.Message);
            }
        }
    }

}
