using Microsoft.AspNetCore.Mvc;
using server.Data;
using server.Data.Models;
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
            LogicaConsulta logica_consulta = new LogicaConsulta(_context);
            try
            {
                var lista_consultas = logica_consulta.ObtenerTodosLasConsultasDeUnaTerapia(id);
                return Ok(lista_consultas);
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al obtener las consultas del usuario: {ex.Message}");
            }
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
        public ActionResult Post([FromBody] Consulta obj_consulta)
        {
            LogicaConsulta logica_consulta = new LogicaConsulta(_context);
            try
            {
                logica_consulta.CrearConsulta(obj_consulta);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al crear la consulta: {ex.Message}");
            }
        }

        // PUT api/<ConsultaController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody]Consulta obj_consulta)
        {
            LogicaConsulta logica_consulta = new LogicaConsulta(_context);
            try
            {
                logica_consulta.ActualizarConsulta(id, obj_consulta);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al actualizar la consulta: {ex.Message}");
            }

        }

        // DELETE api/<ConsultaController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
