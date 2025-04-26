class Animal{ 

    constructor(animal1,animal2){
        this.animal1 =  animal1;
        this.animal2 = animal2;
    }

    hacerSonido(){
      return `los animales hacen sonidos caracteristicos como el ${this.animal1} y el ${this.animal2}`
    }
}
  class perro extends Animal { 
     constructor(animal1,animal2,sonidoP){
        super(animal1,animal2);
        this.sonidoP = sonidoP;
     }
     hacerSonido(){  
         return ` el animal ${this.animal1} hace un sonido de ladrido que suena ${this.sonidoP}`
     }

  }
 
    class gato extends Animal{ 
        constructor(animal1,animal2,sonidoG){
           super(animal1,animal2);
           this.sonidoG = sonidoG;
        }
        hacerSonido(){  
            return `el animal ${this.animal2} hace un sonido de maullido que suena ${this.sonidoG}`
        }
}

const animales = new Animal ('Perro','Gato')

const perro1 = new perro ('Perro' ,' Gato', 'GUAu');

const gato1 = new gato ('perro', 'Gato', 'MEUW' );

console.log (animales.hacerSonido());
console.log (perro1.hacerSonido());
console.log (gato1.hacerSonido());


