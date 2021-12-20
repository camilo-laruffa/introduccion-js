/*
 * JavaScript se ejecuta en 2 vueltas, la primera lee y reconoce solo las funciones y la segunda las llamadas a ellas. Si generas un llamado a una funcion "function" antes de crearla, no va a pasar nada. Pero si lo haces a una funcion "const" entonces te tira error porque para javascript eso es una variable.
 */

// Declaracion de la Funcion

function sumar() {
    console.log(10 + 10);
}

sumar();

// Expresion de la funcion
const restar = function() {
    console.log(6 - 3);
}

restar();

//* IIFE: La estructura IIFE esta hecha más que nada para que no se mezclen variables y funciones con otros archivos JS. Ya que las variables se comparten por archivos.
(function() {
    console.log('Joder esto es una funcion');
    // const Camilo = "Que buen muchacho"
})()

//? Sandias que podias ponerle valores default a los parametros?
function multiplicar (num1 = 0, num2 = 1) {
    console.log(num1 * num2);
}
multiplicar(4,3);
multiplicar(3);

// ...
let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return 1.65 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);


console.log(total);

const totalAPagar = calcularImpuesto(total);

console.log(`El total a pagar es ${totalAPagar}`);

