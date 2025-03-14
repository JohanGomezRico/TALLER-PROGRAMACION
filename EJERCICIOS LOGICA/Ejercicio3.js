alert ("compra de electrodomestico");

let precioElect = parseFloat (prompt ("Ingrese precio de electrodomestico"));

const interes = 5/100

let meses = parseFloat (prompt (" ingresa cantida de meses"));

let interesMensual = (precioElect * interes ) // mutiplicamos el precio incial del electrodomestico por el interes ejem de 1000 son 50

let interesTotal = (interesMensual * meses)  // aqui multiplicamos el intres mensual por la cantidad de (cuotas= meses)

let valorCuotaMensual = (interesTotal + precioElect) / meses

let valorFinal = ( precioElect + interesTotal)

alert (`el valor del electrodomestido de contado es de $ ${precioElect}
    el valor de cada cuota es de $ ${valorCuotaMensual}
    el valor del elctrodomestico a credito es de $ ${valorFinal}`);
    





