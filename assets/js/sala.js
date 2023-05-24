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
    cine.sala = sala;
    //return sala;
}

var mostrarSala = () => {
    let sillaAcumuladas = ``;
    for(let i = 0; i < cine.sala.length; i++){
        sillaAcumuladas += '<tr>'
        for(let j = 0; j< cine.sala[i].length; j++){   
            sillaAcumuladas = sillaAcumuladas+`<td onclick="comprarCancelar(${i},${j})"><span id="silla-${i}-${j}" class="material-symbols-outlined">chair</span></td>`;
        }
        sillaAcumuladas = sillaAcumuladas + '</tr>';
    }
    let sala = document.querySelector(`#asientos-teatro`);
    sala.innerHTML = sillaAcumuladas;
}

var comprarCancelar = (i,j)=>{
    document.querySelector(`#silla-${i}-${j}`).classList.toggle(`comprada`);
    cine.sala[i][j] = !cine.sala[i][j];
}

var mostrarTeatro = () =>{
    document.querySelector(".sala-cine").classList.toggle(`d-none`);
}