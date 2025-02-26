const API_KEY = '3c962f744c57e6627827a795c9173491';  

async function getWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data); 

    if (data.cod === '404') {
      throw new Error('City not found');
    }

    updateWeatherInfo(data);
  } catch (error) {
    displayError(error.message);
  }
}

function updateWeatherInfo(data) {
  const cityName = data.name;
  const description = data.weather[0].description;
  const temperature = data.main.temp;
  const humidity = data.main.humidity;
  document.getElementById('city-name').textContent = `Weather in  ${cityName}`;
  document.getElementById('weather-description').textContent = `🌤️ Weather: ${description}`;
  document.getElementById('temperature').textContent = `🌡️ Temperature: ${temperature}°C`;
  document.getElementById('humidity').textContent = `💧 Humidity: ${humidity}%`;

  document.getElementById('error-message').textContent = ''; 
}

function displayError(message) {
  document.getElementById('error-message').textContent = message;
  document.getElementById('weather-info').style.display = 'none'; 
}

document.getElementById('get-weather-btn').addEventListener('click', () => {
  const city = document.getElementById('city-input').value.trim();
  if (city) {
    document.getElementById('weather-info').style.display = 'block'; 
    getWeather(city);
  } else {
    displayError('Please enter a city name');
  }
});
