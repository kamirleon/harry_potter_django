$(document).ready(function () {
    
  

    //Validar nombre
    $('#idNombre').blur(function () { 
        var vNombre = $('#idNombre').val();

        if(vNombre === ''){
            $('#idNombre').addClass('border-danger');

        }
    });

    $('#idNombre').click(function (e) { 
        $('#idNombre').removeClass('border-danger');
    });

    //Validar Alias
    $('#idAlias').blur(function () { 
        var vAlias = $('#idAlias').val();

        if(vAlias === ''){
            $('#idAlias').addClass('border-danger');

        }
    });

    $('#idAlias').click(function (e) { 
        $('#idAlias').removeClass('border-danger');
    });

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


    //Validar Contraseña
    $('#idContrasena').blur(function () { 
        var vContrasena = $('#idContrasena').val();

        if(vContrasena === ''){
            $('#idContrasena').addClass('border-danger');

        }
    });

    $('#idContrasena').click(function (e) { 
        $('#idContrasena').removeClass('border-danger');
    });

    //Validar Seleccion

    $('#idSeleccion').blur(function () { 
        var vSeleccion = $('#idSeleccion').val();

        if(vSeleccion === '--Selecciona una casa--'){
            $('#idSeleccion').addClass('border-danger');

        }
    });

    $('#idSeleccion').click(function (e) { 
        $('#idSeleccion').removeClass('border-danger');
    });

    //Validar Direccion
    $('#idDireccion').blur(function () { 
        var vDireccion = $('#idDireccion').val();

        if(vDireccion === ''){
            $('#idDireccion').addClass('border-danger');
            
        }
    });

    $('#idDireccion').click(function (e) { 
        $('#idDireccion').removeClass('border-danger');
    });

    //Validar Telefono
    $('#idTelefono').blur(function () { 
        var vSeleccion = $('#idTelefono').val();

        if(vSeleccion === ''){
            $('#idTelefono').addClass('border-danger');
            $('#lTelefono').addClass('border-danger');

        }
    });

    $('#idTelefono').click(function (e) { 
        $('#idTelefono').removeClass('border-danger');
        $('#lTelefono').removeClass('text-danger');
    });
});