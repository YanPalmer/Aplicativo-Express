console.log("Server is starting");

const express = require("express");
const app = express();
// const port = 3000; Para configurar uma porta como uma variável
const server = app.listen(3000, listening());

function listening() {
    console.log("Listening. . .");
}

app.use(express.static("website"));

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