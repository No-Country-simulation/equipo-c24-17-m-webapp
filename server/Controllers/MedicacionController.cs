using Microsoft.AspNetCore.Mvc;
using server.Data;
using server.Data.Models;
using server.Logica;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicacionController : ControllerBase
    {

        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public MedicacionController(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion


        // GET: api/<MedicacionController>
        [HttpGet]
        public ActionResult<IEnumerable<Medicacion>> GetAll(int id)
        {
            LogicaMedicacion logica_medicacion = new LogicaMedicacion(_context);
            try
            {
                var lista_medicaciones = logica_medicacion.ObtenerTodasLasMedicaciones(id);
                return Ok(lista_medicaciones);
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al obtener las medicaciones solicitadas: {ex.Message}");
            }
        }

        // GET api/<MedicacionController>/5
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            LogicaMedicacion logica_medicacion = new LogicaMedicacion(_context);
            try
            {
                return Ok(logica_medicacion.ObtenerMedicacionPorId(id));
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al obtener la medicación solicitada: {ex.Message}");
            }
        }

        // POST api/<MedicacionController>
        [HttpPost]
        public ActionResult Post([FromBody] Medicacion obj_medicacion)
        {
            LogicaMedicacion logica_medicacion = new LogicaMedicacion(_context);
            try
            {
                logica_medicacion.CrearMedicacion(obj_medicacion);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al crear la medicación: {ex.Message}");
            }
        }

        // PUT api/<MedicacionController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Medicacion obj_medicacion)
        {
            LogicaMedicacion logica_medicacion = new LogicaMedicacion(_context);
            try
            {
                logica_medicacion.ActualizarMedicacion(id, obj_medicacion);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al actualizar los datos de la medicación: {ex.Message}");
            }
        }

        // DELETE api/<MedicacionController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            LogicaMedicacion logica_medicacion = new LogicaMedicacion(_context);
            try
            {
                logica_medicacion.EliminarMedicacion(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al eliminar la medicación: {ex.Message}");
            }
        }
    }
}
