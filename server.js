console.log("Server is starting");

const express = require("express");
const app = express();
// Para configurar uma porta como uma variável
const port = 3000;

app.get("/", (req, res) => {
    return res.status(401).json({
        message: "Erro ao encontrar a página!"
    })
})









app.listen(port, () => console.log(`Listening at port ${port}`));
/*
// Busca
app.use(express.static("website"));
*/



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