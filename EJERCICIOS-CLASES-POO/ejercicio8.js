class empleado{
    #nombre;
    #salario;

    constructor (nombre, salario){
        this.#nombre = nombre;
        this.#salario = salario;

    }
    nomsala(){
        return `su nombre es ${this.#nombre}, su salario es: ${this.#salario}`
    }


    getNombre(){ 
    return `${this.#nombre}`;
   }

   setNombre(nombre){
    if (nombre.length > 0){
        this.#nombre = nombre;
    }
    else{
        console.log (`el nombre no puede estar vacio`);
    }

   }

   getSalario(){ 
    return `${this.#salario}`;
   }

   setSalario(salario){
    if (salario > 0){
        this.#salario = salario;
    }
    else{
        console.log (`ingresa salario valido`);
    }

   }

}


const empleado1 = new empleado ('johan', '2M');
console.log (empleado1.nomsala());

empleado1.setNombre ('Steven')
console.log (empleado1.getNombre());

const salario1 = new empleado ('johan','2M')

salario1.setSalario ('19.000000');
console.log(salario1.getSalario());