class vehiculo{

    constructor (peso, velocidadMax){

        this.peso = peso;
        this.velocidadMax = velocidadMax;
    }

    mover (){
        return ` el peso del vehiculo es: ${this.peso}, la velocidad maxima del vehiculo es: ${this.velocidadMax}`
    }
}


class carro extends vehiculo{
    constructor(peso, velocidadMax){
        super(peso, velocidadMax)

    }

    mover (){
        return ` el peso del vehiculo es: ${this.peso}, la velocidad mxima del vehiculo es: ${this.velocidadMax}`
    }

}

class bicicleta extends vehiculo{
    constructor(peso, velocidadMax){
        super(peso, velocidadMax)

    }

    mover (){
        return ` el peso del vehiculo es: ${this.peso}, la velocidad mxima del vehiculo es: ${this.velocidadMax}`
    }

}


const carro1 = new carro ('1000kl','210 kl por hora');
console.log(carro1.mover());

const bicicleta1 = new bicicleta ('50kl','0kl el usuario da su velocidad');
console.log(bicicleta1.mover());

