function chamarServicoGeocodificacao() {
    const cidade = document.getElementById('cidade').value;
    const urlGeocodificacao = `http://api.openweathermap.org/geo/1.0/direct?q=${cidade}&appid=68de8e68bf8f41af0ffb307887eccfb7`;

    return fetch(urlGeocodificacao)
        .then(response => response.json())
        .then(data => {
            const latitude = data[0].lat; // Accessing lat property from the first object in the response array
            const longitude = data[0].lon;
            const pais = data[0].country ;
            const estado = data[0].state;

            resultado.textContent = `Informações sobre a cidade: ${cidade}: País -> ${pais} ; Estado -> ${estado} Latitude -> ${latitude}; Longitude -> ${longitude}`;
        })
        .catch(error => {
            alert("ALERT: Erro ao requisitar o serviço na nuvem!");
            console.error("Erro ao requisitar o serviço na nuvem:", error);
        });
}

// function chamarServicoTempo() {
//     const cidade = document.getElementById('cidade').value;
//     chamarServicoGeocodificacao(cidade)
//     .then(({latitude, longitude}) => {
//         // const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
//         const urlServicoTempo = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${latitude}&lon=${longitude}&appid=68de8e68bf8f41af0ffb307887eccfb7`;
//         return fetch(urlServicoTempo);
//     })
//     .then(response => {
//         if(response.ok){
//             alert("Resposta OK");
//             return response.json();
//         } else {
//             alert("Resposta não OK");
//         }
//     })
//     .then(data => {
//         console.log(`Previsão do tempo na cidade ${cidade}`);
//         console.log(`Temperatura: ${data.main.temp}`);
//         console.log(`Sensação térmica: ${data.main.feels_like}`);
//         console.log(`Humidade: ${data.main.humidity}`);

//         const temperatura = data.main.temp;
//         const sensacao = data.main.feels_like;
//         const humidade = data.main.humidity;

//         resultado.textContent = `Informações sobre a cidade: ${cidade}; Temperatura (F°): ${temperatura}; Sensação térmica: ${sensacao}; Humidade: ${humidade}`; 
//     })
//     .catch(error => {
//         alert("ALERT: Erro ao requisitar o serviço na nuvem!");
//         console.error("Erro ao requisitar o serviço na nuvem:", error);
//     });
// }