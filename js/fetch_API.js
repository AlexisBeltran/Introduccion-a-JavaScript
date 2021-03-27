function ObtenerEmpleados(){
    const Enlace = 'js/empleados.json';
    fetch(Enlace).then( resultado => {
        return resultado.json();
    }).then(datos => {
       const { Empleados } = datos;
       Empleados.forEach(Empleado => {
           console.log(Empleado.cve_empleado);
           console.log(Empleado.nombre);
           console.log(Empleado.puesto);
       });
    })
}
ObtenerEmpleados();