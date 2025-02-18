using CapaDatos;
using CapaDatos.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ApiAppNoCountry.Controllers
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
        public List<Usuario> Get()
        {
            List<Usuario> lista_usuarios = new List<Usuario>();
            lista_usuarios = _context.Usuarios.ToList();

            return lista_usuarios;
        }

        // GET api/<UsuarioController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
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
