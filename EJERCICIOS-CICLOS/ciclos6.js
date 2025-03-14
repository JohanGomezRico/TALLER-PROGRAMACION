/*
// function sumaPrimerosNNumeros(n) {
//     // Usamos la fórmula para calcular la suma
//     let suma = (n * (n + 1)) / 2;
//     return suma;
// }

// // Ejemplo de uso
// let n = 10;  // Puedes cambiar este valor para probar con diferentes números
// console.log(`La suma de los primeros ${n} números naturales es: ${sumaPrimerosNNumeros(n)}`);

let n = 10;
let control = 1;
let acumuladora = 0;
while (control <= n) {
    acumuladora = acumuladora + control;
    control++

function sumarNumeros(n){

let n = 10;
let control = 1;
let acumuladora = 0;
while (control <= n) {
    acumuladora = acumuladora + control;
    control++
    }
    return acumuladora;
    }
    let resultado = sumarNumeros(5)
    console.log(`valor acumulado ${resultado}`);
*/

let n = 10; 
if (n <= 0) {
    console.log("El número debe ser mayor que 0");
} else {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    console.log(`La suma de los primeros ${n} números naturales es:`, suma);
}