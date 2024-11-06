//Algoritmo 3
//constante numbers que guarda um array de numeros 
const numbers = [1,2,3,4,5];
//funcão que retorna o resto da divisão do numero por 2.
const isOdd = (x) =>  {return x % 2;}
//uso do filter vai retornar um novo array contendo apenas os numeros (numbers) impares.
const output = numbers.filter(isOdd);
//console mostrando o resultado
console.log(output);

//aqui temos um algoritmo de filtrar apenas os numeros impares pois o resultado 0 no filter sempre vai retornar false e como o resultado do resto da divisão de numeros impares por 2 é 1 o filter vai retornar apenas os valores impares.