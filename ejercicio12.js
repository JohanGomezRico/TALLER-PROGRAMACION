class escuela{

    static numEstudiante = 0

    static aumentaerEstudiante(){

        escuela.numEstudiante ++;
    
    }

    static totalEstudiantes(){

       return `el total de estudiantes registrados es: ${escuela.numEstudiante}`
    }
}

class estudiante extends escuela{

    constructor(nombre,edad){
        super();
        this.nombre = nombre;
        this.edad = edad;
        escuela.aumentaerEstudiante();

    }

    infoEstudiante(){
        return `Nombre del estudiante: ${this.nombre}, la edad del estudiante es: ${this.edad}`
    }


}

const estudiante1 = new estudiante ('johan','20');
const estudiante2 = new estudiante ('nahomi','21');
const estudiante3= new estudiante ('laura','19');

console.log(estudiante1.infoEstudiante());
console.log(estudiante2.infoEstudiante());
console.log(estudiante3.infoEstudiante());
console.log(escuela.totalEstudiantes());







