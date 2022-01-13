const pessoaA = {
  nome: "Maria",
  idade: 27,
};
const pessoaB = {
  nome: "Carlos",
  idade: 30,
};

function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`;
}

console.log(calculaIdade.call(pessoaA, 28));
console.log(calculaIdade.apply(pessoaB, [31]));
