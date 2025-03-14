let producto = prompt("ingresa un prodcuto");

if ((producto === "lentejas") || (producto === "arroz")){
    alert (`El producto ${producto} no paga IVA`);

}

    else if ((producto === "vino") || (producto === "crema")) {
        alert (`El producto ${producto} si paga IVA `);

    }
        else {
            alert(`Ingrese prosducto valido `);
        }