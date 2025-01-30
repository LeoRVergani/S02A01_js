// 1. Crie uma variável que armazena uma frase, e utilize as funcionalidades de string para remover uma palavra específica da frase e trocar por "###"

function ex01() {
    let frase = "Vamos embora??";

    console.log(frase.replace("embora", "#####"));
}

ex01();

// 2. Crie uma variável que armazena um email, o programa deve indicar se este email é do domínio soulcode.com

let email = "soulcode.com"

if (email == "soulcode.com") {
    console.log("Email válido.")
} else {
    console.log("Email não válido.")
}

// 3. Crie uma função para calcular e retorna o IMC, e outra função que recebe o valor de IMC e indica o status no terminal.

function ex03(peso, altura) {
    let imc = peso / altura ** 2;

    console.log("O IMC calculado é:", imc.toFixed(1))

    if (imc < 18.5) {
        console.log("Abaixo do peso normal.");
    } else if (imc <= 24.9 && imc >= 18.5) {
        console.log("Peso normal.");
    }else if (imc <= 29.9 && imc >= 25) {
        console.log("Excesso de peso.");
    }else if (imc <= 34.9 && imc >= 30) {
        console.log("Obesidade classe I");
    }else if (imc >= 35 && imc <= 39.9) {
        console.log("Obesidade classe II");
    }else if (imc >= 35 && imc < 39.9) {
        console.log("Obesidade classe II");
    } else {
        console.log("Obesidade classe III");
    }
}

ex03(103, 1.80);

// 4. Crie uma função que recebe um número (PARÂMETRO) de 0 a 1. E RETORNA em porcentagem: percentual(0.456) -> 45.6%



// 5. Crie uma função que recebe um número (PARÂMETRO). E RETORNA se ele é negativo (true ou false). Ex: ehNegativo(-2) ===> true

// 6. Crie uma função que conte até um número passado por parâmetro. Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000. OBS: Não possui retorno.

// 7. Crie uma função que recebe um nome e sobrenome. RETORNA o nome completo como resultado.

// 8. Crie uma função para calcular a área de um circulo = PI * R * R. Considere PI = 3.14.

// 9. Crie uma função que recebe a área de um circulo e mostra o nível:
// Entre 1 e 20 => Nível I
// Entre 21 e 40 => Nível II
// Qualquer outro diâmetro => Nível inválido
// 10. Escreva uma função que receba uma string e retorne a mesma string em letras minúsculas.

// 11. Escreva uma função que receba uma string e um caractere e retorne o número de ocorrências desse caractere na string.

// 12. Crie uma função chamada repetirTexto que recebe dois parâmetros: uma string e um número. A função deve retornar o texto repetido o número de vezes indicado.
// repetirTexto("Olá!", 3); -> "Olá!Olá!Olá!"

// Extra: Tente transformar alguns exercícios dos dias anteriores em função.