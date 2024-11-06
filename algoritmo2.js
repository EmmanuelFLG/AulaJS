//Algoritmo 2
//constante numbers que guarda um array de numeros
const numbers = [1,2,3,4,5];

//uso do map para mapear todos os numeros do array ja retornados com seu dobro, cada item vai ser armazenado temporariamente no x.
const output = numbers.map((x)=>{
  //Logo em seguida com os itens no x é feito o calculo para o dobro.
  return x * 2;  
});
//console para mostrar o resultado.
console.log(output);


//esse codigo faz a mesma coisa do algoritmo1 porem aqui o calculo do dobro é feito diretamente no proprio map.