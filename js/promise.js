//* Promise

const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true;

    if (auth) {
        resolve("Usuario Autenticado"); // El promise se cumple
    } else {
        reject("No se pudo iniciar sesion"); // El promise no se cumple 
    }
});

// De esta forma la variable tiene 2 valores, uno si es positivo y otro si es negativo y podemos acceder a ellos con .then y .catch
usuarioAutenticado
    .then( resultado => console.log(resultado) )
    .catch( error => console.log(error) )

/*
 * En los Promise existen 3 valores
 * Pending: No se ha cumplido pero tampoco se ha rechazado
 * Fullfilled: Ya se cumplio
 * Rejected: Se ha rechazado o no se pudo cumplir
*/