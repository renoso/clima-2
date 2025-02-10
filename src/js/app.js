const apiKey = 'd239763a89ab4bb2fc1a4881809e74c1'; 

async function fetchWeather(city) {
    try {
        document.getElementById('loader').style.display = 'block';

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Brazil}&appid=${d239763a89ab4bb2fc1a4881809e74c1}&units=metric`);
        
        const data = await response.json();

        document.getElementById('loader').style.display = 'none';

        if (data.cod === 200) {
            const temperature = data.main.temp; 
            const weatherDescription = data.weather[0].description; 
            const iconCode = data.weather[0].icon; 
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; 

            document.getElementById('weather').innerHTML = `
                <img src="${iconUrl}" alt="${weatherDescription}" />
                Temperatura: ${temperature.toFixed(2)}°C - ${weatherDescription}`;
        } else {
            document.getElementById('weather').ATTRIBUTE_NODE.innerText = 'Cidade não encontrada!';
        }
    } catch (error) {
        console.error('Erro ao buscar dados do clima:', error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
     fetchWeather('Aracaju');

     document.getElementById('search-button').addEventListener('click', () => {
          const city = document.getElementById('city-input').value;
          if(city){
               fetchWeather(city);
          }
     })
});
