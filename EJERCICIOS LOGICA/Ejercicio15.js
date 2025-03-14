alert ("Te mostraremos la conversion de segundos a hora y minutos ");

let segundos = parseInt (prompt(" Ingrese cantida de segundos "));
/*
let minutos = segundos / 60

let horas = minutos / 60*/


let horas = Math.floor (segundos / 3600) ;

let minutos = Math.floor (segundos / 60);       

alert (`La cantida de segundos registrada es ${segundos} 
    
    La convercion a HORAS es que ${segundos} segundos es igiual a ${horas} HORAS.
    
    la conversion a MINUTOS es que ${segundos} segundos es igual a ${minutos} MINUTOS.`) 




    // el codigo de abajo es para mostrar es para mostrar hora minutos con segundos hora normal//


/*
alert ("Te mostraremos la conversion de segundos a hora y minutos ");

let segundos = parseInt (prompt(" Ingrese cantida de segundos "));
    
let horas = Math.floor (segundos / 3600) ;

let minutos = Math.floor (segundos / 3600 / 60);   

let segundosRestantes = (segundos / 60);
    

 alert    (`La cantida de segundos registrada es ${segundos} 

    la conversion es que ${segundos} es igual a:
    
   ( ${horas} horas con ${minutos} minutos y ${segundosRestantes} segundos)`); */