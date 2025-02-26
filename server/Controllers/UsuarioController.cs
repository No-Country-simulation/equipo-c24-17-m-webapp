using Microsoft.AspNetCore.Mvc;
using server.Data.Models;
using server.Data;
using server.Logica;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public UsuarioController(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion

        // GET: api/<UsuarioController>
        [HttpGet]
        public ActionResult<IEnumerable<Usuario>> Get()
        {
            LogicaUsuario logica_usuario = new LogicaUsuario(_context);
            try
            {
                var lista_usuarios = logica_usuario.ObtenerTodosLosUsuarios();
                return Ok(lista_usuarios);
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al obtener los usuarios: {ex.Message}");
            }
        }
        // GET api/<TurnoController>/5
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            LogicaUsuario logica_usuario = new LogicaUsuario(_context);
            try
            {
                Usuario usuario_encontrado = new Usuario();
                usuario_encontrado = logica_usuario.ObtenerUsuarioPorId(id);
                return Ok(usuario_encontrado);
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al obtener el usuario: {ex.Message}");
            }
        }

        // POST api/<UsuarioController>
        [HttpPost]
        public ActionResult Post([FromBody]Usuario obj_usuario)
        {
            LogicaUsuario logica_usuario = new LogicaUsuario(_context);
            try
            {
                logica_usuario.CrearUsuario(obj_usuario);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al crear el usuario: {ex.Message}");
            }
        }
        // PUT api/<UsuarioController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody]Usuario obj_usuario)
        {
            LogicaUsuario logica_usuario = new LogicaUsuario(_context);

            try
            {
                logica_usuario.ActualizarUsuario(id, obj_usuario);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al actualizar los datos del usuario: {ex.Message}");
            }
        }

        // DELETE api/<UsuarioController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            LogicaUsuario logica_usuario = new LogicaUsuario(_context);

            try
            {
                logica_usuario.EliminarUsuario(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al eliminar el usuario: {ex.Message}");
            }
        }

        [HttpGet("get-dummy")]
        public IActionResult GetDummy()
        {
            var response = new
            {
                mensaje = "Json de prueba, funciona la api?",
                timestamp = DateTime.UtcNow
            };

            return Ok(response);
        }
    }
}
