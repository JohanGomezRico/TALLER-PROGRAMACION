let numero1 = parseInt (prompt ("ingrese primer numero"));

let numero2 = parseInt (prompt ("ingrese segundo numero"));

if (numero1 > numero2) {
    alert (`
            el primer numero ingresados es: ${numero1}
            el segundo numero ingresado es: ${numero2}
            el numero mayor es: (${numero1})`);
         
}  
    else if (numero1 < numero2 ){
        alert (`
                el primer numero ingresados es: ${numero1}
                el segundo numero ingresado es: ${numero2}
                el numero mayor es: (${numero2})`);
}
         else{
            alert(`
                   el primer numero ingresados es: ${numero1}
                   el segundo numero ingresado es: ${numero2}
                   los numeros son iguales`);
         }
