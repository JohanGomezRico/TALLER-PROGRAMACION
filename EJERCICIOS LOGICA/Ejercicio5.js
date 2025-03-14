alert ("hola aqui te mostraresmo el area y perimetro de un circulo utilizando su  radio  ")

let radio = parseFloat (prompt (" ingrese el radio del circulo"));

let pi = 3.1416;

let area = (pi * radio ** 2 );

let perimetro =  ( 2 * pi * radio);

alert (`el radio del circulo es ${radio}
    El area del circulo es ${area}
    el permetro del circulo es ${perimetro}`);
