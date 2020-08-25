// Faça um programa que solicite ao usuário digitar 5
// números e mostre a soma da multiplicação dos números
// pelo maior número digitado. Exemplo: pegar os 4 números digitados que não são o maior e multiplicá-los
// individualmente pelo maior. Mostrar a soma das multiplicações.

let numeros = [];

for (i = 0; i < 5; i++) {
  numeros[i] = Number(prompt("Digite 5 números:"));

  numeros.sort((a, b) => a - b);
}

let numeroMaior = numeros[4];
alert(numeros);

let soma = 0;

for (j = 0; j < 4; j++) {
  var multiplicacao = numeros[j] * numeroMaior;
  soma += multiplicacao;
}
alert(soma);
