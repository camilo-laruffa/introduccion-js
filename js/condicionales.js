//* If

let numero = "1000"
if (numero == 1000) {
    console.log("Si, esto definitivamente es el numero 1000");
}

// El "===" se fija que sea el mismo valor y el mismo tipo
if (numero === 1000) {
    console.log("Si, esto definitivamente es el numero 1000");
} else {
    console.log("Nono, esto definitivamente no es el numero 1000");
}

//* Switch
numero = "2021"
switch (numero) {
    case "1000": 
        console.log("Anashe");
        console.log("Super anashe");
        break;
    case "2021":
        console.log("Anashe?");
        break;
    default:
        console.log("Casi anashe pero no tan nashe");
        break;
}