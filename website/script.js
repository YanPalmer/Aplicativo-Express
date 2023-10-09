function enviarDados() {
    let wordInput = document.getElementById("word").value;
    let scoreInput = document.getElementById("score").value;
    let data = {
        word: wordInput,
        score: scoreInput
    };
    console.log(word);
    console.log(score);

    fetch("/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(responseData => {
        console.log(responseData);
        // Faça algo com a resposta do servidor, se necessário
    })
    .catch(error => {
        console.error("Erro ao enviar dados:", error);
    });
}