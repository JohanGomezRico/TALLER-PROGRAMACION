
      
let numero = parseInt(prompt("Ingrese un número entre 1 y 15:"));

if (numero < 1 || numero > 15) {
    alert ("El numero que ingresado esta fuera del rango.");

} else if (numero === 2 || numero === 3 || numero === 5 || numero === 7 || numero === 11 || numero === 13) {
    alert (`El número ${numero} es primo.`);

} else {
    alert (`El número ${numero} no es primo.`);
}

    
     
