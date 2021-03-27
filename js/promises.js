/*const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = false;
    if(auth){   
        resolve('Usuario Autenticado'); //El promise se cumple
    }
    else {
        reject('No se pudo iniciar sesión'); //El promise no se cumple
    }
});

usuarioAutenticado.then(function(resultado){
    console.log(resultado);
}).catch(function(Error){
    console.log(Error);
});
*/
// En los promises existen 3 valores
// Pending : No se ha cumplido pero tampoco se ha rechazo
// Fulfilled : Ya se cumplio
// Rejected : Ae ha rechazado o no se pudo cumplir


/*  NOTIFICACIONES 
const Notificaciones = document.querySelector('#boton');
Notificaciones.addEventListener('click', () => {
    Notification.requestPermission().then(Resultado => console.log('El resultado es: ' + Resultado));
});

if(Notification.permission == 'granted'){
    new Notification('Esta es el titulo de la notificacion', {
        icon: 'img/notificacion.png',
        body: 'Esta es la descripción de la notificacion'
    })
}
*/

//Async / await

function DescargarNuevosClientes() {
    return new Promise(resolve => {
        console.log('Descando Clientes .... Espere...');

        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    });
}

function DescargarUltimosPedidos() {
    return new Promise(resolve => {
        console.log('Descando Pedidos .... Espere...');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados');
        }, 3000);
    });
}

async function app(){ //async algunas de las instrucciones se ejecutarán a destiempo.
    try{
        //const Clientes = await DescargarNuevosClientes(); //await provoca que la ejecución de una función async sea pausada hasta que una Promise sea terminada o rechazada, y regresa a la ejecución de la función async después del término.
        //const Pedidos = await DescargarUltimosPedidos();
        //console.log(Clientes);
        const Resultado = await Promise.all([DescargarNuevosClientes(), DescargarUltimosPedidos()]);
        console.log(Resultado[0]);
        console.log(Resultado[1]);
    }
    catch(Error){
        console.log(Error);
    }
}
    
app();

console.log("Este codigo no se bloquea");