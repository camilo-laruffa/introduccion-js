// For
const array = [2,2,3,4] 
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);    
}

// While
let nashe = true
while (nashe == false) {
    console.log("Jaja nashe");
    nashe = false;
}

// Do while
do {
    console.log("Jaja nashe");
    nashe = true;
}while(nashe = false)

// Foreach
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
// Foreach no se usa para asignar valores
const precios = carrito.forEach( producto => producto.precio );
console.log(precios);

// Map: Es lo mismo que el foreach excepto que esta hecho para crear arrays nuevos
const todoEnUno = carrito.map( producto => `${producto.nombre}, ${producto.precio}`);
console.log(todoEnUno);