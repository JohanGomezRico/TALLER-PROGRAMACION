
function calcularPromedio() {
    let suma = 0;

    for (let i = 1; i <= 10; i++) {
        let numero = parseFloat(prompt(`Introduce el número ${i}:`)); 
        suma += numero; 
    }

    let promedio = suma / 10;
    alert(`El promedio de los 10 números es: ${promedio}`);
}

calcularPromedio(10);