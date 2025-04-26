class persona{
    constructor(nombre , nombre1){
        this.nombre1 = nombre;
        this.nombre2 = nombre1;

    }
    caminar(){
        return `todas las manañanas ${this.nombre1} sale a caminar con ${this.nombre2}.`
    }

}

const nombre = new persona ('johan','Felipe');
console.log (nombre.caminar());
