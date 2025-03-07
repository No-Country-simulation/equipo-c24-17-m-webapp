using Microsoft.AspNetCore.Mvc;
using server.Data.Models;
using server.Data;
using server.Logica;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TipoEspecialidadController : ControllerBase
    {
        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public TipoEspecialidadController(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion

        // GET: api/<TipoEspecialidadController>
        [HttpGet]
        public ActionResult<IEnumerable<TipoEspecialidad>> Get()
        {
            LogicaTipoEspecialidad logica_tipo_especialidad = new LogicaTipoEspecialidad(_context);
            try
            {
                var lista_especialidades= logica_tipo_especialidad.ObtenerTodosLosTiposDeEspecialidad();
                return Ok(lista_especialidades);
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al obtener todos los tipos de especialidades: {ex.Message}");
            }
        }

        // GET api/<TipoEspecialidadController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<TipoEspecialidadController>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<TipoEspecialidadController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<TipoEspecialidadController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
