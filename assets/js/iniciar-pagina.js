var ponerTituloPagina = () => {
    var tituloPagina = document.querySelector("#titulo-pagina");
    tituloPagina.textContent = cine.nombre;
}


var ponerPeliculasEjemplo = ()=>{
    var peliculaObjeto = new Pelicula();
    if(cine.cartelera.length == 0){
        peliculaObjeto.id=1;
    }else{
        peliculaObjeto.id = cine.cartelera[cine.cartelera.length-1].id + 1;
    }
    peliculaObjeto.titulo = 'Rápidos Y Furiosos X'
    peliculaObjeto.sinopsis = "Comienza el final del camino. A lo largo de muchas misiones y contra cualquier adversidad, Dom Toretto (Vin Diesel) y su familia han sido más inteligentes, más astutos y más rápidos que todos los enemigos que se cruzan en su camino. Ahora, se enfrentan al oponente más letal al que se han enfrentado jamás: Una amenaza aterradora que surge de las sombras del pasado y que está alimentada por una sed de venganza, determinada a destruir a esta familia y destruir todo lo que Dom ama, para siempre."
    peliculaObjeto.trailerUrl = "https://www.youtube.com/watch?v=pdMdsIIQ1sM";
    peliculaObjeto.posterUrl = 'https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster/7/8/7/1/41787-7-esl-CO/864c95e57bca-fx_cineco_2-poster_480x670.jpg'
    peliculaObjeto.sala = crearSala();
    agregarPelicula(peliculaObjeto);

}
