var crearSala = () => {
    sala = [];
    let filas = 12;
    let sillas = 10;
    var fila = [];
    for(let i =0;i<sillas;i++){
        fila.push(false);
    }
    for (let i = 0; i < filas; i++) {
        sala.push(fila.slice(0,sillas));
    }
    //cine.sala = sala;
    return sala;
}

var mostrarSala = (id) => {

    let sillaAcumuladas = ``;
    peliculaSala = cine.cartelera.find((elemento)=>{
        return elemento.id == id;
    });
    if(peliculaSala != undefined){
        for(let i = 0; i < peliculaSala.sala.length; i++){
            sillaAcumuladas += '<tr>'
            for(let j = 0; j< peliculaSala.sala[i].length; j++){ 
                if(peliculaSala.sala[i][j]){
                    sillaAcumuladas = sillaAcumuladas+`<td onclick="comprarCancelar(${i},${j},${id})"><span id="silla-${i}-${j}" class="material-symbols-outlined comprada">chair</span></td>`;
                }else{
                    sillaAcumuladas = sillaAcumuladas+`<td onclick="comprarCancelar(${i},${j},${id})"><span id="silla-${i}-${j}" class="material-symbols-outlined">chair</span></td>`;
                }
            }
            sillaAcumuladas = sillaAcumuladas + '</tr>';
        }
    
        let sala = document.querySelector(`#asientos-teatro`);
        sala.innerHTML = sillaAcumuladas;
        mostrarTeatro();
    }

}

var comprarCancelar = (i,j,id)=>{
    debugger;
    document.querySelector(`#silla-${i}-${j}`).classList.toggle(`comprada`);
    peliculaSala = cine.cartelera.find((elemento)=>{
        return elemento.id == id;
    });
    peliculaSala.sala[i][j] = !peliculaSala.sala[i][j];
}

var mostrarTeatro = () =>{
    document.querySelector(".sala-cine").classList.toggle(`d-none`);
}