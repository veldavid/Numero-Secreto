let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;
let listaNumerosSorteados = [];


function asignarTextoElemento(elemento,texto){
    let etiqueta = document.querySelector(elemento);
    etiqueta.innerHTML = texto; 
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    /*console.log(typeof(numeroUsuario));
    console.log(numeroUsuario);*/
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`Felicidades Acertaste el Numero en ${intentos} ${(intentos === 1) ? 'Vez' : 'Veces'}`);
        document.getElementById("reiniciar").removeAttribute('disabled');
    }else{
        intentos++;
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p',"El Numero Secreto en Menor"); 
        }else{
            asignarTextoElemento('p',"El Numero Secreto en Mayor"); 
        }
        limpiaCaja();
    }
    return;
}

function limpiaCaja() {
    document.querySelector("#valorUsuario").value='';
}

function generaNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p',"Ya se Sortearon todo los Numeros Posibles");
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generaNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego() {
    //limpiar caja
    limpiaCaja();
    //generar numero secreto
    //iniciar mensajes y contadores
    condicionesIniciales();
    //desahilitar boton inicio
    document.querySelector("#reiniciar").setAttribute('disabled','true');
}

function condicionesIniciales() {
    asignarTextoElemento('h1',"Juego Del Numero Secreto");
    asignarTextoElemento('p',`Indicar Numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generaNumeroSecreto();
    intentos = 1;
    //console.log(numeroSecreto);

}
condicionesIniciales();
