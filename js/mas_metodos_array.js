const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    {nombre : "Monitor 20 Pulgadas", precio: 500},
    {nombre : "Televisión 50 Pulgadas", precio: 700},
    {nombre : "Tablet", precio: 300},
    {nombre : "Audifonos", precio: 200},
    {nombre : "Celular", precio: 500},
    {nombre : "Bocinas", precio: 300}
];

//foreach
meses.forEach(mes => {
    console.log(mes);
});

for(let i=0; i<carrito.length;i++){
    console.log(carrito[i]);
}
carrito.forEach(carrito_leer => { //ESTO ES ARRROW FUCTION
    console.log(carrito_leer);
});

// Map Sirve para crear un nuevo arreglo como filtrar
carrito.map(producto => {
    console.log(producto.nombre);
});



