async function obtenerEmpleados() {
    const archivo = "js/empleados.json";
  
    // Aca espera hasta haber obtenido el resultado y dsp lo guarda y dsp lo muestra
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
  }
  
  obtenerEmpleados();