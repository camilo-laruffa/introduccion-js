function obtenerEmpleados() {
  const archivo = "js/empleados.json";

  // Fetch obtiene un archivo desde una URL y devuelve una Promise, desde ella podemos hacer cosas.
  fetch(archivo)
    .then((resultado) => {
      return resultado.json();
    })
    .then((datos) => {
        //console.table(datos.empleados);

        // extraigo empleados(el objeto) de datos(el json)
        const { empleados } = datos;
        //console.log(empleados);

        empleados.forEach( empleado => {
            console.log(empleado.id);
            console.log(empleado.nombre);
            console.log(empleado.puesto);

            /*document.querySelector(".contenido").textContent += empleado.nombre;*/
        })
    });
}

obtenerEmpleados();
