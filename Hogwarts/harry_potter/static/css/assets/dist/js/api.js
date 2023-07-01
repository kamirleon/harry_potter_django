
// A $( document ).ready() block.
$( document ).ready(function() {
    //alert( "Esta cargado" );

    function generarCard(personaje){
        let html =`<div class="col">
        <div class="card" style="max-width: 20rem;">
        <img src="${personaje.image}" class="card-img-top img-fluid mx-auto" alt="${personaje.name}">
        <div class="card-body">
            <h5 class="card-title">${personaje.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${personaje.actor}</h6>
            <p class="card-text">Especie: ${personaje.species}</p>
            <p class="card-text">Patronus: ${personaje.patronus}</p>
            <p class="card-text">Casa: ${personaje.house}</p>
        </div>
        </div>
        </div>
        `;
        return html;
    }

    $.get("https://hp-api.onrender.com/api/characters", function(data_edit, status){
        //id #detalle_personajes
            if(status === 'success'){
                //let data_edit=data.slice(0,50); //arreglo de nosotros.
                // let tamanoParte=Math.ceil(data_edit.length / 3);
                // let parte1 = data_edit.slice(0,tamanoParte); 
                // let parte2 = data_edit.slice(tamanoParte, tamanoParte * 2);
                // let parte3 = data_edit.slice(tamanoParte * 2);
                // //Recorrido de array!
                // parte1.forEach(function(personaje){
                //     let html = generarCard(personaje);
                //     $('#detalle_personajes').append(html);
                // });
                // parte2.forEach(function(personaje){
                //     let html = generarCard(personaje);
                //     $('#detalle_personajes').append(html);
                // });

                // parte3.forEach(function(personaje){
                //     let html = generarCard(personaje);
                //     $('#detalle_personajes').append(html);
                // });

                let html = '';
                let contador = 0;
                data_edit.slice(0,24).forEach(function(personaje) {
                    if (contador % 3 === 0) {
                      html += '<div class="row p-5"> <div class="card-group">';
                      
                    }
                    html += generarCard(personaje);
                    contador++;
                    if (contador % 3 === 0) {
                      html += '</div></div>';
                    }
                  });
                
                  // Agregar el HTML generado al contenedor de las "cards"
                  $('#detalle_personajes').html(html);

            }else{
                $('#personaje_detalle').html('Sin Información')
            }

      });
});