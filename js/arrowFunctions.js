
//* Funciones flecha => 

const sumar = (n1,n2) => console.log( n1 + n2 );
sumar(2,3);


//* Esto
let aprendiendo = (tecnologia) => {
    console.log(`Aprendiendo ${tecnologia}`);
}

//Nashei 
aprendiendo("JavaScript");

//* Es lo mismo que:
aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);// Solo si es un parametro

aprendiendo("React");

//* Ejemplos anteriores con arrow function:
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

//For each
meses.forEach( mes => {
    if(mes == 'Marzo') {
        console.log("Marzo si existe")
    }
});
//Some
resultado = carrito.some( producto => producto.nombre === 'Teclado');
console.log(resultado);

//Reduce
resultado = carrito.reduce( (total, producto) => total + producto.precio, 0 )
console.log(resultado);

//Filter
resultado = carrito.filter( producto => producto.precio > 400 );
resultado = carrito.filter( producto => producto.nombre != 'Teclado' );
console.log(resultado);

