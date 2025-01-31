import os from "os";
import fs from "fs";

// OS = módulo com info do sistema
console.log("Plataforma:", os.platform());
console.log("Arquitetura:", os.arch());
console.log("Total de Memória:", os.totalmem());

// FS - Módulo que interage com pastas e arquivos

// write - escreve o arquivo do zero
fs.writeFileSync("dados.txt", "Hello, World");

// append = adicionar texto ao arquivo

fs.appendFileSync("dados.txt", "\nHey!");
fs.appendFileSync("dados.txt", "\nHey!");

// read = Ler um arquivo existente
let dados = fs.readFileSync("dados.txt");
console.log(dados.toString());

import cpf from "cpf";

console.log(cpf.generate());
console.log(cpf.format("99900099900"));

