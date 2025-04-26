class producto{

    #precio;

    constructor(precio){
        this.#precio = precio;
    }


getPrecio(){
    return this.#precio;

}

setPrecio(precio){
    if (precio > 0 ){
        this.#precio = precio;
    }
    else{
        console.log(`ingrese un precio valido`)

    }
}

}

const producto1 = new producto (1000);

producto1.setPrecio(2000);
console.log(producto1.getPrecio());