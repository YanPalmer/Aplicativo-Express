if ("geolocation" in navigator) {
    console.log("geolocation is available");
    navigator.geolocation.getCurrentPosition(async position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        document.getElementById('latitude').textContent = lat;
        document.getElementById('longitude').textContent = lon;
        var map = L.map('map').setView([lat, lon], 15);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        var marker = L.marker([lat, lon]).addTo(map).bindPopup('<b>Hello world!</b><br />I am a popup.').openPopup();

        var circle = L.circle([lat, lon], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 100
        }).addTo(map).bindPopup("I am a circle.");

        var polygon = L.polygon([
            [-8.276996, -35.967307],
            [-8.279247, -35.968058],
            [-8.278597, -35.969791],
            [-8.277355, -35.969753],
            [-8.276554, -35.967854]
        ]).addTo(map)
            // .bindPopup("I am a polygon.")
            .bindPopup("It's where i work")
            ;

        const popup = L.popup()
            .setLatLng([lat, lon])
            .setContent("I am a standalone popup.")
            .openOn(map);

        function onMapClick(e) {
            // console.log(e.latlng);
            popup
                .setLatLng(e.latlng)
                .setContent(`You clicked the map at ${e.latlng.toString()}`)
                .openOn(map);
        }
        map.on('click', onMapClick);

        const data = { lat, lon };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const response = await fetch('/api', options);
        console.log("Minha resposta", response);
        const json = await response.json();
        console.log("O meu json", json);


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