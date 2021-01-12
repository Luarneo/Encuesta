using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using Encuesta.Models;
using OperacionesEncuesta;
using OperacionesEncuesta.Estructuras;
using OperacionesEncuesta.Modelos;

namespace Encuesta.Repositorio
{
    public class RepositorioEncuesta : IRepositorioEncuesta
    {
        private ModeloOperacionesEncuesta operaciones;

        public RepositorioEncuesta()
        {
            operaciones = new ModeloOperacionesEncuesta(
                ConfigurationManager.AppSettings["servidor"].ToString(),
                ConfigurationManager.AppSettings["base"].ToString(),
                ConfigurationManager.AppSettings["usuario"].ToString());
        }


        /// <summary>
        /// Registra datos ingresados en base
        /// </summary>
        /// <param name="Encuesta">Modelo que contiene datos a guardar</param>
        /// <returns>devuelve confirmacion de operacion o menseje del error</returns>
        public KeyValuePair<int, string> GuardaEncuesta(EncuestaViewModel Encuesta)
        {

            List<Respuesta>ListaRespuestas = new List<Respuesta>();

            try
            {
                var contador = Encuesta.Respuestas.Count();
                

                for (var i = 0; i < Encuesta.Respuestas.Count(); i++)
                {
                    if(Encuesta.Respuestas[i].Respuesta != null)
                    {
                        ListaRespuestas.Add(new Respuesta
                        {
                            IdPregunta = Convert.ToInt32(Encuesta.Respuestas[i].IdPregunta),
                            TextoRespuesta = Encuesta.Respuestas[i].Respuesta.ToString()
                        });
                    }                 
                                      
                }


                var respuesta = operaciones.GuardarEncuesta(new OperacionesEncuesta.Estructuras.Encuesta
                {
                    nombre = Encuesta.Nombre,
                    areacampana = Encuesta.AreaCampana,
                    edad = Encuesta.Edad,
                    sexo = Encuesta.Sexo,
                    Respuestas = ListaRespuestas
                });

                return new KeyValuePair<int, string>(respuesta.Key, respuesta.Value);

            }

            catch (Exception ex)
            {

                return new KeyValuePair<int, string>(2, ex.Message);
            }

            
        }

        /// <summary>
        /// Obtiene lista de preguntas de base de datos
        /// </summary>
        /// <param name="apartado">numero de apartado del grupo de preguntas</param>
        /// <returns>devuelve id y texto de cada pregunta contenida en la base</returns>
        public List<KeyValuePair<int, string>> ObtenerPreguntas(int apartado)
        {
            var respuesta = operaciones.ObtenerPreguntas(apartado);

            List<KeyValuePair<int, string>> ListaFinal = new List<KeyValuePair<int, string>>();

            return respuesta.Any() ? respuesta.AsEnumerable().Select(a => new KeyValuePair<int, string>(
              a.Key, a.Value)).ToList() : new List<KeyValuePair<int, string>>();
        }
    }
}