const alunos = [
  {
    nome: "Maria",
    nota: 4,
  },
  {
    nome: "Carlos",
    nota: 6,
  },
  {
    nome: "Marcelo",
    nota: 7,
  },
  {
    nome: "Brenda",
    nota: 9,
  },
  {
    nome: "Pedro",
    nota: 3,
  },
];

function verificandoAlunosAprovados(alunos, media) {
  let alunosAprovados = [];

  for (var i = 0; i < alunos.length; i++) {
    let { nota, nome } = alunos[i];

    if (nota >= media) {
      alunosAprovados.push(`${nome}: Aprovado`);
    } else if (nota < media) {
      alunosAprovados.push(`${nome}: Recuperação`);
    }
  }
  return alunosAprovados;
}
console.log(verificandoAlunosAprovados(alunos, 6));
