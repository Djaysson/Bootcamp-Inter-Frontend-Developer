function validaArr(arr, num) {
  try {
    if (!arr && !num) throw new ReferenceError("Envie os parametros");
    if (typeof arr !== "object")
      throw new TypeError("O array precisa ser do tipo object");
    if (typeof num !== "number")
      throw new TypeError("O num precisa ser do tipo number");
    if (arr.length !== num) throw new RangeError("Tamanho do array invalido");
    return arr;
  } catch (err) {
    if (err instanceof ReferenceError) {
      console.log("Este erro é um ReferenceError");
      console.log(err.message);
    } else if (err instanceof TypeError) {
      console.log("Este erro é um TypeError");
      console.log(err.message);
    } else if (err instanceof RangeError) {
      console.log("Este erro é um RangeError");
      console.log(err.message);
    } else {
      console.log("Outro tipo de erro:" + err);
    }
  }
}

//teste 1
//console.log(validaArr());

//teste 2
//console.log(validaArr(3, 3));

//teste 3
//console.log(validaArr([], "d"));

//teste 4
//console.log(validaArr([], 3));

//teste 5
console.log(validaArr([1, 2, 3, 4], 4));
