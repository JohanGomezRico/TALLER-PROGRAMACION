class animal{  

    constructor(raza){
        this.raza = raza
    }

    hacerSonido(){
        return `los animales hacen sonidos `
    }
}
class perro extends animal{
    constructor(raza,sonido){
        super(raza);
        this.sonido = sonido;
    }
    hacerSonido(){
        return `la raza del animal es: ${this.raza}, el sonido que hace es ${this.sonido}`
    }
}

 class gato extends animal{
        constructor(raza,sonido){
            super(raza),
            this.sonido = sonido;
        }

    hacerSonido(){
        return `la raza del animal es: ${this.raza}, el sonido que hace es ${this.sonido}`
    }
 }


 const animal1 = new perro ('Perro','guau guau');
 console.log(animal1.hacerSonido());

 const animal2 = new gato ('Gato','miau miau');
 console.log(animal2.hacerSonido());