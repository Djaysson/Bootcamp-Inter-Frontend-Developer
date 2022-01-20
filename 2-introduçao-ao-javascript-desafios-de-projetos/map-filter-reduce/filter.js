//Filtre e retorne todos os números pares de um array.

function filtraNumerosPares(arr) {
  const filter = arr.filter((i) => i % 2 === 0);

  return filter;
}

const myArr = [1, 2, 3, 4, 5, 6, 7];
console.log(filtraNumerosPares(myArr));
