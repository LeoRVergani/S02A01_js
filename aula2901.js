// String = Cadeia de caracteres.

let nome = "Almir";
let sobrenome = "Batata";

// Backticks

let nomeCompleto = `${nome} ${sobrenome}`;
console.log(nomeCompleto);

let comida = "Batata Assada";
console.log(comida[0]);

// Tamanho

console.log(comida.length);

// For 

for(let i = 0; i <= comida.length; i++) {
    console.log(comida[i]);
}

console.log("=======================")

for(let i = comida.length - 1; i >= 0; i--) {
    console.log(comida[i]);
}

let texto = "Leonardo";
let textoInvertido = "";

for(let i = texto.length - 1; i >= 0; i--) {
    textoInvertido = textoInvertido + texto[i];
}

console.log(textoInvertido)

// Funções de string

let palavra = "Javascript";
let palavraM = palavra.toLocaleUpperCase();

console.log(palavraM)

// Replace 

let palavra2 = "Desenvolvedor JavaScript";

let palavraAlterada = palavra2.replace("JavaScript", "Replace");
console.log(palavraAlterada);

// includes

let frase = "Eu comi arroz, feijão, batata e carne.";


if(frase.includes("batata")){
    console.log("Existe a palavra batata na frase.")
} else {
    console.log("Não existe a palavra batata na frase.")
}

// Trim

let texto2 = "       Olá, tudo bem?          ";
let textoRemovidoEspacos = texto2.trim();

console.log(textoRemovidoEspacos);

// Endswith / Startswith

let arquivo = "musica.mp3";

console.log(arquivo.endsWith("mp3")); // Verifica o final se existe MP3
console.log(arquivo.startsWith("Banana")); // Verifica o inicio se existe Banana, deu false porque não existe.

// Exemplo 02: Crie uma variável com a seguinte frase: Eu jogo LOL.
// Verifique se existe a palavra 'LOL' e remova da frase.

let lol = "Eu jogo LOL";
console.log(lol.endsWith("LOL"));
let lolSemLol = (lol.replace("LOL", ""));
console.log(lolSemLol)

// Exemplo 03: Crie uma variável com uma senha. Verifique se existe pelo menos algum
// dos seguintes caracteres especiais: !, @, #, $, %. Caso não exista, a senha é inválida.

let senha = "1234567@@##"

if(senha.includes("!") || senha.includes("@") || senha.includes("#") || senha.includes("$") || senha.includes("%") ) {
    console.log("Senha válida");
} else {
    console.log("Senha inválida")
}
