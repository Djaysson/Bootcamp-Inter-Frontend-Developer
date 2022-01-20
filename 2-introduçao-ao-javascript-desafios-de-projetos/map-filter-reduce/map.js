const car1 = {
  price: 100,
};
const car2 = {
  price: 200,
};

//Usando o parâmetro this
function mapComThis() {
  const arr = [4, 5, 6, 7];
  console.log("Usando o parâmetro this ");
  const newArr = arr.map(function (i) {
    return i * this.price;
  }, car1);

  return newArr;
}

console.log(mapComThis());

//Nao usando o parâmetro this

function mapSemThis(arr) {
  const newArray = arr.map((i) => i * 2);

  console.log("Sem usar o parâmetros this");
  return newArray;
}

const arr = [4, 5, 6, 7];
console.log(mapSemThis(arr));
