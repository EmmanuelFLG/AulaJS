//Algoritmo 1
//constante numeros que guarda um array de inteiros 1 ate 5
const numeros = [1,2,3,4,5];
//funcão criada para calcular o dobro de um numero
let calcularDobro = (numero) => {return numero*2};

const numerosDobro = numeros.map(calcularDobro);
//console mostrando o resultado
console.log(numerosDobro);


//Nesse algoritmo é criado um array de numeros que é guardado na constante numeros, e é criado uma funcão para calcular o dobro dos numeros que estão nesse array.
