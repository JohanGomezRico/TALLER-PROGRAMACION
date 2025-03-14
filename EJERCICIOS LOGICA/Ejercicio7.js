alert ("te mostraresmos el precio de un productro con un iva del 19 porciento");

let precioProducto = parseFloat(prompt("ingrese el valor del producto")); //1000

const iva = (19/100);  

let precioIvaproducto = (precioProducto * iva); // 190 

let precioFinal = (precioProducto + precioIvaproducto);  // 1000 + 190 = 1190 

alert (`el precio de tu producto es ${precioProducto} presos
    el precio de tu producto con un Iva del 19 porciento es ${precioFinal} pesos `);