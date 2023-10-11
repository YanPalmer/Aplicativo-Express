if ("geolocation" in navigator) {
    console.log("geolocation is available");
    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        document.getElementById('latitude').textContent = lat;
        document.getElementById('longitude').textContent = lon;
        var map = L.map('map').setView([lat, lon], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
    });
} else {
    console.log("geolocation IS NOT available");
};








/*
function enviarDados() {
    let wordInput = document.getElementById("word").value;
    let scoreInput = document.getElementById("score").value;
    // let data = {
    //     word: wordInput,
    //     score: scoreInput
    // };
    console.log(wordInput);
    console.log(scoreInput);

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
*/