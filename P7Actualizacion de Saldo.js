let cuentaBancaria = {
    titular: 'Byron Cardona',
    saldo: 1000
  };
  
  function actualizarSaldo(monto) {
    this.saldo += monto;
  }
  
  let arrayMonto = [500]; 
  
  actualizarSaldo.apply(cuentaBancaria, arrayMonto);
  
  console.log(`El saldo actual de la cuenta de ${cuentaBancaria.titular} es: ${cuentaBancaria.saldo}`);
  