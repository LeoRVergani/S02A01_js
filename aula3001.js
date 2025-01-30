// Arrays => armazenar múltiplos valores/itens/elementos
// [] -> array vazio
// [1, 2, 3, 4, 5] -> array preenchido

let figuras = ["coração", "estrelas", "ok"];
console.log(figuras);

// Acessando um elemento
console.log(figuras[0]);
console.log(figuras[3]);
console.log(figuras[500]);

// Alterando elementos
let notas = [6.5, 8.0, 9.0];
console.log("Antes:", notas);
notas[0] = 7.0; // substituir
notas[1] += 0.5; // acrescentar => nota[1] = nota[1] + 0.5
notas[2]++; // incrementar/decrementar => notas[2] = notas[2] + 1
console.log("Depois:", notas);

// Arrays => armazenar múltiplos valores/itens/elementos
// [] -> array vazio
// [1, 2, 3, 4, 5] -> array preenchido
// ["batata", "batata doce"] -> array com strings
// [1, "batata", 7.5, true] -> array com tipos diferentes

let alunos = ["Alberto", "Ana", "Beatriz", "Carlos"];

for(let i = 0; i < alunos.length; i++) {
    console.log(`O aluno ${i} é ${alunos[i]}`)
}

// For-of
// Percorre todos os elementos, e "item" assume cada um dos valores por vez
for(let item of alunos) {
    console.log(item);
}

let nums = [];

// Adicionar elemento ao final
console.log(nums);
nums.push(4);
console.log(nums);
nums.push(5);
console.log(nums);
nums.push(10, 200);
console.log(nums);

// Removendo elemento do final

nums.pop();
console.log(nums);
nums.pop();
console.log(nums);

// Join = juntar os elementos do array do array e formar uma string
let data = [ "27", "06", "1988"];
let dataTexto = data.join("/");

console.log(dataTexto);

let enderecoIp = [192, 168, 1, 1];
let enderecoIpTexto = enderecoIp.join(".");

console.log(enderecoIpTexto);

// Concat = unir arrays diversos
let p1 = ["Mouse", "Monitor", "Microfone"];
let p2 = ["Webcam", "Teclado"];

let p3 = p1.concat(p2); // A ordem muda o resultado final
console.log(p3);

// Reverse = alterar a ordem do array
let n = [1, 2, 3];
let nInverso = n.reverse();

console.log(n);

// Includes = verificar a existência de um elemento
let pessoas = ["joão", "pedro", "ana"];

if(pessoas.includes("josé")) {
    console.log("José está aqui!");
} else {
    console.log("José não está aqui!");
    pessoas.push("josé");
}

// Split = separar uma string e forma um array
let frase = "Eu vou estudar Banco de Dados";
let dataInicial = "29/01/2000";
let palavraEspecial = "BATATA";

let fraseArray = frase.split(" ");
console.log(fraseArray);

let dataArray = dataInicial.split("/");
console.log(dataArray);

let palavraArray = palavraEspecial.split(""); // Quebra a string letra por letra

// Inverter a string
console.log(palavraArray.reverse().join(""));

// Exemplo 01: Crie um array contendo os números de 1 a 10 e exiba-os no console com for-of e for comum.

// Exemplo 02: Crie um array com 7 números. Percorra e indique qual o maior número deles.

// Exemplo 03: Crie uma função que extrai os dígitos verificadores de um cpf. Ex: "056.985.990-23" -> "23". Retorne apenas os dois últimos dígitos.

// Exemplo 04: Crie uma função que recebe um array com os nomes dos alunos de uma turma, e outro array que recebe a lista de presença com os nomes. Retorne uma lista com quais alunos faltaram.

// Exemplo 05: Crie uma função que recebe um array de números e retorna um array com todos os valores elevados ao quadrado.

// Exemplo 06: Crie um array de nomes e exiba apenas os nomes das posições pares.

// Referência:
function percorrerArray(array) {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

percorrerArray([1, 2, 3]);

// Objetos = servem para estruturar dados
/*
    let variavel = {
        propriedade1: valor,
        propriedade2: valor,
        propriedade3: valor
    }
*/

// Declaração
// Propriedades (nome, idade, peso, altura)
let pessoa1 = { nome: "José", idade: 29, peso: 80, altura: 1.77 };

let pessoa2 = {
    nome: "Maria",
    idade: 27,
    peso: 66,
    altura: 1.60
}

// console.table(pessoa1);
// console.table(pessoa2);

// Acessando propriedades
// console.log(pessoa1.nome);
// console.log(pessoa2.idade);
// console.log(pessoa1["peso"]);
// console.log(pessoa2["altura"]);

// Adicionando propriedades
pessoa1.email = "jose@email.com";
console.log(pessoa1);

// Alterando valores
pessoa1.nome = "José Gomes";
pessoa1.idade++; // pessoa1.idade = pessoa1.idade + 1
console.log(pessoa1);

pessoa2["nome"] = "Maria Gomes";
pessoa2["email"] = "maria@email.com";
console.log(pessoa2);

// Removendo
delete pessoa1.idade;
console.log(pessoa1);

delete pessoa2["idade"];
console.log(pessoa2);

// Checar a existência de propriedade
if("nome" in pessoa1) {
    console.log("Propriedade nome presente");
}

// Objetos aninhados
let curriculo = {
    nome: "José Almir",
    cpf: "999.999.999-99",
    dataNascimento: "10/01/2000",
    endereco: { // objeto aninhado
        cidade: "Fortaleza",
        estado: "CE",
        cep: "99999-999",
        rua: "Rua X",
        numero: "271"
    },
    contato: { // objeto aninhado
        email: "jose@email.com",
        telefone: "(99) 9-9999-9999",
        fax: "+9 999 999 9999"
    },
    idiomas: ["português", "inglês", "espanhol", "russo"],
    formacao: [
        { nome: "Ensino Médio", periodo: "2000-2003" },
        { nome: "Técnico em Informática", periodo: "2003-2005"},
        { nome: "Bacharelado em Computação", periodo: "2010-2014"}
    ]
};

console.log(curriculo);
console.log(curriculo.endereco);
console.log(curriculo.contato);
console.log(curriculo.idiomas);

// Exemplo: Crie um objeto para representar um aluno.
    // nome
    // serie
    // materiais (Nome da materia, Professor)
    // notas

let aluno = {
    nome: "Gabriel Braga",
    serie: "7°",
    materias :[
        {nome: "HTML", professor: "Almir"},
        {nome: "Inglês", professor: "Paul"},
        {nome: "PHP", professor: "Juana"}
    ],
    notas: [7.5, 8.0, 9.0]
}

console.log("Percorrendo as materias");
aluno.materias.push({nome: "Javascript", professor: "João"});
aluno.materias.push({nome: "Java", professor: "Bartolomeu"});
aluno.notas.push(10);

for(let materia of aluno.materias) {
    console.log(materia.nome);
}