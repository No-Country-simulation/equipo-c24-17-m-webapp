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
    public class TipoIncidenciaController : ControllerBase
    {
        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public TipoIncidenciaController(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion

        // GET: api/<TipoIncidenciaController>
        [HttpGet]
        public ActionResult<IEnumerable<TipoIncidencia>> Get()
        {
            LogicaTipoIncidencia logica_tipo_incidencia = new LogicaTipoIncidencia(_context);
            try
            {
                var lista_tipos_incidencia = logica_tipo_incidencia.ObtenerTodasLosTiposDeIncidencias();
                return Ok(lista_tipos_incidencia);
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al obtener todos los tipos de incidencias: {ex.Message}");
            }
        }

        // GET api/<TipoIncidenciaController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<TipoIncidenciaController>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<TipoIncidenciaController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<TipoIncidenciaController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
