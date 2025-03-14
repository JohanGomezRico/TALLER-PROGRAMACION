// decir si los angulos dados forman un triangulo//

let suma = 0

for ( let i = 1; i<=3; i++){
    let angulo = parseInt(prompt( "ingrese numero de angulo" + i));

      suma += angulo;
}
    if (suma === 180){
        alert (`los angulos forman un triangulo`)
 }
    else{
        alert (`los angulos dados no forman un triangulo`)
    }


    // formula para sabe si dando 3 lados forman un triangulo//
/*
let lado1 = 100
let lado2 = 20
let lado3 = 60

if ((lado1 + lado2) > lado2 && (lado1 + lado3) > lado2  && (lado2 + lado3) > lado1){
    console.log("Los lados dados forman un triangulo");
}
    else {
    console.log("Los lados dados no forman un triangulo");
}
*/