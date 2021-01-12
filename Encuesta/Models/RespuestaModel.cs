using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Encuesta.Models
{
    public class RespuestaModel
    {
        public int IdPregunta { get; set; }

        public string TextoPregunta { get; set; }

        public string Respuesta { get; set; }
    }
}