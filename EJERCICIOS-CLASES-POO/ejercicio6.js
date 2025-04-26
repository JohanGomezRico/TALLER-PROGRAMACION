class univercidad{

    static numEstudiante = 0;

    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    static  registrarEstudiante(){

      univercidad.numEstudiante ++;

      console.log(`la cantida de estudiantes registrados es: ${univercidad.numEstudiante}`);

    }
}


univercidad.registrarEstudiante();
univercidad.registrarEstudiante();
univercidad.registrarEstudiante();
univercidad.registrarEstudiante();




