function calcularPromedio() {
    let suma = 0;
    let contador = 0;
    
    while (true) {
        let numero = parseFloat(prompt("Introduce un número (0 para terminar):"));
        
        if (numero === 0) {
            break;
        }
        
        suma += numero;
        contador++;
    }
    
    if (contador > 0) {
        let promedio = suma / contador;
        alert("El promedio de los números introducidos es: " + promedio);
    } else {
        alert("No se introdujeron números para calcular el promedio.");
    }
}

calcularPromedio();
            
                
     
