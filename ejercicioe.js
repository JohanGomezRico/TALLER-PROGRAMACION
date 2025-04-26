class cuentaBancaria{

    #saldo

    constructor (saldo){
        this.#saldo = saldo;
    }

    saldoInicial (){
        return `tu saldo incial es de ${this.#saldo}`      
    }


    depositar(monto){
        if (monto > 0){  
        this.#saldo += (monto);
        console.log(`el monto de ${monto} de deposito correctamente`);
    } 
        else {
            console.log(`ingrese un valor valido`);
        }
    }


    retirar(monto){
        if (monto > 0  &&  monto <= this.#saldo){ 
        this.#saldo  -= monto,
        console.log( `el monto de ${monto} se retiro exitosamente`);
    }
        else{
            console.log.log(`ingrese un valor valido`);
    }
}
    
    verSaldo(){
        console.log(`tu saldo actual es de ${this.#saldo}`);
    }

}


const cuenta1 = new cuentaBancaria (1000);

console.log (cuenta1.saldoInicial());

cuenta1.depositar(200);
cuenta1.retirar(500);
cuenta1.verSaldo();