﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Data.Models;
using server.Data.Repositorios;
using server.Logica;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IncidenciaController : ControllerBase
    {

        #region ContextDataBase
        private readonly BdTeacompanioContext _context;

        public IncidenciaController(BdTeacompanioContext context)
        {
            _context = context;
        }
        #endregion

        // GET: api/<IncidenciaController>
        [HttpGet()]
        public ActionResult<IEnumerable<Incidencia>> GetIncidenciasPorHijo(string correo)
        {
            LogicaHijo logica_hijo = new LogicaHijo(_context);
            try
            {
                var lista_incidencias = logica_hijo.ObtenerHijosConIncidencias(correo);
                return Ok(lista_incidencias);
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al obtener las incidencias de el hijo: {ex.Message}");
            }
        }

        // GET api/<IncidenciaController>/5
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            LogicaIncidencia logica_incidencia = new LogicaIncidencia(_context);
            try
            {
                return Ok(logica_incidencia.ObtenerIncidenciaPorId(id));
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al obtener la incidencia solicitada: {ex.Message}");
            }
        }

        // POST api/<IncidenciaController>
        [HttpPost]
        public ActionResult Post([FromBody] Incidencia obj_incidencia)
        {
            LogicaIncidencia logica_incidencia = new LogicaIncidencia(_context);
            try
            {
                logica_incidencia.CrearIncidencia(obj_incidencia);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al crear la incidencia: {ex.Message}");
            }
        }

        // PUT api/<IncidenciaController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Incidencia obj_incidencia)
        {
            LogicaIncidencia logica_incidencia = new LogicaIncidencia(_context);
            try
            {
                logica_incidencia.ActualizarIncidencia(id, obj_incidencia);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al actualizar los datos de la incidencia: {ex.Message}");
            }
        }

        // DELETE api/<IncidenciaController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            LogicaIncidencia logica_incidencia = new LogicaIncidencia(_context);
            try
            {
                logica_incidencia.EliminarIncidencia(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al eliminar la incidencia: {ex.Message}");
            }
        }

        [HttpGet("hijo/{id}")]
        public ActionResult ObtenerIncidenciasDeHijos(int id)
        {
            LogicaIncidencia logica_incidencia = new LogicaIncidencia(_context);
            try
            {
                return Ok(logica_incidencia.ObtenerListadoDeIncidenciasDeUnHijo(id));
            }
            catch (Exception ex)
            {
                return StatusCode(404, $"Error al obtener las incidencias de el hijo solicitada: {ex.Message}");
            }
        }
    }
}
