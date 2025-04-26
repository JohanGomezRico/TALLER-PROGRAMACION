class cuentaBancaria{

       #saldo = 0

    constructor(saldo){
        this.#saldo = saldo;
    }

    saldoInicial(){ 
      return `tu saldo incial es ${this.#saldo}`
    }

    depositar(monto){    
         if (monto > 0){ 
            this.#saldo  += monto; 
            console.log (`el dinero se deposito corractamente ${monto}`)
        }   else {   
            console.log (`inglese un valor valido `)
           }
         }

    retirar(monto){  
          if (monto > 0 && monto <= this.#saldo){ 
            this.#saldo -= monto; 
            console.log (`su retiro se realizo exitomente ${monto} `)
        } else{  
            console.log (`ingresa un valor valido`)
          }

        }
        verSaldo() {
            console.log(`Saldo actual: $${this.#saldo}`);
        }
}




const cuenta = new cuentaBancaria(500);
console.log(cuenta.saldoInicial());

cuenta.depositar(70);
cuenta.retirar(500);
cuenta.verSaldo()
