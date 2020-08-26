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
alert(`A soma da multiplicação dos menores númerios pelo maior é ${soma}`);

// corrigido em aula

// let numeros = [];
// let cont = 0;

// while (cont <= 5) {
//   numeros.push(Number(prompt("Digite 5 números:")));
//   cont++;
// }

// function comparaNumeros(a, b) {
//   return a - b;
// }
// numeros.sort(comparaNumeros);

// let maior = numeros.pop();

// for(i = 0; i < numeros.length; i++)){
//   soma += numeros[i] * maior;
// }
// alert(`A soma da multiplicação dos menores númerios pelo maior é ${soma}`);
