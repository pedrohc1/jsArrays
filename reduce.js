//reduce usa os mesmo args do resto mas tambem com o acumulador no inicio(acumulador,valor,indice,array)
//reduce reduz um array a um unico elemento
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((acumulador, valor, indice, array) => {
  acumulador += valor;
  console.log(acumulador, valor);
  return acumulador;
}, 0); //o 0 é o valor inicial do acumulador)

//Retorne a pessoa mais velha

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Pedro", idade: 55 },
  { nome: "Eduardo", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});
console.log(maisVelha);
