// Em cidades menores, o alistamento para o exército
// acontece esporadicamente ao longo dos anos. Criar um
// programa no qual que pergunte ao usuário se houve
// alistamento dos anos 2000 a 2009, uma pergunta para
// cada ano. Se houve alistamento deve ser digitado “S” e se não houve alistamento “N”. Após digitar tudo, deve-se mostrar na tela o último ano que houve alistamento. Caso não tenha ocorrido alistamento, mostrar "Não houve alistamentos nos últimos 10 anos".

let anosAlistamento = [
  2000,
  2001,
  2002,
  2003,
  2004,
  2005,
  2006,
  2007,
  2008,
  2009,
];

var ultimoAlistamento = 0;

// do 2001 ao 2009
for (i = 0; i < anosAlistamento.length; i++) {
  // salvar a resposta do prompt e seguir do 2000 ao 2009

  //  relatar as respostas
  var resposta = prompt(`Houve alistamento no ano ${anosAlistamento[i]}`);

  //   para sabermos a respeito do último alistamento
  if (resposta == "S") {
    ultimoAlistamento = anosAlistamento[i];
  }
}
if (ultimoAlistamento == 0) {
  alert("Não houve alistamentos nos últimos 10 anos.");
} else {
  alert(`O último alistamento foi em ${ultimoAlistamento}`);
}
