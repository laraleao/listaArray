// Fazer um programa no qual o usuário deve digitar as
// três cores primárias (amarelo, vermelho, azul) e armazenar
// em um vetor. Solicitar três vezes “Digite uma cor primária:
// ”. Em seguida deve digitar as três cores secundárias
// (laranja, verde, violeta) e armazenar em outro vetor.
// Solicitar três vezes “Digite uma cor secundária: ”. Um novo
// vetor deve ser criado com cores primárias + secundárias
// (amarelo, vermelho, azul, laranja, verde, violeta). No início dessa lista deve-se adicionar preto e no final branco.
// Perguntar “Adicionar no início da lista: ” e “Adicionar ao
// final da lista: ”. Mostrar na tela a sequência completa, incluindo preto e branco.

let primarias = [];
let secundarias = [];

for (i = 0; i < 3; i++) {
  primarias.push(prompt("Digite uma cor primária:"));
}
for (i = 0; i < 3; i++) {
  secundarias.push(prompt("Digite uma cor secundária:"));
}

let resposta = primarias.concat(secundarias);

resposta.unshift(prompt("Adicione uma cor no início da lista:"));

resposta.push(prompt("Adicione uma cor no final da lista:"));

alert(`A lista completa de cores é ${resposta}`);

// corrigido em aula

// let primarias = [];
// let secundarias = [];

// for (i = 0; i < 3; i++) {
//   primarias.push(prompt("Digite uma cor secundária:"));
// }

// for (j = 0; j < 3; j++) {
//   secundarias.push(prompt("Digite uma cor secundária:"));
// }

// let coresJuntas = primarias.concat(secundarias);

// coresJuntas.unshift(prompt("Adicione uma cor no início da lista:"));

// coresJuntas.push(prompt("Adicione uma cor no final da lista:"));

// alert(`A lista de cores é ${coresJuntas}`);
