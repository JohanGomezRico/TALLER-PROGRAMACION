alert ( "Te mostraremos el valor de una cantidad con un porcentaje deseado deseado " )

let valorCantida = parseFloat (prompt (" Igrese cantidad"));    //1000

let porcentaje = parseFloat ( prompt ("Ingrese valor porcentaje")); //10

let valorporcentaje = (valorCantida * porcentaje / 100);   //(1000 * 10/100)    = 100

let valorFinal = (valorCantida + valorporcentaje);  //(1000 + 100) = 1100

alert (`El valor de la cantida es $ ${valorCantida} pesos
    el porcentaje a aplicado a esa cantidad es de ${porcentaje} porciento
    el valor final de la cantidad es ${valorFinal} pesos`);

