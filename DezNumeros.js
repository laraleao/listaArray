// Programe um pequeno sistema onde o usuário digite 10 números (um de cada vez) e os mostre de forma ordenada, crescente.

let numeros = [];

for (i = 0; i < 10; i++) {
  numeros[i] = Number(prompt("Digite 10 números:"));

  numeros.sort(function (a, b) {
    return a - b;
  });
}
alert(numeros);
