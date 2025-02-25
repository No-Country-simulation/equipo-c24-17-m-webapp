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
    }
}
