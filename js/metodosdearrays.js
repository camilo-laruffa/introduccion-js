const arrayGod = ["Hola", 10, true, "si", null, {nombre: "Juan", trabajo: "Programador"}, [1,2,3]]

arrayGod.pop() // borra el ultimo
console.log(arrayGod);
arrayGod.push("nashe") // añade al final
console.log(arrayGod);
arrayGod.shift() // Borra el primero
console.log(arrayGod);
arrayGod.splice(3,2) // Borra desde el 3 + 2 espacios
console.log(arrayGod);

const nuevoArray = [ ...arrayGod ]
console.log(nuevoArray);