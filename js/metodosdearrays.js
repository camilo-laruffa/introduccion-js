const arrayGod = ["Hola", 10, true, "si", null, {nombre: "Camilo", trabajo: "Programador"}, [1,2,3]]

//! Es mejor si no los usas 
arrayGod.pop() // borra el ultimo
console.log(arrayGod);

arrayGod.push("nashe") // añade al final
console.log(arrayGod);

arrayGod.shift() // Borra el primero
console.log(arrayGod);

arrayGod.splice(3,2) // Borra desde el 3 + 2 espacios
console.log(arrayGod);

//* Este esta bueno
const nuevoArray = [ ...arrayGod, "Super nashe" ]
console.log(nuevoArray);

//* Otros metodos:
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', ]
const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500 },
    { nombre: 'Television 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Parlante', precio: 300 },
    { nombre: 'Laptop', precio: 800 },
];

//! Feo
meses.forEach(function(mes) {
    if(mes == 'Marzo') {
        console.log("Marzo si existe")
    }
});

//* Lindo
let resultado = meses.includes('Febrero')
console.log(resultado)

//! No funciona con objetos dentro del array
resultado = carrito.includes('Teclado')
console.log(resultado);

//* Si tenes objetos tenes que usar Some. Estos 2 metodos sirven para obtener un valor BOOLEAN
resultado = carrito.some(function(producto) {
    return producto.nombre === 'Teclado'
})
console.log(resultado);

//* Reduce: reduce lo que hace es que "reduce" un array a una variable
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0)
console.log(resultado);

//* Filter
resultado = carrito.filter(function(producto) {
    return producto.precio > 400
})

resultado = carrito.filter(function(producto) {
    return producto.nombre != 'Teclado'
})
console.log(resultado);