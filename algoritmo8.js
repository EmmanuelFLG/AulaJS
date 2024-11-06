//Algoritmo 8
//constante users que guarda um array de objetos 
const users=[
  {firstName:"john", lastName:"colben", age:26},
  {firstName:"jimmy", lastName:"fred", age:75},
  {firstName:"sam", lastName:"boston", age:50},
  {firstName:"ronald", lastName:"bristh", age:26},  
];
//com o uso do filter é filtrado apenas os usuarios que tem menos de 30 anos e logo em seguida é usado o map e como foi usado diretamente apos o filter o x ainda esta guardando o resultado do filter, o map vai pegar apenas o primeiro nome.
const output=users.filter((x)=>x.age<30).map((x)=>x.firstName);
//console para mostrar o resultado
console.log(output);

//nesse algoritmo é filtrado os ususarios com idade abaixo de 30 anos e logo em seguida é usado o map para mostrar apenas o primeiro nome desses ususarios