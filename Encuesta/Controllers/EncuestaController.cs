using Encuesta.Models;
using Encuesta.Repositorio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace Encuesta.Controllers
{
    public class EncuestaController : Controller
    {

        private IRepositorioEncuesta operaciones;

        public EncuestaController()
        {
            operaciones = new RepositorioEncuesta();
        }

        // GET: Encuesta
        public ActionResult NuevaEncuesta()
        {

            List<RespuestaModel> ListaRespuestas = new List<RespuestaModel>();


            var listauno = operaciones.ObtenerPreguntas(1);
            var listados = operaciones.ObtenerPreguntas(2);
            var listatres = operaciones.ObtenerPreguntas(3);
            var listacuatro = operaciones.ObtenerPreguntas(4);
            var listacinco = operaciones.ObtenerPreguntas(5);
            var listaseis = operaciones.ObtenerPreguntas(6);
            var listasiete = operaciones.ObtenerPreguntas(7);
            var listaocho = operaciones.ObtenerPreguntas(8);
            var listanueve = operaciones.ObtenerPreguntas(9);
            var listadiez = operaciones.ObtenerPreguntas(10);
            var listaonce = operaciones.ObtenerPreguntas(11);
            var listadoce = operaciones.ObtenerPreguntas(12);
            var listatrece = operaciones.ObtenerPreguntas(13);
            var listacatorce = operaciones.ObtenerPreguntas(14);



            foreach (var i in listauno)
            {
                ListaRespuestas.Add(new RespuestaModel()
                {
                    IdPregunta = i.Key,
                    TextoPregunta = i.Value
                });
            }

            foreach (var i in listados)
            {
                ListaRespuestas.Add(new RespuestaModel()
                {
                    IdPregunta = i.Key,
                    TextoPregunta = i.Value
                });
            }

            foreach (var i in listatres)
            {
                ListaRespuestas.Add(new RespuestaModel()
                {
                    IdPregunta = i.Key,
                    TextoPregunta = i.Value
                });
            }

            foreach (var i in listacuatro)
            {
                ListaRespuestas.Add(new RespuestaModel()
                {
                    IdPregunta = i.Key,
                    TextoPregunta = i.Value
                });
            }

            foreach (var i in listacinco)
            {
                ListaRespuestas.Add(new RespuestaModel()
                {
                    IdPregunta = i.Key,
                    TextoPregunta = i.Value
                });
            }

            foreach (var i in listaseis)
            {
                ListaRespuestas.Add(new RespuestaModel()
                {
                    IdPregunta = i.Key,
                    TextoPregunta = i.Value
                });
            }

            foreach (var i in listasiete)
            {
                ListaRespuestas.Add(new RespuestaModel()
                {
                    IdPregunta = i.Key,
                    TextoPregunta = i.Value
                });
            }

            foreach (var i in listaocho)
            {
                ListaRespuestas.Add(new RespuestaModel()
                {
                    IdPregunta = i.Key,
                    TextoPregunta = i.Value
                });
            }

            foreach (var i in listanueve)
            {
                ListaRespuestas.Add(new RespuestaModel()
                {
                    IdPregunta = i.Key,
                    TextoPregunta = i.Value
                });
            }

            foreach (var i in listadiez)
            {
                ListaRespuestas.Add(new RespuestaModel()
                {
                    IdPregunta = i.Key,
                    TextoPregunta = i.Value
                });
            }

            foreach (var i in listaonce)
            {
                ListaRespuestas.Add(new RespuestaModel()
                {
                    IdPregunta = i.Key,
                    TextoPregunta = i.Value
                });
            }

            foreach (var i in listadoce)
            {
                ListaRespuestas.Add(new RespuestaModel()
                {
                    IdPregunta = i.Key,
                    TextoPregunta = i.Value
                });
            }

            foreach (var i in listatrece)
            {
                ListaRespuestas.Add(new RespuestaModel()
                {
                    IdPregunta = i.Key,
                    TextoPregunta = i.Value
                });
            }

            foreach (var i in listacatorce)
            {
                ListaRespuestas.Add(new RespuestaModel()
                {
                    IdPregunta = i.Key,
                    TextoPregunta = i.Value
                });
            }

          List<KeyValuePair<string,string>> ListaGeneros = new List<KeyValuePair<string, string>>();
            ListaGeneros.Add(new KeyValuePair<string, string>("Femenino", "Femenino"));
            ListaGeneros.Add(new KeyValuePair<string, string>("Masculino", "Masculino"));
            ViewBag.generos = ListaGeneros;
                                            

            return View(new EncuestaViewModel() { Respuestas = ListaRespuestas });
        }

        [HttpPost]
        public ActionResult NuevaEncuesta(EncuestaViewModel DatosEncuesta)
        {
            try
            {

                //foreach(var i in DatosEncuesta.Respuestas)
                //{
                //    if(i.Respuesta==null)
                //    {
                //        DatosEncuesta.Respuestas.RemoveAll(x => x.IdPregunta == i.IdPregunta);
                //    }
                //}


                var respuesta = operaciones.GuardaEncuesta(new EncuestaViewModel()
                {
                    Nombre = DatosEncuesta.Nombre,
                    AreaCampana = DatosEncuesta.AreaCampana,
                    Edad = DatosEncuesta.Edad,
                    Sexo = DatosEncuesta.Sexo,
                    Respuestas = DatosEncuesta.Respuestas
                });

                if (respuesta.Key == 1)
                {
                    TempData["Mensaje"] = new KeyValuePair<string, string>("success", "La encuesta se registró exitosamente !!!");
                }
                else
                {

                    TempData["Mensaje"] = new KeyValuePair<string, string>("danger", respuesta.Value);
                }

                return RedirectToAction("NuevaEncuesta");
            }
                                      

            catch (Exception ex)
            {
                TempData["Mensaje"] = new KeyValuePair<string, string>("danger", ex.Message);
                return RedirectToAction("NuevaEncuesta");

            }            
        }

    }
}