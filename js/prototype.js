//* Asi se le añade una funcion a un objeto

function Producto (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
function Cliente (nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

const Hammilo = new Producto("Ham-milo", 100000);
const Soyamila = new Producto("Soya-mila", 100000);
const Camilo = new Cliente("Camilo", "Laruffa"); 

Producto.prototype.formatearProducto = function() { return `El precio del producto ${this.nombre} es $ ${this.precio}` };
Cliente.prototype.formatearCliente = function() { return `El comprador del producto es ${this.nombre} ${this.apellido}` };

console.log(Hammilo.formatearProducto());
console.log(Camilo.formatearCliente())

//! Esto es viejo