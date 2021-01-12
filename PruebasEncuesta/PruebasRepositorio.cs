using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Encuesta;
using Encuesta.Repositorio;
using Encuesta.Models;
using System.Collections.Generic;

namespace PruebasEncuesta
{
    [TestClass]
    public class PruebasRepositorio
    {

        private IRepositorioEncuesta _repositorio;

        public PruebasRepositorio()
        {
            _repositorio = new RepositorioEncuesta();
        }

        [TestMethod]
        public void ContarPreguntasOkSegmento3()
        {
            var respuesta = _repositorio.ObtenerPreguntas(3);
            Assert.AreEqual(4, respuesta.Count);

        }

        [TestMethod]
        public void ObtenerIdPrimerSegmentoOk()
        {
            var respuesta = _repositorio.ObtenerPreguntas(1);
            Assert.AreEqual(5, respuesta[4].Key);

        }

        [TestMethod]
        public void GuardarEncuestaOk()
        {
            EncuestaViewModel NuevaEncuesta = new EncuestaViewModel()
            { 
                Nombre = "Sergio Reyes Corona", 
                AreaCampana = "*111",
                Edad = "29",
                Sexo = "Masculino",
                Respuestas = new List<RespuestaModel>() {
                 new RespuestaModel() { IdPregunta = 1, Respuesta = "Siempre" },
                 new RespuestaModel() { IdPregunta = 2, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 3, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 4, Respuesta = "Algunas veces" },
                 new RespuestaModel() { IdPregunta = 5, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 6, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 7, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 8, Respuesta = "Siempre" },
                 new RespuestaModel() { IdPregunta = 9, Respuesta = "Siempre" },
                 new RespuestaModel() { IdPregunta = 10, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 11, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 12, Respuesta = "Casi nunca" },
                 new RespuestaModel() { IdPregunta = 13, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 14, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 15, Respuesta = "Nunca" },
                 new RespuestaModel() { IdPregunta = 16, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 17, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 18, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 19, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 20, Respuesta = "CSiempre" },
                 new RespuestaModel() { IdPregunta = 21, Respuesta = "Siempre" },
                 new RespuestaModel() { IdPregunta = 22, Respuesta = "Siempre" },
                 new RespuestaModel() { IdPregunta = 23, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 24, Respuesta = "Siempre" },
                 new RespuestaModel() { IdPregunta = 25, Respuesta = "Siempre" },
                 new RespuestaModel() { IdPregunta = 26, Respuesta = "Siempre" },
                 new RespuestaModel() { IdPregunta = 27, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 28, Respuesta = "Algunas veces" },
                 new RespuestaModel() { IdPregunta = 29, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 30, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 31, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 32, Respuesta = "Algunas veces" },
                 new RespuestaModel() { IdPregunta = 33, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 34, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 35, Respuesta = "Siempre" },
                 new RespuestaModel() { IdPregunta = 36, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 37, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 38, Respuesta = "Casi nunca" },
                 new RespuestaModel() { IdPregunta = 39, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 40, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 41, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 42, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 43, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 44, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 45, Respuesta = "Algunas veces" },
                 new RespuestaModel() { IdPregunta = 46, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 47, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 48, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 49, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 50, Respuesta = "Algunas veces" },
                 new RespuestaModel() { IdPregunta = 51, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 52, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 53, Respuesta = "Siempre" },
                 new RespuestaModel() { IdPregunta = 54, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 55, Respuesta = "Siempre" },
                 new RespuestaModel() { IdPregunta = 56, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 57, Respuesta = "Algunas veces" },
                 new RespuestaModel() { IdPregunta = 58, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 59, Respuesta = "Casi siempre" },
                 new RespuestaModel() { IdPregunta = 60, Respuesta = "Casi nunca" },
                 new RespuestaModel() { IdPregunta = 61, Respuesta = "Siempre" },
                 new RespuestaModel() { IdPregunta = 62, Respuesta = "Siempre" },
                 new RespuestaModel() { IdPregunta = 63, Respuesta = "Nunca" },
                 new RespuestaModel() { IdPregunta = 64, Respuesta = "Casi siempre" }
                }
            };

            var Respuesta = _repositorio.GuardaEncuesta(NuevaEncuesta);
            Assert.AreEqual(1, Respuesta.Key);
        }


    }


}
