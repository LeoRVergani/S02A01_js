/* 1. Crie uma variável que armazene uma temperatura em Fahrenheit, e realize a conversão para Celsius. A equação para realizar a conversão é: C = (F - 32) / 1.8 

2. Crie cinco variáveis que representam cinco notas de um estudante. Calcule a média ponderada, sabendo que o peso das notas são respectivamente: 3, 2, 1, 4 e 5.

3. Defina 3 variáveis com notas de 0 a 10. Calcule a média das três notas. Em seguida mostre no console o status do aluno:
Maior ou igual 7 = Aprovado
Entre 5 e 7 = Reforço
Menor que 5 = Reprovação
4. Simule a tabela do IMC com base no valor calculado pela formula: IMC = PESO / (ALTURA x ALTURA).
Indique o status com base no valor do IMC.

5. Defina uma variável idade e com um if/else determine se:
Criança: até 12 anos
Adolescente: 12 a 17 anos
Adulto: 18 anos ou mais

6. Crie duas variáveis: salário e quantidadeDependentes. Siga a seguinte regra para aplicar ajustes salariais: Caso não possua dependentes não realizar ajustes no salário, se houver entre 1 e 5 aumentar em 30% o salário. Caso seja acima de 5 aumentar em 40% o salário.

7. Crie uma variável para armazenar uma letra. Indique caso a letra seja vogal ou consoante (considerar todos os textos em minúsculo).

8. Crie uma variável ano e verifique se este ano é bissexto. Um ano é bissexto quando: 
Caso 1) É um número divisível por 4, mas não é divisível por 100. 
Caso 2) É um número divisível por 4, por 100 e por 400.

9. Crie uma variável idade. Caso seja uma idade inválida (negativa ou maior que 130) mostre uma mensagem de aviso.

10. Crie uma variável com o turno de aula: M-matutino ou V-Vespertino ou N- Noturno. Mostre a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso. */


// 1. Atividade 

let Fahrenheit = 100;

let Celsius = (Fahrenheit - 32) / 1.8;
console.log(`A temperatura de ${Fahrenheit}°F é ${Celsius.toFixed(2)}°C`);

// 2. Atividade

/* 2. Crie cinco variáveis que representam cinco notas de um estudante. Calcule a média ponderada, sabendo que o peso das notas são respectivamente: 3, 2, 1, 4 e 5.*/

let nota1 = 10;
let nota2 = 9;
let nota3 = 8;
let nota4 = 7;
let nota5 = 6;

let num1 = 3;
let num2 = 2;
let num3 = 1;
let num4 = 4;
let num5 = 5;

let media = (nota1 * num1 + nota2 * num2 + nota3 * num3 +  nota4 * num4 + nota5 * num5 ) / 5
console.log(`O resultado da média ponderada é: ${media.toFixed(2)}`)

/* 3. Defina 3 variáveis com notas de 0 a 10. Calcule a média das três notas. Em seguida mostre no console o status do aluno:
Maior ou igual 7 = Aprovado
Entre 5 e 7 = Reforço
Menor que 5 = Reprovação */

let notaA = 10;
let notaB = 8;
let notaC = 6.5;

let mediaNota = (notaA + notaB + notaC) / 3;

if (mediaNota >= 7) {
    console.log("Aprovado!");
} else if (mediaNota > 5) {
    console.log("Reforço!");
} else {
    console.log("Reprovação!")
}

// 4. Simule a tabela do IMC com base no valor calculado pela formula: IMC = PESO / (ALTURA x ALTURA).
// Indique o status com base no valor do IMC.

let peso = 103.1;
let altura = 1.80;

let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Abaixo do peso normal.");
} else if (imc > 18.5 && imc < 24.9) {
    console.log("Peso normal.");
} else if (imc >= 25 && imc < 29.9) {
    console.log("Excesso de peso.");
} else if (imc >= 30 && imc < 34.9) {
    console.log("Obesidade classe I.");
} else if (imc >= 35 && imc < 39.9) {
    console.log("Obesidade classe II.");
} else {
    console.log("Obesidade classe III.");
};

console.log(`Seu IMC é ${imc.toFixed(2)}`)

// 5. Defina uma variável idade e com um if/else determine se:
// Criança: até 12 anos
// Adolescente: 12 a 17 anos
// Adulto: 18 anos ou mais

let idade5 = 17;

if (idade5 >= 18) {
    console.log("Adulto.");
} else if (idade5 >= 12) {
    console.log("Adolescente.");
} else {
    console.log("Criança.")
}

// 6. Crie duas variáveis: salário e quantidadeDependentes. Siga a seguinte regra para aplicar ajustes salariais: Caso não possua dependentes não realizar ajustes no salário, se houver entre 1 e 5 aumentar em 30% o salário. Caso seja acima de 5 aumentar em 40% o salário.

let salario = 1200;
let qtdDependentes = 4;

if(qtdDependentes == 0) {
    console.log("Não é necessário ajuste no salário.");
} else if (qtdDependentes > 1 && qtdDependentes < 5) {
    salario *= 1.3;
    console.log("O salário atual será: R$" + salario);
} else if (qtdDependentes > 5) {
    salario *= 1.4;
    console.log("O salário atual será: R$" + salario);
} else {
    console.log("Nada a declarar.")
}

// 7. Crie uma variável para armazenar uma letra. Indique caso a letra seja vogal ou consoante (considerar todos os textos em minúsculo).

let letra = "Z"

if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
    console.log("É uma vogal.");
} else {
    console.log("É uma consoante.");
};

// 8. Crie uma variável ano e verifique se este ano é bissexto. Um ano é bissexto quando: 
// Caso 1) É um número divisível por 4, mas não é divisível por 100. 
// Caso 2) É um número divisível por 4, por 100 e por 400. 

let ano = 2000;

if ( (ano % == 0 && ano % 100 != 0) || (ano  % 4 == 0 && ano % == )) {

}