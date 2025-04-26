class persona {
    #edad
    constructor(edad){
        this.#edad = edad
    }


setEdad(edadNueva){
    if (edadNueva > 0) {
        this.#edad = edadNueva;
    }
}


getEdad (){
    return this.#edad
}
}

class empleado extends persona{
    constructor (nombre,edad){
        super (edad);
        this.nombre = nombre 
    }

actualizarEdad(edadNueva){
    this.setEdad (edadNueva);
}
}

const empleado1 = new empleado ("Johan", 20);
console.log (empleado1.getEdad());

empleado1.actualizarEdad (25);
console.log (empleado1.getEdad());
