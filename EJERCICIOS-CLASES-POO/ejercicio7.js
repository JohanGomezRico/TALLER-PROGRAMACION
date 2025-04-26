class coche{

    constructor(nombre){
        this.nombre = nombre

    }

#encenderMotor(){
    console.log (`encender motor tu carro ${this.nombre} esta encendido`);

}

conducir(){
    this.#encenderMotor();
    console.log (`el coche esta en moviento`);
}

}

const coche1 = new coche ('Toyota');
coche1.conducir();