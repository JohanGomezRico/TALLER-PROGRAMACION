let respuesta;

while ( respuesta !== 'S' && respuesta !== 's') {
    respuesta = prompt (" ¿Desea salir? ( S  /  N?");

    if( respuesta !== 'S' && respuesta !== 's'){

         console.log("El program continua");
    }
   
}

console.log ("has decidido salir del programa");
            