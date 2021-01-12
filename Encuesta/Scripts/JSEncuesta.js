$(document).ready(function () {
    $("#seccion1").addClass("hide");
    $("#seccion2").addClass("hide");
    $("#seccion3").addClass("hide");
    $("#seccion4").addClass("hide");
    $("#seccion5").addClass("hide");
    $("#seccion6").addClass("hide");
    $("#seccion7").addClass("hide");
    $("#seccion8").addClass("hide");
    $("#seccion9").addClass("hide");
    $("#seccion10").addClass("hide");
    $("#seccion11").addClass("hide");
    $("#seccion12").addClass("hide");
    $("#antseccion13").addClass("hide");
    $("#seccion13").addClass("hide");
    $("#antseccion14").addClass("hide");
    $("#seccion14").addClass("hide");
    $("#mensfinal").addClass("hide");
    $(".btn-success").addClass("hide");

});

/// Evalua si los datos requeridos han sido ingresados, en caso de no ser asi notifica al usuario
$("#btninicio").click(function () {
    var camponombre = $("#Nombre").val();
    var campoareacampana = $("#AreaCampana").val();
    var Edad = $("#Edad").val();
    var Sexo = $("#Sexo").val();

    if (camponombre !== "" && campoareacampana !== "" && Edad !== "" && Sexo !== "") {
        $("#secciondatos").addClass("hide");
        $("#seccion1").removeClass("hide");
    }
    else {

        $("#Mensaje").append('<div class="alert alert-danger alert-dismissible" role="alert">\
       <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
       <strong>Por favor ingrese datos completos</strong></div>');

       // alert("Por favor ingresa los datos completos");
    }

});

$("#btntermina1").click(function () {    
    var respuesta1 = $("input[name='Respuestas[0].Respuesta']:checked").prop("value");
    var respuesta2 = $("input[name='Respuestas[1].Respuesta']:checked").prop("value");
    var respuesta3 = $("input[name='Respuestas[2].Respuesta']:checked").prop("value");
    var respuesta4 = $("input[name='Respuestas[3].Respuesta']:checked").prop("value");
    var respuesta5 = $("input[name='Respuestas[4].Respuesta']:checked").prop("value");


    if (typeof respuesta1 != 'undefined' && typeof respuesta2 != 'undefined' && typeof respuesta3 != 'undefined' && typeof respuesta4 != 'undefined' && typeof respuesta5 != 'undefined') {
        $("#seccion1").addClass("hide");
        $("#seccion2").removeClass("hide");
    }
    else {

        $("#Mensaje").append('<div class="alert alert-danger alert-dismissible" role="alert">\
       <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
       <strong>Por favor responda todas las preguntas</strong></div>');

       // alert('Favor de responder todas las preguntas');
    } 
   
});

$("#btntermina2").click(function () {
    var respuesta6 = $("input[name='Respuestas[5].Respuesta']:checked").prop("value");
    var respuesta7 = $("input[name='Respuestas[6].Respuesta']:checked").prop("value");
    var respuesta8 = $("input[name='Respuestas[7].Respuesta']:checked").prop("value");
    
       

    if (typeof respuesta6 != 'undefined' && typeof respuesta7 != 'undefined' && typeof respuesta8 != 'undefined') {
        $("#seccion2").addClass("hide");
        $("#seccion3").removeClass("hide");
    }
    else {
        $("#Mensaje").append('<div class="alert alert-danger alert-dismissible" role="alert">\
       <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
       <strong>Por favor responda todas las preguntas</strong></div>');
    }

});

$("#btntermina3").click(function () {
    var respuesta9 = $("input[name='Respuestas[8].Respuesta']:checked").prop("value");
    var respuesta10 = $("input[name='Respuestas[9].Respuesta']:checked").prop("value");
    var respuesta11 = $("input[name='Respuestas[10].Respuesta']:checked").prop("value");
    var respuesta12 = $("input[name='Respuestas[11].Respuesta']:checked").prop("value");



    if (typeof respuesta9 != 'undefined' && typeof respuesta10 != 'undefined' && typeof respuesta11 != 'undefined' && typeof respuesta12 != 'undefined') {
        $("#seccion3").addClass("hide");
        $("#seccion4").removeClass("hide");
    }
    else {
        $("#Mensaje").append('<div class="alert alert-danger alert-dismissible" role="alert">\
       <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
       <strong>Por favor responda todas las preguntas</strong></div>');
    }

});

$("#btntermina4").click(function () {
    var respuesta13 = $("input[name='Respuestas[12].Respuesta']:checked").prop("value");
    var respuesta14 = $("input[name='Respuestas[13].Respuesta']:checked").prop("value");
    var respuesta15 = $("input[name='Respuestas[14].Respuesta']:checked").prop("value");
    var respuesta16 = $("input[name='Respuestas[15].Respuesta']:checked").prop("value");



    if (typeof respuesta13 != 'undefined' && typeof respuesta14 != 'undefined' && typeof respuesta15 != 'undefined' && typeof respuesta16 != 'undefined') {
        $("#seccion4").addClass("hide");
        $("#seccion5").removeClass("hide");
    }
    else {
        $("#Mensaje").append('<div class="alert alert-danger alert-dismissible" role="alert">\
       <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
       <strong>Por favor responda todas las preguntas</strong></div>');
    }

});

$("#btntermina5").click(function () {
    var respuesta17 = $("input[name='Respuestas[16].Respuesta']:checked").prop("value");
    var respuesta18 = $("input[name='Respuestas[17].Respuesta']:checked").prop("value");
    var respuesta19 = $("input[name='Respuestas[18].Respuesta']:checked").prop("value");
    var respuesta20 = $("input[name='Respuestas[19].Respuesta']:checked").prop("value");
    var respuesta21 = $("input[name='Respuestas[20].Respuesta']:checked").prop("value");
    var respuesta22 = $("input[name='Respuestas[21].Respuesta']:checked").prop("value");



    if (typeof respuesta17 != 'undefined' && typeof respuesta18 != 'undefined' && typeof respuesta19 != 'undefined' && typeof respuesta20 != 'undefined' && typeof respuesta21 != 'undefined' && typeof respuesta22 != 'undefined') {
        $("#seccion5").addClass("hide");
        $("#seccion6").removeClass("hide");
    }
    else {
        $("#Mensaje").append('<div class="alert alert-danger alert-dismissible" role="alert">\
       <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
       <strong>Por favor responda todas las preguntas</strong></div>');
    }

});

$("#btntermina6").click(function () {
    var respuesta23 = $("input[name='Respuestas[22].Respuesta']:checked").prop("value");
    var respuesta24 = $("input[name='Respuestas[23].Respuesta']:checked").prop("value");
    var respuesta25 = $("input[name='Respuestas[24].Respuesta']:checked").prop("value");
    var respuesta26 = $("input[name='Respuestas[25].Respuesta']:checked").prop("value");
    var respuesta27 = $("input[name='Respuestas[26].Respuesta']:checked").prop("value");
    var respuesta28 = $("input[name='Respuestas[27].Respuesta']:checked").prop("value");



    if (typeof respuesta23 != 'undefined' && typeof respuesta24 != 'undefined' && typeof respuesta25 != 'undefined' && typeof respuesta26 != 'undefined' && typeof respuesta27 != 'undefined' && typeof respuesta28 != 'undefined') {
        $("#seccion6").addClass("hide");
        $("#seccion7").removeClass("hide");
    }
    else {
        $("#Mensaje").append('<div class="alert alert-danger alert-dismissible" role="alert">\
       <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
       <strong>Por favor responda todas las preguntas</strong></div>');
    }

});

$("#btntermina7").click(function () {
    var respuesta29 = $("input[name='Respuestas[28].Respuesta']:checked").prop("value");
    var respuesta30 = $("input[name='Respuestas[29].Respuesta']:checked").prop("value");
   



    if (typeof respuesta29 != 'undefined' && typeof respuesta30 != 'undefined' ) {
        $("#seccion7").addClass("hide");
        $("#seccion8").removeClass("hide");
    }
    else {
        $("#Mensaje").append('<div class="alert alert-danger alert-dismissible" role="alert">\
       <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
       <strong>Por favor responda todas las preguntas</strong></div>');
    }

});

$("#btntermina8").click(function () {
    var respuesta31 = $("input[name='Respuestas[30].Respuesta']:checked").prop("value");
    var respuesta32 = $("input[name='Respuestas[31].Respuesta']:checked").prop("value");
    var respuesta33 = $("input[name='Respuestas[32].Respuesta']:checked").prop("value");
    var respuesta34 = $("input[name='Respuestas[33].Respuesta']:checked").prop("value");
    var respuesta35 = $("input[name='Respuestas[34].Respuesta']:checked").prop("value");
    var respuesta36 = $("input[name='Respuestas[35].Respuesta']:checked").prop("value");




    if (typeof respuesta31 != 'undefined' && typeof respuesta32 != 'undefined' && typeof respuesta33 != 'undefined' && typeof respuesta34 != 'undefined' && typeof respuesta35 != 'undefined' && typeof respuesta36 != 'undefined') {
        $("#seccion8").addClass("hide");
        $("#seccion9").removeClass("hide");
    }
    else {
        $("#Mensaje").append('<div class="alert alert-danger alert-dismissible" role="alert">\
       <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
       <strong>Por favor responda todas las preguntas</strong></div>');
    }

});

$("#btntermina9").click(function () {
    var respuesta37 = $("input[name='Respuestas[36].Respuesta']:checked").prop("value");
    var respuesta38 = $("input[name='Respuestas[37].Respuesta']:checked").prop("value");
    var respuesta39 = $("input[name='Respuestas[38].Respuesta']:checked").prop("value");
    var respuesta40 = $("input[name='Respuestas[39].Respuesta']:checked").prop("value");
    var respuesta41 = $("input[name='Respuestas[40].Respuesta']:checked").prop("value");
   


    if (typeof respuesta37 != 'undefined' && typeof respuesta38 != 'undefined' && typeof respuesta39 != 'undefined' && typeof respuesta40 != 'undefined' && typeof respuesta41 != 'undefined' ) {
        $("#seccion9").addClass("hide");
        $("#seccion10").removeClass("hide");
    }
    else {
        $("#Mensaje").append('<div class="alert alert-danger alert-dismissible" role="alert">\
       <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
       <strong>Por favor responda todas las preguntas</strong></div>');
    }

});

$("#btntermina10").click(function () {
    var respuesta42 = $("input[name='Respuestas[41].Respuesta']:checked").prop("value");
    var respuesta43 = $("input[name='Respuestas[42].Respuesta']:checked").prop("value");
    var respuesta44 = $("input[name='Respuestas[43].Respuesta']:checked").prop("value");
    var respuesta45 = $("input[name='Respuestas[44].Respuesta']:checked").prop("value");
    var respuesta46 = $("input[name='Respuestas[45].Respuesta']:checked").prop("value");



    if (typeof respuesta42 != 'undefined' && typeof respuesta43 != 'undefined' && typeof respuesta44 != 'undefined' && typeof respuesta45 != 'undefined' && typeof respuesta46 != 'undefined') {
        $("#seccion10").addClass("hide");
        $("#seccion11").removeClass("hide");
    }
    else {
        $("#Mensaje").append('<div class="alert alert-danger alert-dismissible" role="alert">\
       <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
       <strong>Por favor responda todas las preguntas</strong></div>');
    }

});

$("#btntermina11").click(function () {
    var respuesta47 = $("input[name='Respuestas[46].Respuesta']:checked").prop("value");
    var respuesta48 = $("input[name='Respuestas[47].Respuesta']:checked").prop("value");
    var respuesta49 = $("input[name='Respuestas[48].Respuesta']:checked").prop("value");
    var respuesta50 = $("input[name='Respuestas[49].Respuesta']:checked").prop("value");
    var respuesta51 = $("input[name='Respuestas[50].Respuesta']:checked").prop("value");
    var respuesta52 = $("input[name='Respuestas[51].Respuesta']:checked").prop("value");
    var respuesta53 = $("input[name='Respuestas[52].Respuesta']:checked").prop("value");
    var respuesta54 = $("input[name='Respuestas[53].Respuesta']:checked").prop("value");
    var respuesta55 = $("input[name='Respuestas[54].Respuesta']:checked").prop("value");
    var respuesta56 = $("input[name='Respuestas[55].Respuesta']:checked").prop("value");



    if (typeof respuesta47 != 'undefined' && typeof respuesta48 != 'undefined' && typeof respuesta49 != 'undefined' && typeof respuesta50 != 'undefined' && typeof respuesta51 != 'undefined' && typeof respuesta52 != 'undefined'
        && typeof respuesta53 != 'undefined' && typeof respuesta54 != 'undefined' && typeof respuesta55 != 'undefined' && typeof respuesta56 != 'undefined') {
        $("#seccion11").addClass("hide");
        $("#seccion12").removeClass("hide");
    }
    else {
        $("#Mensaje").append('<div class="alert alert-danger alert-dismissible" role="alert">\
       <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
       <strong>Por favor responda todas las preguntas</strong></div>');
    }

});

$("#btntermina12").click(function () {
    var respuesta57 = $("input[name='Respuestas[56].Respuesta']:checked").prop("value");
    var respuesta58 = $("input[name='Respuestas[57].Respuesta']:checked").prop("value");
    var respuesta59 = $("input[name='Respuestas[58].Respuesta']:checked").prop("value");
    var respuesta60 = $("input[name='Respuestas[59].Respuesta']:checked").prop("value");
    var respuesta61 = $("input[name='Respuestas[60].Respuesta']:checked").prop("value");
    var respuesta62 = $("input[name='Respuestas[61].Respuesta']:checked").prop("value");
    var respuesta63 = $("input[name='Respuestas[62].Respuesta']:checked").prop("value");
    var respuesta64 = $("input[name='Respuestas[63].Respuesta']:checked").prop("value");
    



    if (typeof respuesta57 != 'undefined' && typeof respuesta58 != 'undefined' && typeof respuesta59 != 'undefined' && typeof respuesta60 != 'undefined' && typeof respuesta61 != 'undefined' && typeof respuesta62 != 'undefined'
        && typeof respuesta63 != 'undefined' && typeof respuesta64 != 'undefined' ) {
        $("#seccion12").addClass("hide");
        $("#antseccion13").removeClass("hide");
    }
    else {
        $("#Mensaje").append('<div class="alert alert-danger alert-dismissible" role="alert">\
       <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
       <strong>Por favor responda todas las preguntas</strong></div>');
    }

});

$("#btnterminaantseccion13").click(function () {

    var respuestaterminaantseccion13 = $("input[name='respuestapreg1']:checked").prop("value");
    

    if (typeof respuestaterminaantseccion13 != 'undefined') {
        if (respuestaterminaantseccion13 == 'si') {
            $("#antseccion13").addClass("hide");
            $("#seccion13").removeClass("hide");
        }
        else {
            $("#antseccion13").addClass("hide");
            $("#btnterminaantseccion13").addClass("hide");
            $("#antseccion14").removeClass("hide");

        }

    }
    else {

        $("#Mensaje").append('<div class="alert alert-danger alert-dismissible" role="alert">\
       <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
       <strong>Por favor seleccione un opción</strong></div>');       
    }       

});

$("#btntermina13").click(function () {
    var respuesta65 = $("input[name='Respuestas[64].Respuesta']:checked").prop("value");
    var respuesta66 = $("input[name='Respuestas[65].Respuesta']:checked").prop("value");
    var respuesta67 = $("input[name='Respuestas[66].Respuesta']:checked").prop("value");
    var respuesta68 = $("input[name='Respuestas[67].Respuesta']:checked").prop("value");
   



    if (typeof respuesta65 != 'undefined' && typeof respuesta66 != 'undefined' && typeof respuesta67 != 'undefined' && typeof respuesta68 != 'undefined') {
        $("#seccion13").addClass("hide");
        $("#antseccion14").removeClass("hide");
    }
    else {
        $("#Mensaje").append('<div class="alert alert-danger alert-dismissible" role="alert">\
       <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
       <strong>Por favor responda todas las preguntas</strong></div>');
    }

});

$("#btnterminaantseccion14").click(function () {

    var respuestaterminaantseccion14 = $("input[name='respuestapreg2']:checked").prop("value");


    if (typeof respuestaterminaantseccion14 != 'undefined') {
        if (respuestaterminaantseccion14 == 'si') {
            $("#antseccion14").addClass("hide");
            $("#seccion14").removeClass("hide");
        }
        else {
            $("#btnterminaantseccion14").addClass("hide");
            $("#antseccion14").addClass("hide");
            $("#mensfinal").removeClass("hide");
            $(".btn-success").removeClass("hide");
        }

    }
    else {
        $("#Mensaje").append('<div class="alert alert-danger alert-dismissible" role="alert">\
       <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
       <strong>Por favor seleccione un opción</strong></div>');   
    }

});

$("#btntermina14").click(function () {
    var respuesta69 = $("input[name='Respuestas[68].Respuesta']:checked").prop("value");
    var respuesta70 = $("input[name='Respuestas[69].Respuesta']:checked").prop("value");
    var respuesta71 = $("input[name='Respuestas[70].Respuesta']:checked").prop("value");
    var respuesta72 = $("input[name='Respuestas[71].Respuesta']:checked").prop("value");




    if (typeof respuesta69 != 'undefined' && typeof respuesta70 != 'undefined' && typeof respuesta71 != 'undefined' && typeof respuesta72 != 'undefined') {
        $("#seccion14").addClass("hide");
        $("#mensfinal").removeClass("hide");
        $(".btn-success").removeClass("hide");
    }
    else {
        $("#Mensaje").append('<div class="alert alert-danger alert-dismissible" role="alert">\
       <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
       <strong>Por favor responda todas las preguntas</strong></div>');
    }

});


