class empleado{

    trabajar(){
        return( `estoy trabajando`);
    }

    }

class gerente extends empleado{

}


const empleado1 = new gerente();
console.log(empleado1.trabajar());