class Cliente {
    #saldo; // Atributo privado saldo
  
    constructor(saldoInicial) {
      this.#saldo = saldoInicial;
    }
  
    // Método privado para calcular el descuento
    #calcularDescuento() {
      if (this.#saldo > 1000) {
        return 0.10; // 10% de descuento si el saldo es mayor a 1000
      } else if (this.#saldo > 500) {
        return 0.05; // 5% de descuento si el saldo es mayor a 500
      } else {
        return 0;    // No hay descuento si el saldo es menor o igual a 500
      }
    }
  
    // Método público para aplicar el descuento a un precio dado
    aplicarDescuento(precio) {
      const descuento = this.#calcularDescuento();
      const precioConDescuento = precio * (1 - descuento);
      return precioConDescuento;
    }
  
    // Método público para acceder al saldo (opcional, para ver el estado)
    obtenerSaldo() {
      return this.#saldo;
    }
  }
  
  // Ejemplo de uso:
  const cliente1 = new Cliente(1500);
  console.log(`Saldo del cliente 1: ${cliente1.obtenerSaldo()}`);
  const precioOriginal1 = 200;
  const precioConDescuento1 = cliente1.aplicarDescuento(precioOriginal1);
  console.log(`Precio original: ${precioOriginal1}`);
  console.log(`Precio con descuento: ${precioConDescuento1}`);