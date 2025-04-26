class empleado {
    static totalEmpleados = 0; 
  
    constructor(nombre) {
      this.nombre = nombre;
      empleado.totalEmpleados++; 

      
    }
    empleadosCreados(){
    console.log(`Total de empleados creados: ${empleado.totalEmpleados}`); 
  }
}
  
  class gerente extends empleado {
    constructor(nombre,) {
      super(nombre);
      
    }
  }
  
const empleado1 = new empleado("María");
const empleado2 = new empleado("Dayana");
const empleado3 = new empleado("Luis");
const gerente1 = new gerente("Claudia");
const gerente2 = new gerente("Johan");
  
console.log(empleado.totalEmpleados);
