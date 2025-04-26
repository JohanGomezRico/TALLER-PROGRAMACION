class empleado{

trabajar(){
    console.log ( `el empleado esta trabajando`);
}
    
}

class gerente extends empleado{

    trabajar(){
        console.log ( `el gerente esta trabajando`);
    }
}


const empleado1 = new empleado ();
empleado1.trabajar();

const gerente1 = new gerente();
gerente1.trabajar();