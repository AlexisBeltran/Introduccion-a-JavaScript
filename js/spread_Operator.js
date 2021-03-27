const Producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    Precio : 300,
    Disponible : true
}

const Medidas = {
    Peso : '1kg',
    Medida : '1m'
}

//Spread Operator
const nuevoProducto = {...Producto, ...Medidas};

console.log(Producto);
console.log(nuevoProducto);

//Arreglos o Array

const numero = [10, 20, 30, 40];
numero.forEach(numeros => {
    console.log(numeros);
});
numero.unshift(-40, 50);//Agrega al principio de un arreglo
numero.push(60); //Agrega al final de un arreglo
console.table(numero);

const meses = ["Enero", "Febrero", "Marzo"]; 
meses.splice(1, 2); //Splice borra los elementos desde la posicion 1 del arreglo a la 2
console.table(meses);
const nuevosMeses = [...meses, 'Junio'];
console.log(nuevosMeses);