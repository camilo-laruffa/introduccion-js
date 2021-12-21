//* Clases

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de $${this.precio}`
    }

    getPrecio() {
        return this.precio;
    }
}

const Camburguesas = new Producto("Camburguesas", 150);

console.log(Camburguesas.formatearProducto())
console.log(Camburguesas.getPrecio());

// Herencia

class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio); //Le pasa los valores al constructor "padre"
        this.isbn = isbn;
    }

    formatearProducto() {
        // Ahi estoy llamando la funcion del padre
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`
    }
}

const libro = new Libro("JavaScript la Revolución", 120, "9129319553489342");
console.log(libro.formatearProducto());