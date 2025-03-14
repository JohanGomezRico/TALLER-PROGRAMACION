alert ("Te mostraremos un numero aleatorio dentro de un rango determiando") 
alert ("el rango determinado sera desde el numero (1) hasta el numero que elijas")

let numero = parseInt (prompt ("Ingrese numero para sacar un rango "));

let numeroRango = Math.floor(Math.random() * numero) + 1

alert (`El numero aleatorio gerado entre el numero (1) y el numero (${numero}) es = ${numeroRango}`);