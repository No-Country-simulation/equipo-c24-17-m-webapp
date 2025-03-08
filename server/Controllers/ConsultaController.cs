using Microsoft.AspNetCore.Mvc;
using server.Data;
using server.Data.Models;
using server.DTOs;
using server.Logica;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConsultaController : ControllerBase
    {

        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public ConsultaController(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion

        // GET: api/<ConsultaController>
        [HttpGet("hijo/")]
        public ActionResult<IEnumerable<Consulta>> ObtenerConsultasPorIdTerapia(int id)
        {
            return null;
        }

        // GET api/<ConsultaController>/5
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            LogicaConsulta logica_consulta = new LogicaConsulta(_context);
            try
            {
                return Ok(logica_consulta.ObtenerConsultaPorId(id));
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al obtener la consulta solicitada {ex.Message}");
            }
        }

        // POST api/<ConsultaController>

        [HttpPost]
        public async Task<IActionResult> CrearConsulta([FromBody] ConsultaDTO request)
        {
            LogicaConsulta logica_consulta = new LogicaConsulta(_context);
            try
            {
                var consultaId = await logica_consulta.CrearConsultaAsync(request);
                return Ok(new { Message = "Consulta registrada", ConsultaId = consultaId });
            }
            catch (ArgumentException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
            catch (Exception)
            {
                return StatusCode(500, new { Message = "Error interno del servidor" });
            }
        }

        // PUT api/<ConsultaController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Consulta obj_consulta)
        {
            return null;
        }

        // DELETE api/<ConsultaController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
