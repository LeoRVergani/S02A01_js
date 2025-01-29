let numero = 0;

while(numero <= 10) {
    console.log(numero);
    numero++;
};

console.log(`Resultado da soma: ${numero}`);

// Teste 1: não executa se for FALSE

let x = 5;

while (x <= 5) {
    console.log(x);
    x++;
};

// Teste 2: 

let y = 100;

while (y > 10) {
    console.log(y);
    y--;
};

// Teste 3:

let w = -50;

while ( w < 0) {
    console.log(w);
    w++;
};

// Exemplo 1: Contagem regressiva
// Crie um programa que mostra a contagem do 10 até o 1 e ao final exiba
// a mensagem "Fogo!".

let contagemRegressiva = 10;

while (contagemRegressiva > 0) {
    console.log(contagemRegressiva);
    contagemRegressiva--;
};

console.log("Fogo!");

// Exemplo 2: Soma de números até 100
// Crie um programa que soma os números de 1 até 100 e exibe o resultado ao final.

let some = 0;
let resultado = 0;

while (some <= 10) {
    console.log(some);
    resultado++;
    some++;   
    console.log(resultado);
}

// Exemplo 3: Contar até um limite
// Crie uma variavel chamada limite com um valor qualquer. Use o while para contar
// de 1 até esse valor e mostrar cada número.

let limite = 0;

while (limite <= 5) {
    console.log(limite);
    limite++;
}

// FOR

for(let i = 1; i <= 20; i++) {
    console.log(i)
}

let limite2 = 30;

for( let i = 1; i <= limite2; i++) {
    console.log(i);
};

// 1. Use um laço while para imprimir na tela todos os números pares de 2 a 10.

let cont = 2;

while(cont <= 10) {
    console.log(cont);
    cont = cont + 2;
}

// 2. Use um laço while para imprimir na tela a tabuada do 7 (multiplicando de 1 a 10).
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// ...
// 7 x 10 = 70

// 3. Use um laço while para somar de 1 até 999, apenas somando os números ímpares. Utilize um if para verificar se o número é ímpar.

// 4. Crie um programa que conta quantos números entre 1 e 1000 são divisíveis por 9, mostre o número e ao final exiba o total de números divisíveis por 9.

// 5. Faça a tabuada completa utilizando o loop for.

// 6. Use um laço for para imprimir na tela a série de Fibonacci até o décimo termo. A sequência de Fibonacci é formada pela sequência: 0,1,1,2,3,5,8,13,21,34,55.

// 7. Escreva um programa que use um laço for para imprimir na tela os números de 10 a 1 (em ordem decrescente).

// 8. Faça um programa que calcule o fatorial de um número inteiro. Ex.: 5! = 5 x 4 x 3 x 2 x 1 = 120.

// 9. Crie um programa que exiba todos os números divisíveis por 7 de 1 a 100 usando um loop for e uma estrutura condicional if para verificar se cada número é divisível por 7.

// 10. Mostre a soma do 50 até o número 100 usando loop for.

// 11. Mostre a seguinte figura com utilização de laços:
// *
// **
// ***
// ****
// *****