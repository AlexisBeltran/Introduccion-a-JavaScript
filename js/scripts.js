//Variable con let

let Nombre = "Alexis Beltran";
const Nombre2 = "Pedro Beltran Hernandez";
let i = 0;
const email = "correo@correo.com";

for(i = 0; i < Nombre.length; i++ ){    

}
console.log(Nombre + " Tiene " + i + " Caracteres");

console.log(Nombre.length);
console.log(Nombre2.length);

//Index of
console.log(Nombre.indexOf('Pedro'));

//Include (retorna true or false)
console.log(Nombre.includes("Alexis"))

//Numeros y operadores

const numero1 = 100;
const numero2 = 50;
const numero3 = 200.447845;

console.log((numero1 + numero2) * numero2);
console.log(numero3.toFixed(2));
console.log(numero2 % numero1);

//El objeto Math
let resultado;

resultado = Math.PI;
console.log(resultado);
let resultado2 = Math.round(resultado); //Redondea
console.log(resultado2);
let resultado3 = Math.ceil(3.9);
console.log(resultado3); //Redondea el numero hacia arriba
let resultado4 = Math.floor(2.4); 
console.log(resultado4); //Redonde el numero hacia abajo
let resultado5 = Math.sqrt(548);
console.log(resultado5.toFixed(2));
resultado5 = Math.min(3,5,7,9,2); //Te devuelve el numero menor 
resultado5 = Math.max(3,5,7,9,2,10);
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
resultado5 = getRandomArbitrary(1, 100);
resultado5 = Math.floor(Math.random() * 30);
console.log(resultado5);

//Template Strings - String Literals
console.log(`Nombre del cliente: ${Nombre}\nEmail: ${email} `);

//Objetos


const Producto = {
    NombreProducto : "Monitor 20 Pulgadas",
    Precio : 300,
    Disponibilidad : true
}
console.log(Producto.NombreProducto);
console.log(Producto.Precio);
console.log(Producto.Disponibilidad);

//Agregar Nuevas Propiedades

Producto.imagen = "imagen.jpg";

//Eliminar Propiedades
delete Producto.Disponibilidad;
console.log(Producto);
const Producto2 = {
    nombreProducto : "Laptop Lenovo",
    Precio : 400,
    Disponibilidad : true
}
//Destructuring
const {Precio} = Producto2
console.log(Precio);

