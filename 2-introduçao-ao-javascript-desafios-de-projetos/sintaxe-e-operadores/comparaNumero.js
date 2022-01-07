const comparaNumero = (n1, n2) => {
  const frase1 = function1(n1, n2);
  const frase2 = function2(n1, n2);

  return `${frase1} ${frase2}`;
};

const function1 = (n1, n2) => {
  let frase = `Os número ${n1} e ${n2}`;
  let decisao = "não";

  if (n1 === n2) {
    decisao = "sim";
  }
  return `${frase} ${decisao} são iguais.`;
};

const function2 = (n1, n2) => {
  let soma = n1 + n2;
  let menorQueDez = "menor";
  let menorQueVinte = "menor";

  if (soma > 10) {
    menorQueDez = "maior";
  }
  if (soma > 20) {
    menorQueDez = "maior";
  }

  return `Sua soma é ${soma}, que é ${menorQueDez} que 10 e ${menorQueVinte} que 20.`;
};

console.log(comparaNumero(1, 2));
