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

    peliculaObjeto = new Pelicula();
    if(cine.cartelera.length == 0){
        peliculaObjeto.id=1;
    }else{
        peliculaObjeto.id = cine.cartelera[cine.cartelera.length-1].id + 1;
    }
    peliculaObjeto.titulo = 'Guardianes de la Galaxia Vol 3'
    peliculaObjeto.sinopsis = "En GUARDIANES DE LA GALAXIA VOL. 3 de Marvel Studios, la querida banda de Guardianes se instala en Knowhere. Pero sus vidas no tardan en verse alteradas por los ecos del turbulento pasado de Rocket. Peter Quill, aún conmocionado por la pérdida de Gamora, debe reunir a su equipo en una peligrosa misión para salvar la vida de Rocket, una misión que, si no se completa con éxito, podría muy posiblemente conducir al final de los Guardianes tal y como los conocemos."
    peliculaObjeto.trailerUrl = "https://www.youtube.com/watch?v=dPvx_m-XdlI";
    peliculaObjeto.posterUrl = 'https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/movies/64388c5c4fb2d20008366216/common/guardianes-de-la-galaxia3-93191-1681427657446.jpg'
    peliculaObjeto.sala = crearSala();
    agregarPelicula(peliculaObjeto);

}
