// super class
class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
  }

  //getter e o setter de saldo
  set saldo(valor) {
    this._saldo = valor;
  }

  get saldo() {
    return this._saldo;
  }

  //métodos sacar e depositar
  sacar(valor) {
    if (valor > this._saldo) {
      return console.log("Saque negado");
    }

    this._saldo = this._saldo - valor;
    return this._saldo;
  }

  depositar(valor) {
    this._saldo = this._saldo + valor;
    return this._saldo;
  }
}
//class filha
class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero);
    this.tipo = "corrente";
    this._cartaoCredito = cartaoCredito;
  }

  //getter e o setter de cartaoCredito
  set cartaoCredito(valor) {
    this._cartaoCredito = valor;
  }

  get cartaoCredito() {
    return this._cartaoCredito;
  }
}

//class filha
class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "poupança";
  }
}

//class filha
class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "universitário";
  }

  //método de sacar valores menores que 500 reais
  sacar(valor) {
    if (valor > 500) {
      return "Operação negada.";
    }

    this._saldo = this._saldo - valor;
    return this._saldo;
  }
}

////////////////////////////////

//chamando as class

//const minhaConta = new ContaCorrente(1, 275, true);
//const contaPoup = new ContaPoupanca(2, 657);
const contaUni = new ContaUniversitaria(3, 455);

///////////////////////////////

//testes da minhaConta

//console.log(contaUni.tipo);
// console.log(minhaConta.saldo);
// console.log(minhaConta.depositar(100));

// console.log(minhaConta.saldo);

// console.log(minhaConta.sacar(50));
// console.log(minhaConta.saldo);

///////////////////////////////

//testes da contaPoup

// console.log(contaPoup.tipo);
// console.log(contaPoup.saldo);
// console.log(contaPoup.depositar(2000));

// console.log(contaPoup.saldo);

// console.log(contaPoup.sacar(570));
// console.log(contaPoup.saldo);

///////////////////////////////

//testes da contaUni

console.log(contaUni.tipo);
console.log(contaUni.saldo);
console.log(contaUni.depositar(1000));

console.log(contaUni.saldo);

console.log(contaUni.sacar(550));
console.log(contaUni.saldo);
