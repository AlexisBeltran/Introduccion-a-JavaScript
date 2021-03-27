//This

const Reservacion = {
    nombre: "Alexis",
    apellido: "Beltran",
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total} pesos`);
    }
}

Reservacion.informacion();