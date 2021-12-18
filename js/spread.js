const producto = {
    nombreProducto: "Monitor NasheX",
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: "1kg",
    medida: "1m"
}

// Asi se puede crear un objeto con las propiedades de otros
const nuevoProducto = { ...producto, ...medidas }

console.log(nuevoProducto);