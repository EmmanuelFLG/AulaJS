//Algoritmo 5
//constante users que guarda um array de objetos.
const users=[
  {firstName:"john", lastName:"colben", age:26},
  {firstName:"jimmy", lastName:"fred", age:75},
  {firstName:"sam", lastName:"boston", age:50},
  {firstName:"ronald", lastName:"bristh", age:26},   
];
//uso do map na constante users, onde esta sendo pego o firstName e o lastName e estão sendo concatenados
const output = users.map((x)=> x.firstName+" "+x.lastName);
//console para mostrar o resultado 
console.log(output);


//nesse algoritmo é criado um array de objetos contendo primeiro nome, ultimo nome , e idade, com o uso do map é percorrido todo o array e ele vai ficar temporariamente guardado no x com isso é pego apenas o primeiro nome e o ultimo nome e essse novo array contendo apenas essas 2 informações é guardado na constante output.