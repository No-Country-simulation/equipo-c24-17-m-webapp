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
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<TerapiaController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<TerapiaController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
