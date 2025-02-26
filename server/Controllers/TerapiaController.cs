using Microsoft.AspNetCore.Mvc;
using server.Data;
using server.Data.Models;
using server.Logica;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TerapiaController : ControllerBase
    {
        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public TerapiaController(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion

        // GET: api/<TerapiaController>
        [HttpGet]
        public ActionResult<IEnumerable<Terapia>> GetAll(int id)
        {
            LogicaTerapia logica_terapia = new LogicaTerapia(_context);
            try
            {
                var lista_terapias = logica_terapia.ObtenerTodosLasTerapias(id);
                return Ok(lista_terapias);
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al obtener las terapias: {ex.Message}");
            }
        }

        // GET api/<TerapiaController>/5
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            LogicaTerapia logica_terapia = new LogicaTerapia(_context);
            try
            {
                return Ok(logica_terapia.ObtenerTerapiaPorId(id));
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al obtener la terapia solicitada: {ex.Message}");
            }
        }

        // POST api/<TerapiaController>
        [HttpPost]
        public ActionResult Post([FromBody] Terapia obj_terapia)
        {
            LogicaTerapia logica_terapia = new LogicaTerapia(_context);
            try
            {
                logica_terapia.CrearTerapia(obj_terapia);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al crear la terapia: {ex.Message}");
            }
        }

        // PUT api/<TerapiaController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Terapia obj_terapia)
        {
            LogicaTerapia logica_terapia = new LogicaTerapia(_context);

            try
            {
                logica_terapia.ActualizarTerapia(id, obj_terapia);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al actualizar los datos de la terapia: {ex.Message}");
            }
        }

        // DELETE api/<TerapiaController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            LogicaTerapia logica_terapia = new LogicaTerapia(_context);

            try
            {
                logica_terapia.EliminarTerapia(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al eliminar la terapia: {ex.Message}");
            }
        }
    }
}
