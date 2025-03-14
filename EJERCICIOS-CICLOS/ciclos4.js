function promedio (){

    let suma = 0

    for(let i = 1; i<=3; i++){
        let nota= parseInt(prompt("ingrese nota" + i));

           suma += nota;
}
 let resultado = suma / 3;

 return resultado;
}
 let resultado = promedio ();

 alert (`el promedio de las 3 notas es: ${resultado}`);


/*
    let promedio = (a + b + c) / 3;

    console.log(`El promedio de su nota es ${promedio}`)
}
promedio(2,2,2);
promedio(1,5,6);
promedio(6,5,3);

*/