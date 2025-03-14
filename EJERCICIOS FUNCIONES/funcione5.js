function factorial(n) {                       // declaramos el nombre de la funcion, con un parametro (n) // 
    if (n === 0 || n === 1) {                 // declaramos que si n es igual a 0 o si n es igual a 1 retornara un resultado 1 //
        return 1;                             // retornamos el resultados  para que el resultado si se ingresa el numero 1 o 0 el resultado va a ser 1//
    } else {                                    
        let resultado = 1;                    // declaramos una variable resultado que sea igual a 1 //
    
        for (let i = 2; i <= n; i++) {        // el bucle for declaramos un variable let con nombre i que sera igual a 2//
            resultado *= i;                   // resultado que arriba equivale a 1 lo multiplicaremos por i y una vez se cumpla resultado valdo 2 //
                                              // volera al bucle for y a hora i valdra 3 si 3 es menor 0 = a 5 se multiplicara por resultado que ahora vale 2 (2 * 3 = 6) a hora resultado vale 6
        }                                     // el bucle se repite i vale 4 cuatro es menor o igual a 5 si, se ejecuta resultado, (6*4 = 24);
                                              // y asi sucesivamente hasta que i valga 5, cuando se ejecuta resultado, (24*5 = 120);                        
        return resultado;
    }
}

console.log (factorial (5));                  



