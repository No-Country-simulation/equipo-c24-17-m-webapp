using Microsoft.AspNetCore.Mvc;
using server.Data;
using server.Data.Models;
using server.Logica;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EstudioMedicoController : ControllerBase
    {

        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public EstudioMedicoController(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion

        // GET: api/<EstudioMedicoController>
        [HttpGet]
        public ActionResult<IEnumerable<EstudioMedico>> GetAll(int id)
        {
            LogicaEstudioMedico logica_estudio = new LogicaEstudioMedico(_context);
            try
            {
                var lista_estudios = logica_estudio.ObtenerTodosLosEstudiosMedicos(id);
                return Ok(lista_estudios);
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al obtener los estudios médicos: {ex.Message}");
            }
        }

        // GET api/<EstudioMedicoController>/5
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            LogicaEstudioMedico logica_estudio = new LogicaEstudioMedico(_context);
            try
            {
                return Ok(logica_estudio.ObtenerEstudioMedicoPorId(id));
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al obtener el estudio médico solicitado: {ex.Message}");
            }
        }

        // POST api/<EstudioMedicoController>
        [HttpPost]
        public ActionResult Post([FromBody] EstudioMedico obj_estudioMedico)
        {
            LogicaEstudioMedico logica_estudio = new LogicaEstudioMedico(_context);
            try
            {
                logica_estudio.CrearEstudioMedico(obj_estudioMedico);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al crear el estudio médico: {ex.Message}");
            }
        }

        // PUT api/<EstudioMedicoController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<EstudioMedicoController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
