alert ("Te mostraremos el valor de un producto con un descuento del 10 porciento")

let valorProducto = parseFloat (prompt( "Ingrese valor del producto"));

const descuento = 10/100

let valorDescuento = valorProducto * descuento

let valorFinal = valorProducto - valorDescuento

alert (`El valor del producto es $ ${valorProducto} pesos
    Con un descuento del 10 pociento es valor tu producto es de $ ${valorFinal} pesos `);

