// API com 3 features:
// 1 - Buscar
// 2 - Inserir
// 3 - Mostrar todos

// Lista de palavras importadas de um arquivo JSON
// FILE SYSTEM
var fs = require('fs');
// Espera os dados serem recebidos de 'words.json'
var data = fs.readFileSync('words.json');
// Converte os dados JSON para JS
var words = JSON.parse(data);
console.log(words);

// ??????????
const bodyParser = require("body-parser");



// Converte objeto JS para JSON
var novoJson = JSON.stringify(words);
// Converte objeto JSON para JS
var novoObjeto = JSON.parse(novoJson);

console.log("Server is starting");

const express = require("express");
const app = express();
var server = app.listen(3000, listening());

// Verifica se a porta está sendo ouvida
function listening() {
    console.log("Listening. . .");
}

// Busca a página HTML especificada
app.use(express.static("website"));

// Pega a aba de "adicionar" + palavra + pontuação ?(não lança erro ou exige um valor)
app.get("/add/:word/:score?", addWord);

function addWord(request, response) {
    // Pega os parâmetros inseridos
    // Ex: {
    //      "Meu Nome": valorQualquer,
    //      "Outro Nome: valorQualquer"
    //  }
    var data = request.params;
    // Pega o JSON e seleciona a palavra escolhida, Ex: data: "Yan Palmer"
    var word = data.word;
    var score = Number(data.score);
    if (!score) {
        var reply = {
            msg: "Score is required."
        }
        response.send(reply);
    } else {
        words[word] = score;

        // Transforma os dados JS em JSON para serem SALVOS
        var data = JSON.stringify(words, null, 2);
        fs.writeFile('words.json', data, finished);
        function finished(err) {
            console.log("All set.");
            var reply = {
                word: word,
                score: score,
                status: "Success",
                msg: "Thank you for your word."
            }
            response.send(reply);
        }



    }
    // response.send(word + score);
    // reply = "";
    // for (let i = 0; i < num; i++) {
    //     reply += "I love " + data.flower + " too";
    // }
    // response.send(reply);
    // var number = request.params
    // response.send("I love " + data.flower + " too");
}


// Pega a aba de "pegarTodos" e mostra na tela todo o objeto JSON
app.get("/all", sendAll);

function sendAll(request, response) {
    response.send(words);
    // console.log(novoJson, novoObjeto);
}


// Pega a aba de "procurar" e busca pelo item especificado
app.get("/search/:word/", searchWord)

function searchWord(request, response) {
    var word = request.params.word;
    var reply;
    // Verifica se dentro de "palavras" existe "Minha Palavra"
    if (words[word]) {
        reply = {
            status: "found",
            word: word
        }
        words[word] = word;
    } else {
        reply = {
            status: "not found",
            word: word
        }
    }
    response.send(reply);
}


// app.use(bodyParser.json());
app.post("/add", (req, res) => {
    const data = req.body; // Dados enviados pelo cliente

    // Lógica para inserir os dados no banco de dados
    // Aqui você pode usar uma biblioteca de banco de dados como o Mongoose (para MongoDB) ou o Sequelize (para bancos de dados SQL) para inserir os dados no banco.

    // Exemplo de como salvar os dados em um arquivo JSON (não recomendado para produção)
    const words = JSON.parse(fs.readFileSync("words.json"));
    words[data.word] = data.score;
    fs.writeFileSync("words.json", JSON.stringify(words, null, 2));

    // Responder ao cliente com uma confirmação
    res.json({ message: "Dados inseridos com sucesso!" });
});

// ... (outras rotas do servidor)

// BodyParser Estudar
app.use(bodyParser.json());
app.post("/add", (req, res) => {
    const data = req.body; // Dados enviados pelo cliente

    // Lógica para inserir os dados no banco de dados
    // Aqui você pode usar uma biblioteca de banco de dados como o Mongoose (para MongoDB) ou o Sequelize (para bancos de dados SQL) para inserir os dados no banco.

    // Exemplo de como salvar os dados em um arquivo JSON (não recomendado para produção)
    const words = JSON.parse(fs.readFileSync("words.json"));
    words[data.word] = data.score;
    fs.writeFileSync("words.json", JSON.stringify(words, null, 2));

    // Responder ao cliente com uma confirmação
    res.json({ message: "Dados inseridos com sucesso!" });
});


/*
// Responde no html com "Hello World" a solicitações para a URL raiz (/)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Escuta na porta especificada e printa na tela o console.log();
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
*/

/*  Ajuda de Emmanuel
// Para configurar uma porta como uma variável
const port = 3000;

app.get("/", (req, res) => {
    return res.status(401).json({
        message: "Erro ao encontrar a página!"
    })
})
app.listen(port, () => console.log(`Listening at port ${port}`));
*/