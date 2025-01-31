import cpf from "cpf";
import express from "express";

// Cria uma instância da aplicação express
const app = express();

// Rota raiz
// O servidor Express recebe uma requisição e responde a essa requisição com uma página HTML
app.get("/", function (requisicao, resposta) {
    resposta.send(`
        <h1>Bem-vindo(a) ao nosso servidor!</h1>
        <ul>
            <li><a href="/gerar-cpf">Gerar CPF</a></li>
            <li><a href="/ajuda">Ajuda</a></li>
        </ul>
    `);
});

app.get("/gerar-cpf", function (requisicao, resposta) {
    let cpfGerado = cpf.generate();

    resposta.send(`
            <h1>Gerador de CPF</h1>
            <p>CPF: ${cpfGerado}</p>
            <a href="/gerar-cpf">Gerar novo</a>
            <a href="/">Voltar</a>
    `);
});

app.get("/ajuda", function (requisicao, resposta) {
    resposta.send(`
            <h1>Gerador de CPF</h1>
            <p>Sua ajuda chegara em breve.</p>
            <a href="/gerar-cpf">Gerar novo</a>
            <a href="/">Voltar</a>
    `);
});

// Nova rota:

app.get("/home", function(requisicao, resposta){
    resposta.send(`
        <body style="background:black">
            <h1 style="color: white">O que esperava?</h1>
            <p style="color: white">Aqui você não vai encontrar nada, volte de onde veio.</p>
            <a href="/">Voltar</a>
        </body>

        `);
});

app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:3000`);
});