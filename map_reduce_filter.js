//retorne a soma do dobro de todos os pares
// -> Filtrar os pares
// -> Dobrar os valores 
// -> Reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const filtrarNumeros = numeros.filter((numero)=>{
if(numero % 2 === 0) return numero})
console.log(filtrarNumeros)

const dobrarValor = filtrarNumeros.map((numero)=>numero *2)
console.log(dobrarValor)

const somarNumeros = dobrarValor.reduce((ac,valor)=> ac + valor)
console.log(somarNumeros)
