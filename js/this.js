// This
//! Un arrow function hace referencia a la ventana global, por lo que "this" no se referiria al objeto, sino a todo lo que pertenezca a "window" osea que no funcionaria y por eso usamos "function"

const reservacion = {
    nombre: "Camilo",
    apellido: "Laruffa",
    total: 5000,
    pagado: false,
    informacion: function(){
        if(this.pagado) {
            console.log(`El cliente ${this.nombre} hizo una reserva de ${this.total} y pagó`);
        }else {            
            console.log(`El cliente ${this.nombre} hizo una reserva de ${this.total} y no pagó`);
        }
    }
}

reservacion.pagado = true;
reservacion.informacion();