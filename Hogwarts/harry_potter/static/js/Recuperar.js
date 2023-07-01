var correo = document.getElementById('idCorreo');
var correo2 = document.getElementById('idCorreo2');
var error = document.getElementById('error');
error.style.color = 'red';

function enviarFormulario(){
    console.log('Enviando Formulario');
    var mensajesError = [];
    if (correo.value === null || correo.value === ''){
        mensajesError.push('Ingresa tu Correo');
    }

    
    if (correo2.value === null || correo2.value === ''){
       mensajesError.push('Ingresa tu correo');
    }

    if (correo.value !== correo2.value){
        mensajesError.push('Los correos no coinciden');
    }

    if (correo.value === correo2.value){
        
    }

    console.log(mensajesError);
    error.innerHTML = mensajesError.join(', ');

    // error.innerHTML = mensajesError.join(', ');
    correo.innerHTML = mensajesError.join(', ');
    return false;

}


//JQuery
$(document).ready(function () {
    //Validar Correo

    $('#idCorreo').blur(function () { 
        var vCorreo = $('#idCorreo').val();

        if(vCorreo === ''){
            $('#idCorreo').addClass('border-danger');

        }
    });

    $('#idCorreo').click(function (e) { 
        $('#idCorreo').removeClass('border-danger');
    });

    $('#idCorreo2').blur(function () { 
        var vCorreo = $('#idCorreo2').val();

        if(vCorreo === ''){
            $('#idCorreo2').addClass('border-danger');

        }
    });

    $('#idCorreo2').click(function (e) { 
        $('#idCorreo2').removeClass('border-danger');
    });
});