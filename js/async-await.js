//* Async / await

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log("Descargando clientes... espere...");
    
        setTimeout(() => {
            resolve('Los clientes fueron Descargados')
        }, 5000);
    
    })
}

function descargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log("Descargando pedidos... espere...");
    
        setTimeout(() => {
            resolve('Los pedidos fueron Descargados')
        }, 3000);
    
    })
}

async function app() {
    try {
        /* const resultado = await descargarNuevosClientes();
        const resultado = await descargarNuevosClientes();
        console.log(resultado);
        console.log(pedidos); */

        // De esta forma los 2 pedidos se ejecutan al mismo tiempo y no uno dsp del otro
        const resultado = await Promise.all([ descargarNuevosClientes(), descargarUltimosPedidos() ]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();

/* 
Espera 3 segundos y hace algo:

setTimeout(function() {
    console.log('set timeout...');
}, 3000)


Cada 3 segundos hace algo:

setInterval(function() {
    console.log('set timeout...');
}, 3000) */
