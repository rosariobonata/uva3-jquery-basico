$(document).ready(function() {
  
    $('#ocultarBtn').click(function() {
        $('#fototvd').hide();
        $('#pageTitle').text('¡No tenemos ninguna imagen!');
    });


    $('#mostrarBtn').click(function() {
        $('#fototvd').show();
        $('#pageTitle').text('¡Mirá la siguiente imagen!');
    });
});
