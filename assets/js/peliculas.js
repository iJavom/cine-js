class Pelicula{
    id;
    titulo;
    sinopsis;
    duracion;
    genero;
    clasificacion;
    estreno;
    posterUrl;
    trailerUrl;
    sala=[];
}


var agregarPelicula = (peliculaParam) =>{
    let seccionPeliculas = document.querySelector("#seccion-peliculas");
    let tarjetaHTML = `                    <div id="pelicula-${peliculaParam.id}" class="col-md-3">
    <div class="card" style="width: 100%;">
        <img src="${peliculaParam.posterUrl}" class="card-img-top" alt="Poster de ${peliculaParam.titulo}">
        <div class="card-body">
          <h5 class="card-title">${peliculaParam.titulo}</h5>
          <p class="card-text">${peliculaParam.sinopsis}</p>
          <a class="text-danger" onclick="eliminarPelicula(${peliculaParam.id})">Eliminar</a>
          <a href="${peliculaParam.trailerUrl}" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-title="Ver Trailer"><span class="material-symbols-outlined">
          videocam
          </span></a>
          <a onclick="mostrarSala(${peliculaParam.id})"  data-bs-toggle="tooltip" data-bs-title="Comprar / Cancelar" class="btn btn-success"><span class="material-symbols-outlined">
          shopping_cart
          </span></a>
          </div>
      </div>
</div>`
    seccionPeliculas.insertAdjacentHTML('afterbegin',tarjetaHTML);
    cine.cartelera.push(peliculaParam);
}

var guardarPelicula = () =>{
    var peliculaObjeto = new Pelicula();
    if(cine.cartelera.length == 0){
        peliculaObjeto.id=1;
    }else{
        peliculaObjeto.id = cine.cartelera[cine.cartelera.length-1].id + 1;
    }
    peliculaObjeto.titulo = document.querySelector("#titulo").value;
    peliculaObjeto.sinopsis = document.querySelector("#sinopsis").value;
    peliculaObjeto.duracion = document.querySelector("#duracion").value;
    peliculaObjeto.genero = document.querySelector("#genero").value;
    peliculaObjeto.clasificacion = document.querySelector("#clasificacion").value;
    peliculaObjeto.estreno = document.querySelector("#estreno").value;
    peliculaObjeto.posterUrl = document.querySelector("#imagen").value;
    peliculaObjeto.trailerUrl = document.querySelector("#trailer").value;
    peliculaObjeto.sala = crearSala();
    agregarPelicula(peliculaObjeto);
    mostrarOcultarForm();

    document.querySelector("#titulo").value = "";
    document.querySelector("#sinopsis").value = "";
    document.querySelector("#duracion").value = "";
    document.querySelector("#genero").value = "";
    document.querySelector("#clasificacion").value = "";
    document.querySelector("#estreno").value = "";
    document.querySelector("#imagen").value = "";
    document.querySelector("#trailer").value = "";
}


var mostrarOcultarForm = ()=>{
    document.querySelector("#formulario-pelicula").classList.toggle('d-none');
    document.querySelector("#mostrar-form").classList.toggle('d-none');
    document.querySelector("#ocultar-form").classList.toggle('d-none');
}

var eliminarPelicula = (id) =>{
    document.querySelector(`#pelicula-${id}`).remove();
    cine.cartelera = cine.cartelera.filter((elemento)=>{
        return elemento.id != id; 
    })
}
