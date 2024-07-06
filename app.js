// "Forma de hacerlo poco eficiente "
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Juego del numero secreto';

// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica un número del 1 al 10';

/*
    Para tener un orden y tener buenas prácticas de programación 
    el orden que se debería tener es el siguientes:  
    variable, funciones y acciones.
*/
// Variables
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let maximoDeIntentos = 3;

console.log(numeroSecreto);

console.log(maximoDeIntentos);
// Funciones
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // verifica en consola que el contenido esta funcionando y comprueba que todo este como lo decíamos
    // console.log(typeof(numeroDeUsuario));
    // console.log(numeroSecreto);
    // console.log(typeof(numeroSecreto));
    // console.log(numeroDeUsuario);
    // console.log(intentos);
    /*  El 3= dice que tiene que ser exacto la comparación con su tipo y contenido mientras el 2= solo mira
    que su contenido sea igual y solo el = asigna un contenido o dice que pertenece eje o = a cualquier 
    cosa o == o y o === o */
    if(numeroDeUsuario === numeroSecreto) {                              // por buenas prácticas se () 
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${ (intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.querySelector('#iniciar').setAttribute('disabled', 'true')
    } else { 
        if(intentos == maximoDeIntentos) {
            asignarTextoElemento('p', 'Fin de juego llegaste al limite de intentos');
        } else {
            // El usuario no acertó  
            if(numeroDeUsuario > numeroSecreto){
                asignarTextoElemento('p', 'El número secreto es menor ');
            } else {
                asignarTextoElemento('p', 'El número secreto es mayor');
            }

            intentos++;
            limpiarCaja();
            console.log(intentos);
        }
    }
    return;
}

function limpiarCaja() {
    // Fotma larga
    // let valorCaja = document.querySelector('#valorUsuario');
    // valorCaja.value = '';
    // return;    
    // Forma corta
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    // Si creamos una variable no es necesario poner una variable dentro de la función 
    // let numeroSecreto = Math.floor(Math.random()*10)+1;
    // Funcionamiento sin tener encuenta si se repite el numero al adivinar 
    // return Math.floor(Math.random()*10)+1;
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);


        if (listaNumerosSorteados.length == numeroMaximo) {
            asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
        } 
        else {
            // Si el número generado está incluido en la lista
            if(listaNumerosSorteados.includes(numeroGenerado)) {
                return generarNumeroSecreto();
            }else {
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
        }
}


function condicionesIniciales() {
    // Modificación o inserción de contenido 
    
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    condicionesIniciales();
    //Generar el número aleatorio
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
    document.getElementById('iniciar').removeAttribute('disabled');
}

condicionesIniciales();
