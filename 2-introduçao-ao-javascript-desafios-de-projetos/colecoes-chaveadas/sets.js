const myArr = [30, 30, 40, 5, 223, 2049, 3034, 5];

function uniqueValues(arr) {
  let newArr = new Set(arr);
  return [...newArr];
}

console.log(uniqueValues(myArr));
