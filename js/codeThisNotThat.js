//! Loops feos!!!
const array = [1,2,3]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(`Elemento: ${element}`)
}

//* Loops lindos!!!
for (const e of array) {
    console.log(`Elemento: ${e}`)
}

//? Se podria hacer mejor
array.forEach(e => {
    console.log(`Elemento: ${e}`)
});

//* Asi, ya que console.log ya es una funcion
array.forEach(e => console.log(`Elemento: ${e}`))




