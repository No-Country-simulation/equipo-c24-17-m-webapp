using Microsoft.AspNetCore.Mvc;
using server.Data.Models;
using server.Data;
using server.Logica;
using server.Clases;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HijoController : ControllerBase
    {
        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public HijoController(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion

        // GET: api/<HijoController>
        [HttpGet]
        public ActionResult<IEnumerable<Hijo>> Get(string correo)
        {
            LogicaHijo logica_hijo = new LogicaHijo(_context);
            try
            {
                var lista_hijos = logica_hijo.ObtenerHijosDelUsuarioEspecifico(correo);
                return Ok(lista_hijos);
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al obtener los hijos del usuario: {ex.Message}");
            }
        }
        // GET api/<TurnoController>/5
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            LogicaHijo logica_hijo = new LogicaHijo(_context);
            try
            {
                Hijo hijo_encontrado = new Hijo();
                hijo_encontrado = logica_hijo.ObtenerHijoPorId(id);
                return Ok(hijo_encontrado);
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al obtener el hijo: {ex.Message}");
            }
        }

        // POST api/<HijoController>
        [HttpPost]
        public ActionResult Post([FromBody] HijoRequest obj_hijo)
        {
            LogicaHijo logica_hijo = new LogicaHijo(_context);
            try
            {
                logica_hijo.CrearHijo(obj_hijo);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al crear el hijo: {ex.Message}");
            }
        }
        // PUT api/<HijoController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Hijo obj_hijo)
        {
            LogicaHijo logica_hijo = new LogicaHijo(_context);

            try
            {
                logica_hijo.ActualizarHijo(id, obj_hijo);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al actualizar los datos del hijo: {ex.Message}");
            }
        }

        // DELETE api/<HijoController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            LogicaHijo logica_hijo = new LogicaHijo(_context);

            try
            {
                logica_hijo.EliminarHijo(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al eliminar el hijo: {ex.Message}");
            }
        }
    }
}
