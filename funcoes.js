/*
    Função = unidade lógica do programa.

    function nome_da_funcao(parametros) {
        // bloco de código da função
    }
*/

// Exemplo 01: Transformar em função o exemplo da conversão de temperatura.
// Crie uma variável que armazene uma temperatura em Fahrenheit, 
// e realize a conversão para Celsius. 
// A equação para realizar a conversão é: C = (F - 32) / 1.8

// Exemplo 02: Transformar em função o código abaixo.
let mult = 1;

while(mult <= 10) {
    console.log("7 x", mult, "=", 7 * mult);
    mult++;
}

// Exemplo 02: Transformar em função o código abaixo.
function tabuada(n) {
    let mult = 1;

    while(mult <= 10) {
        console.log(`${n} x ${mult} = ${n * mult}`);
        mult++;
    }
}

// A mesma lógica será utilizada para diferentes valores
tabuada(2);
tabuada(5);
tabuada(7);

// Retorno = saída dos dados da função

function calcularMedia(n1, n2, n3) {
    let media = (n1 + n2 + n3) / 3;

    console.log("A média é:", media.toFixed(2));

    return media;
}

// Usamos uma variável para armazenar o valor
// que a funçõa produziu / retornou

let mediaAluno = calcularMedia(3.4, 8.6, 1.0);

// Exemplo 03: Crie uma função chamada calcularAreaRetangulo que recebe dois parâmetros (base e altura) e retorna a área de um retângulo.

function calcularAreaRetangulo(base, altura) {
    let medida = base * altura;

    return medida;
}

let resultado = calcularAreaRetangulo(200, 100);

console.log(resultado);

// Exemplo 04: Crie uma função chamada calculadora que recebe três parâmetros: dois números e uma operação (+, -, *, /). A função deve retornar o resultado da operação.

function somar(num1, num2) {
    let resultado = num1 + num2;
    
    console.log(`O resultado da soma é ${resultado}`)
}

somar(10, 34);

// Exemplo 05: Crie uma função chamada ehPar que recebe um número como parâmetro e retorna true se for par e false se for ímpar.

function ehPar(numPar) {
    let seraPar = numPar % 2 == 0

    console.log(seraPar);
};

ehPar(11);