const express = require("express");
const app = express();

const server = app.listen(3000, () => console.log("Servidor 2 funcionando"));

const listaNomes = {};

app.get("/nomes/:nome/:idade", criarNome);

function criarNome(request, response) {
    const data = request.params;
    const nome = data.nome;
    const idade = data.idade;
    response.send(`Nome: ${nome} cadastrado com a idade: ${idade}.`);
}