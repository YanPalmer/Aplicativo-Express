// API com 3 features:
// 1 - Buscar
// 2 - Inserir
// 3 - Mostrar todos

// Lista de palavras padrão
var words = {
    "rainbow": 5,
    "unicorn": 3,
    "doom": -3
}
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
    } else {
        words[word] = score;
        var reply = {
            msg: "Thank you for your word."
        }
    }
    response.send(reply);
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