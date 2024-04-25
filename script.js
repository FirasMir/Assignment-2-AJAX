document.getElementById('searchBtn').addEventListener('click', async () => {
  const city = document.getElementById('cityInput').value;
  const apiKey = '61ce5353445aa51ff24018a7af8ce974';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      const weatherInfo = `
          <h2>Weather in ${data.name}</h2>
          <div class="weather-details">
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Description: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
            <div class="weather-icon">
              <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">
            </div>
          </div>
        `;
      document.getElementById('weatherInfo').innerHTML = weatherInfo;
    } else {
      document.getElementById('weatherInfo').innerHTML = '<p>City not found. Please try again.</p>';
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    document.getElementById('weatherInfo').innerHTML = '<p>Something went wrong. Please try again later.</p>';
  }
});
