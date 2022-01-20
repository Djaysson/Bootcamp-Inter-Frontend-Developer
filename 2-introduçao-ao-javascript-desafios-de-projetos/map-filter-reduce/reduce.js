//Some todos os números de um array
function somaNumeros(arr) {
  if (!arr || !arr.length) return "Insira os valores na array";
  const newArr = arr.reduce((prev = 0, current) => prev + current);
  return `O valor da soma dos numeros da array é: ${newArr}`;
}

const array = [4, 4];
console.log(somaNumeros(array));

// Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.

function calculaSaldo(saldo, itens) {
  if (!saldo || !itens || !itens.length)
    return "Envie todos os parâmetros da função";

  const saldoFinal = itens.reduce((prev, item) => prev - item.price, saldo);
  return `O saldo final será de $${saldoFinal} dólares`;
}

const carList = [
  {
    nome: "HB20",
    price: 200,
  },
  {
    nome: "Fiat uno",
    price: 300,
  },
  {
    nome: "Fiat Argo",
    price: 600,
  },
];

const saldo = 4000;

console.log(calculaSaldo(saldo, carList));
