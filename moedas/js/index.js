// function chamarServicoMoeda() {
    
//     const valor = document.getElementById("valor").value;
//     const moeda_inicial = document.getElementByName("moeda_origem");
//     const moeda_final = document.getElementByName("moeda_destino");
//     const abbv = document.getElementsById("")

//     // const urlMoeda = 'https://openexchangerates.org/api/convert/${valor}/{moeda_origem}/{moeda_destino}?app_id=fee7ec85a09940de939a33ac049e3338'
//     var radios = document.getElementsByName('moeda_final');
//     var moedaSelecionada = 0;

//     // Itera pelos elementos de rádio para encontrar o selecionado
//     for (var i = 0; i < radios.length; i++) {
//         if (radios[i].checked) {
//             moedaSelecionada = radios[i].id;
//             break;
//         }
//     }
    
//     $.get('https://openexchangerates.org/api/latest.json', {app_id: '[[app:fee7ec85a09940de939a33ac049e3338]]', base: 'BRA'}, function(data) {
//         console.log("1 real brasileiro equivale à " + data.rates.moedaSelecionada + " Japanese Yen");
//     });
// }
// //     return fetch(urlMoeda)
// //     .then(response => response.json())
// //     .then(data => {
// //         const valorFinal = data[0].lat; // Accessing lat property from the first object in the response array

// //         resultado.textContent = `Valor convertido: ${valorFinal}`;
// //     })
// //     .then(response => {

// //         if(response.ok){
// //             alert("Resposta OK");

// //             return response.json();

// //         } else {
// //             alert("Resposta não OK");
// //         }
// //      })
function chamarServicoMoeda() {

    var nome = document.getElementById ('value')
    var radios = document.getElementsByName('moeda_final');
    var moedaSelecionada = '';

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            moedaSelecionada = radios[i].id;
            break;
        }
    }

    if (!moedaSelecionada) {
        alert("Por favor, selecione uma moeda.");
        return;
    }

$.get('https://openexchangerates.org/api/latest.json', { app_id: '1da36bba39444022929de1a9b41cea07' }, function(data) {
                if (data.rates && data.rates[moedaSelecionada]) {
                    var valorConvertido = data.rates[moedaSelecionada];
                    document.getElementById('resultado').innerText = "Valor convertido: " + valorConvertido.toFixed(2);
                } else {
                    document.getElementById('resultado').innerText = "Erro ao obter a taxa de câmbio.";
                }
            }).fail(function(jqXHR, textStatus, errorThrown) {
                console.error("Erro na requisição: " + textStatus + " - " + errorThrown);
                document.getElementById('resultado').innerText = "Erro na requisição.";
            })}