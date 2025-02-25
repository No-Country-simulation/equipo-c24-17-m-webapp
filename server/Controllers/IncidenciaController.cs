using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Data.Models;
using server.Logica;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IncidenciaController : ControllerBase
    {

        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public IncidenciaController(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion

        // GET: api/<IncidenciaController>
        [HttpGet]
        public ActionResult<IEnumerable<EstudioMedico>> GetAll(int id)
        {
            LogicaIncidencia logica_incidencia = new LogicaIncidencia(_context);
            try
            {
                var lista_incidencias = logica_incidencia.ObtenerTodasLasIncidencias(id);
                return Ok(lista_incidencias);
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al obtener las incidencias solicitadas: {ex.Message}");
            }
        }

        // GET api/<IncidenciaController>/5
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            LogicaIncidencia logica_incidencia = new LogicaIncidencia(_context);
            try
            {
                return Ok(logica_incidencia.ObtenerIncidenciaPorId(id));
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al obtener la incidencia solicitada: {ex.Message}");
            }
        }

        // POST api/<IncidenciaController>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<IncidenciaController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<IncidenciaController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
