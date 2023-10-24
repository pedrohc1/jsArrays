// Altera valores do array
// sempre vai ter o mesmo numero de indices do array original pois ele modifica todos de um vez

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numeroEmDobro = numeros.map((valor) => valor * 2);
console.log(numeroEmDobro);

//Para cada elemento retorne apenas uma string com o nome da pessoa
//Reomova apenas a chave "nome" do objeto
//Adicione uma chame id em cada objeto

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Pedro", idade: 55 },
  { nome: "Eduardo", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const nomes = pessoas.map((obj) => {
  return obj.nome;
});
console.log(nomes);

const idades = pessoas.map((obj) => {
  return obj.idade;
});
console.log(idades);

/*const comIds = pessoas.map((obj, indice) => {
  obj.id = indice + 1;
  return obj;
});
console.log(comIds);
O Map nao altera o objeto original mas e possivel pegando um novo obj
*/

const comIds = pessoas.map((obj, indice) => {
  const newObj = { ...obj };
  newObj.id = indice + 1;
  return newObj;
});

console.log(comIds);
console.log(pessoas);
