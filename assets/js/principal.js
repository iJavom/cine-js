var cine = {
    nombre : "Cine JS UNC"
}


var ponerTituloPagina = () => {
    var tituloPagina = document.querySelector("#titulo-pagina");
    tituloPagina.textContent = cine.nombre;
}


ponerTituloPagina();