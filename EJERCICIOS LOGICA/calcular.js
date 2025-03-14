let valorInicial = parseFloat( prompt ("ingrese valor del producto")) // precio 1000

let meses = parseFloat (prompt ("ingrese cantida de cuotas")) // 4

const interes = (5/100 )

let valorcuota = valorInicial * interes // 1000 * 0.05 = 50

let valorTotalInteres = valorcuota * meses // 50 * 4 = 200

let valorcuotaMes = (valorInicial + valorTotalInteres) / meses // (1000 + 200) / 4 = 1050

let valorFinalProducto = (valorInicial  + valorTotalInteres)

alert (`el percio del producto de contado es ${valorInicial}
    el valor de una cuota es ${valorcuotaMes}
    el precio final de tu producto con un interes del 5 porciento es ${valorFinalProducto}`)














