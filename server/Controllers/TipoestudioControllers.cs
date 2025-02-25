using Microsoft.AspNetCore.Mvc;
using server.Data.Models;
using server.Data;
using server.Logica;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TipoestudioController : ControllerBase
    {
        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public TipoestudioController(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion

        // GET: api/<TipoestudioController>
        [HttpGet]
        public ActionResult<IEnumerable<Tipoestudio>> Get()
        {
            LogicaTipoestudio logica_tipo_estudio = new LogicaTipoestudio(_context);
            try
            {
                var lista_tipo_estudio = logica_tipo_estudio.ObtenerTodosLosTiposEstudio();
                return Ok(lista_tipo_estudio);
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al obtener los hijos: {ex.Message}");
            }
        }

        // GET api/<TurnoController>/5
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            LogicaTipoestudio logica_tipo_estudio = new LogicaTipoestudio(_context);
            try
            {
                Tipoestudio tipo_estudio_encontrado = new Tipoestudio();
                tipo_estudio_encontrado = logica_tipo_estudio.ObtenerTipoEstudioPorId(id);
                return Ok(tipo_estudio_encontrado);
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al obtener el hijo: {ex.Message}");
            }
        }
        
        // POST api/<TipoEstudioController>
        [HttpPost]
        public ActionResult Post([FromBody] Tipoestudio obj_tipo_estudio)
        {
            LogicaTipoestudio logica_tipo_estudio = new LogicaTipoestudio(_context);
            try
            {
                logica_tipo_estudio.CrearTipoEstudio(obj_tipo_estudio);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al crear el hijo: {ex.Message}");
            }
        }
    }
}
