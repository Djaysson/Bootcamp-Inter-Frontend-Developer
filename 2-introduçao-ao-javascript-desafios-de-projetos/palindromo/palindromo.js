//palavra para teste
// raiar, ama, ovo, radar

// solução 1
function palindromo(str) {
  if (!str) return;
  console.log(str === str.split("").reverse().join(""));
}
palindromo("ama");

// solução 2

function palindromo2(str) {
  if (!str) return;
  if (!str.length) return;

  for (var i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return console.log(false);
    }
  }
  return console.log(true);
}

palindromo2("acc");
