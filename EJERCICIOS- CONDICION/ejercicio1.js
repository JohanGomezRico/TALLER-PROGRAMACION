let edad = parseInt(prompt("Ingrese su edad"));

if (edad >=18){
    alert (`tu edad es: ${edad} Años.
            (Eres amyor de edad`);
}

    else if ((edad <18) && (edad >=1)) {
        alert (`
            Tu edad es: ${edad} Años.
            Eres menor de edad`);
        }

            else {
                alert(`Ingresa una edad valida`);
            }
