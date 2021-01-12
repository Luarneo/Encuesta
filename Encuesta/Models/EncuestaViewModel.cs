using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Encuesta.Models
{
    public class EncuestaViewModel
    {

        [Required(ErrorMessage = "Este campo es requerido")]
        public string Nombre { get; set; }

        [Display(Name = "Área o Campaña")]
        [Required(ErrorMessage = "Este campo es requerido")]
        public string AreaCampana { get; set; }

        [Required(ErrorMessage = "Este campo es requerido")]
        public string Edad { get; set; }

        [Required(ErrorMessage = "Este campo es requerido")]
        public string Sexo { get; set; }

        public List<RespuestaModel> Respuestas { get; set; }
    }
}