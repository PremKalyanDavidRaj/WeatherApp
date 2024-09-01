// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const apiKey = '533aa20b4bb9de297c084d942023b3e7';

// Function to fetch and display weather based on city name
async function getWeather() {
    const city = document.getElementById('city-input').value.trim();
    if (city === '') {
        alert('Please enter a city name.');
        return;
    }
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        if (response.ok) {
            displayWeather(data);
        } else {
            alert(`Error: ${data.message}`);
        }
    } catch (error) {
        alert('Failed to fetch weather data. Please try again later.');
    }
}

// Function to display the weather data on the webpage
function displayWeather(data) {
    const weatherDisplay = document.getElementById('weather-display');
    weatherDisplay.innerHTML = `
        <h3>Weather in ${data.name}, ${data.sys.country}</h3>
        <p><img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}"> ${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
    // Optionally call getForecast to display the 5-day forecast
    getForecast(data.name);
}

// Function to fetch and display the 5-day weather forecast
async function getForecast(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        if (response.ok) {
            displayForecast(data);
        } else {
            alert(`Error: ${data.message}`);
        }
    } catch (error) {
        alert('Failed to fetch forecast data. Please try again later.');
    }
}

// Function to display the 5-day weather forecast on the webpage
function displayForecast(data) {
    const forecastDisplay = document.getElementById('forecast-display');
    forecastDisplay.innerHTML = '<h3>5-Day Forecast</h3>';
    data.list.forEach((forecast, index) => {
        if (index % 8 === 0) { // Every 8th item corresponds to a new day (3-hour intervals, so 8 items per day)
            const forecastDate = new Date(forecast.dt * 1000).toDateString();
            forecastDisplay.innerHTML += `
                <div>
                    <p>${forecastDate}</p>
                    <p><img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" alt="${forecast.weather[0].description}"> ${forecast.weather[0].description}</p>
                    <p>Temp: ${forecast.main.temp}°C</p>
                    <p>Humidity: ${forecast.main.humidity}%</p>
                </div>
            `;
        }
    });
}

// Function to fetch and display weather based on user's geolocation
function getLocationWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
                const data = await response.json();
                if (response.ok) {
                    displayWeather(data);
                } else {
                    alert(`Error: ${data.message}`);
                }
            } catch (error) {
                alert('Failed to fetch weather data. Please try again later.');
            }
        }, () => {
            alert('Geolocation permission denied. Please enter a city manually.');
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}
