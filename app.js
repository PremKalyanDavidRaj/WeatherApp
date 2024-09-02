
const apiKey = '533aa20b4bb9de297c084d942023b3e7';


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
            addBackButton();
            addResetButton();
        } else {
            alert(`Error: ${data.message}`);
        }
    } catch (error) {
        alert('Failed to fetch weather data. Please try again later.');
    }
}

function displayWeather(data) {
    const weatherDisplay = document.getElementById('weather-display');
    weatherDisplay.innerHTML = `
        <h3>Weather in ${data.name}, ${data.sys.country}</h3>
        <p><img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}"> ${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
    getForecast(data.name);
}

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

function displayForecast(data) {
    const forecastDisplay = document.getElementById('forecast-display');
    forecastDisplay.innerHTML = '<h3>5-Day Forecast</h3>';
    data.list.forEach((forecast, index) => {
        if (index % 8 === 0) { 
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
                    addBackButton();
                    addResetButton();
                } else {
                    showError(`Error: ${data.message}`);
                }
            } catch (error) {
                showError('Failed to fetch weather data. Please try again later.');
            }
        }, () => {
            showError('Geolocation permission denied. Please enter a city manually.');
        });
    } else {
        showError('Geolocation is not supported by this browser.');
    }
}

function showError(message) {
    const weatherDisplay = document.getElementById('weather-display');
    const forecastDisplay = document.getElementById('forecast-display');
    
    weatherDisplay.innerHTML = '';
    forecastDisplay.innerHTML = '';
    
    weatherDisplay.innerHTML = `<p class="error">${message}</p>`;
}

function clearError() {
    const weatherDisplay = document.getElementById('weather-display');
    const forecastDisplay = document.getElementById('forecast-display');
    weatherDisplay.innerHTML = '';
    forecastDisplay.innerHTML = '';
}


function goBack() {
    window.history.back();
}

function resetApp() {
    document.getElementById('city-input').value = '';
    document.getElementById('weather-display').innerHTML = '';
    document.getElementById('forecast-display').innerHTML = '';
    removeBackButton();
    removeResetButton();
}


function addBackButton() {
    const weatherApp = document.querySelector('.weather-app');
    if (!document.getElementById('back-button')) {
        const backButton = document.createElement('button');
        backButton.id = 'back-button';
        backButton.innerText = 'Go Back';
        backButton.onclick = goBack;
        weatherApp.appendChild(backButton);
    }
}

function addResetButton() {
    const weatherApp = document.querySelector('.weather-app');
    if (!document.getElementById('reset-button')) {
        const resetButton = document.createElement('button');
        resetButton.id = 'reset-button';
        resetButton.innerText = 'Reset';
        resetButton.onclick = resetApp;
        weatherApp.appendChild(resetButton);
    }
}

function removeBackButton() {
    const backButton = document.getElementById('back-button');
    if (backButton) {
        backButton.remove();
    }
}

function removeResetButton() {
    const resetButton = document.getElementById('reset-button');
    if (resetButton) {
        resetButton.remove();
    }
}



function showInfo() {
    const modal = document.getElementById('info-modal');
    modal.style.display = "block";
}

function closeInfo() {
    const modal = document.getElementById('info-modal');
    modal.style.display = "none";
}

function closeInfo() {
    const modal = document.getElementById('info-modal');
    modal.style.display = "none";
}
