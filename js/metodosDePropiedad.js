const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo Cancion con el ID: ${id}`);
    },
    pausar : function() {
        console.log('Pausando...');
    },
    crearPlaylist : function(nombre) {
        console.log(`Creada la playlist: ${nombre}`);
    },
    reproducirPlaylist : function(nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`);
    }
}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la cancion ${id}`);
}

reproductor.reproducir(231);
reproductor.pausar();
reproductor.borrarCancion(321);
reproductor.crearPlaylist("Viejitos")
reproductor.reproducirPlaylist("Viejitos")