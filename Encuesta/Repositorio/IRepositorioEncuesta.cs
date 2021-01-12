using Encuesta.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Encuesta.Repositorio
{
    public interface IRepositorioEncuesta
    {
        KeyValuePair<int, string> GuardaEncuesta(EncuestaViewModel Encuesta);

        List<KeyValuePair<int, string>> ObtenerPreguntas(int apartado);
    }
}
