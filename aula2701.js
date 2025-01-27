// Comentários de única linha

/*
    Comentário de várias linhas
*/

// console.log("Hello, JavaScript!");

// Variáveis: armazenam dados do programa
let nome; // declaração
nome = "Leonardo"; // atribuição
console.log(nome); // exibe o valor dentro da variável
let idade = 36;
let altura = 1.78;

nome = "Som";
idade = 99;
altura = 1.90;

// Tipagem dinamica => o tipo das variáveis é definido de acordo com o valor.
let gols  = 3; // number
let posso_bola = 65.5; // number
let chanceDerrota = 0.44;

let parceiro;
console.log(parceiro);
parceiro = "KPMG";
console.log(parceiro);

let num1 = 5;
let num2 = 8;
let num3 = 4.5;

    // Operadores matemáticos => fazer cálculos
    // Soma (+)
    // Subtração (-)
    // Divisão (/)
    // Multiplicação (*)
    // Resto (%)
    // Exponenciação (**)

resultado = (num1 + num2) * num3 / 3;
console.log(resultado);

resultado = num1 ** 4; // 5 elevado a 4 = 5 * 5 * 5 * 5
console.log(resultado); 

// Incremento e Decremento
let a = 0;
a = a + 1;
a = a - 1;
console.log(a)

idade = 18;
idade += 5;
idade -= 18;
idade++;
idade--;
console.log(idade)

/*
    Operadores relacionais

    < Menor que
    > Maior que
    <= Menor ou igual
    >= Maior ou igual
    == Igual a
    != Diferente de
    === Igual a e mesmo tipo
 */

a = 3;
b = 5;

console.log(a > b);
console.log(a < b);
console.log(a == b);
console.log(a != b);


// Exemplo 1: Crie 2 variáveis (largura e altura). Em seguida, calcule
// a área do retângulo e exiba o resultado.

let base = 10; altura = 5;

let retanguloArea = base * altura;
console.log(retanguloArea);

// Exemplo 2: Crie 2 variáveis (nota1 e nota2). Em seguida, calcule a média
// e exiba o resultado.

let nota1 = 8;
let nota2 = 7;

let media = (nota1 + nota2) / 2

console.log("A média é: " + media);

// Exemplo 3: Crie uma variável (numero). Em seguida, exiba se é par (true) ou ímpar(false)

let numero = 3;
console.log(numero % 2 == 0);

// Expressões lógicas
// Orgem: ! && > ||
console.log(!true || false);
console.log(true || true && false);
console.log(!false && true || false);






