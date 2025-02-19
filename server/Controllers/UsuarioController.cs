using Microsoft.AspNetCore.Mvc;
using server.Data.Models;
using server.Data;
using server.Data.Repositorios;
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
                return StatusCode(500, $"Error al obtener los usuarios: {ex.Message}");
            }
        }
        // POST api/<UsuarioController>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<UsuarioController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<UsuarioController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
