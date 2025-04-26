class vehiculo{
    #modelo;
    marca;

    constructor(modelo,marca){
        this.#modelo = modelo;
        this.marca = marca;
    }

    #encenderMotor(){
        return `el modelo del carro es: ${this.#modelo}, la marca del carro es: ${this.marca}`

    }

    arracar(){
        return `${this.#encenderMotor()}`
    }

}


const carro1 = new vehiculo ('camioneta','Toyota');
console.log(carro1.arracar());