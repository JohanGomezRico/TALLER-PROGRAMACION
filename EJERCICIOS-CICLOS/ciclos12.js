let numero  = parseInt (prompt("ingrese numero a sumar cuadrado"));

let sumaNumero = (numero*(numero+1)*(2*numero+1) / 6);

if (numero < 1){

    alert(`Error el numero ingresado no es valido`)
}
  else {
    alert (`el resultado de la suma de los cuadrados de ${numero} es ${sumaNumero}`);
  }
