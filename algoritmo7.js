//Algoritmo 7
//constante estudantes que guarda um array de objetos
let estudantes =[
 {nome:"João", idade:15},
 {nome:"Maria", idade:20},
 {nome:"Felipe", idade:22},
 {nome:"Pedro", idade:12},
 {nome:"Joana", idade:18},
];

//uso do filter no array estudantes, onde é pego a idade e feita uma comparação se tem 18 anos ou mais.
const details = estudantes.filter((x)=> x.idade >= 18);
//aqui no console em vez de mostrar as idades maiores ou igual a 18 vai mostrar a quantidade por causa do .length que retorna o tamanho do array
console.log(details.length);

//nesse algoritmo a idade dos estudantes é acessada e filtrada atraves do filter e ele filtra as idades para criar um novo array apenas com estudantes que tenham 18 anos ou mais, porem no console é passado o .length que vai retornar apenas o tamanho do array criado anteriormente