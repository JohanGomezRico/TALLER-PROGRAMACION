function esVocal(caracter){


    if (caracter === 'a'    ||   caracter === 'A'   ||
        caracter === 'e'    || caracter === 'E'     ||
        caracter === 'i'    || caracter === 'I'     ||
        caracter === 'o'    || caracter === 'O'     ||
        caracter === 'u'    || caracter === 'U'){

         return true;

} else {

     return false;
}
}

console.log(esVocal("a"));
console.log(esVocal("A"));
console.log(esVocal("z"));
console.log(esVocal("p"));
console.log(esVocal("u"));
console.log(esVocal("O"));
console.log(esVocal("i"));
console.log(esVocal("U"));

