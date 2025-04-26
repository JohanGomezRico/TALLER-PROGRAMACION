class vehiculo{
    constructor(nombre){  
        this.nombre = nombre
    }
    mover(){
        return `${this.nombre} se esta moviendo`
    }
}

class coche extends vehiculo{
    constructor(nombre){
        super(nombre)
        
    }

    mover(){
        return `el ${this.nombre} se esta moviendo`
    }
}

class bicicleta extends vehiculo{
    constructor(nombre){
        super (nombre)
    }
    mover(){
        return `la ${this.nombre} se esta moviendo`
    }
}


const vehiculo1 = new vehiculo ("toyota");
console.log(vehiculo1.mover());

const coche1 = new coche ("carro");
console.log (coche1.mover());

const bicicleta1 = new bicicleta ("bicicleta");
console.log (bicicleta1.mover());