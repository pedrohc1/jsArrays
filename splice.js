//                5-       -4      -3         -2          -1
//                0        1        2          3          4
const nomes = ["Maria", "Joao", "Eduardo", "Gabriel", "Julia"];
//nomes.splice (indice,delete,elem1,elem2);
//pop
const removidos = nomes.splice(3, 1, "Pedro");
console.log(nomes, removidos);
//[ 'Maria', 'Joao', 'Eduardo', 'Pedro', 'Julia' ] [ 'Gabriel' ]
