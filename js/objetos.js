//Object Literal

const producto = {
  nombreProducto: "Monitor NasheX",
  precio: 300,
  disponible: true,
}
console.log("nashe");

console.log(producto);

console.log(producto.nombreProducto);

console.log(producto["nombreProducto"]);

producto.imagen = "imagen.jpg"; //se añade un atributo

delete producto.disponible; // se borra un atributo
console.log(producto);

// Destructuring, es para extrer una variable de un objeto pero sin sacarla del objeto. Es como si la copiara
const { precio } = producto;
console.log(`Precio: ${precio}`);
console.log(`Precio: ${producto.precio}`)


// Object Constructor

function Producto (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const Hammilo = new Producto("Ham-milo", 100000);
const Soyamila = new Producto("Soya-mila", 100000);
console.log(Hammilo);
console.log(Soyamila);

















