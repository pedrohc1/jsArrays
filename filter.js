//Filter -> Sempre retorna um array, com a mesma quantidade ou menos de elementos.

//Retorne os numeros maiores que 10

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter((valor) => valor > 10);
console.log(numerosFiltrados);

//Retorne as pessoas que tem o nome com 6 letras ou mais
//Retorne as pessdoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Pedro", idade: 55 },
  { nome: "Eduardo", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const nomeCincoLetras = pessoas.filter((obj) => obj.nome.length >= 6);
console.log(nomeCincoLetras);

const cinquentaAnos = pessoas.filter((obj) => obj.idade > 50);
console.log(cinquentaAnos);

const nomeComA = pessoas.filter((obj) => obj.nome.endsWith("a"));
console.log(nomeComA);
