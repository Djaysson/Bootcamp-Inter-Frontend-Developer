//Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

function substituiPares(arr) {
  if (!arr) return console.log(-1);
  if (!arr.length) return console.log(-1);

  console.log(`Array original \n [${arr}] \n`);

  const diferenteZero = (num) => num !== 0;
  const numPar = (num) => num % 2 === 0;

  for (let i = 0; i < arr.length; i++) {
    if (numPar(arr[i]) && diferenteZero(arr[i])) {
      console.log(`Modificando ${arr[i]} por 0`);
      arr[i] = 0;
    } else if (!diferenteZero(arr[i])) {
      console.log("Você já vale 0!");
    }
  }

  return `\n Array modificada \n [${arr}]`;
}

console.log(substituiPares([1, 3, 4, 6, 80, 33, 23, 90]));
