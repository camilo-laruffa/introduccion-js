"use strict"; // Correr JS en modo estricto

const producto = {
    nombreProducto: "Monitor NasheX",
    precio: 300,
    disponible: true,
}

Object.freeze(producto) // El producto no se puede alterar
Object.seal(producto) // No se le puede añadir atributos al objeto ni quitar pero si se puede alterar uno existente

//Para saber si esta sealed o frozen
console.log(Object.isSealed(producto)); 
console.log(Object.isFrozen(producto));