

# Weather App

## Overview

The **Weather App** is a simple, user-friendly application that allows users to get current weather information for any city. The app also includes additional features such as a 5-day weather forecast, geolocation-based weather data, and an information modal about the Product Manager Accelerator (PMA) program.

## Features

- **City-based Weather Search:** Users can enter a city name to get the current weather conditions, including temperature, humidity, wind speed, and a description of the weather.
- **5-Day Forecast:** The app provides a 5-day weather forecast for the searched city, giving users insight into upcoming weather conditions.
- **Geolocation:** Users can fetch weather data based on their current location using the "Use My Location" button.
- **Info Modal:** The app includes an "Info" button that opens a modal with detailed information about the PM Accelerator program, including an overview, steps to join, and contact information.
- **Go Back Button:** Inside the modal, there is a "Go Back" button that allows users to easily close the modal and return to the main app interface.

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **OpenWeatherMap API** for fetching weather data
- **Visual Studio Code (VS Code)** for development

## Setup Instructions

### Prerequisites

- Ensure you have a modern web browser installed (Google Chrome, Mozilla Firefox, Microsoft Edge, etc.).
- An active internet connection to fetch weather data from the OpenWeatherMap API.

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```
2. **Navigate to the Project Directory:**
   ```bash
   cd weather-app
   ```
3. **Add Your OpenWeatherMap API Key:**
   - Replace `'YOUR_API_KEY'` in the `app.js` file with your actual OpenWeatherMap API key.

4. **Run the App:**
   - Open the `index.html` file in your preferred web browser.
   - If you're using VS Code, you can right-click on the `index.html` file and select "Open with Live Server" (if you have the Live Server extension installed).

### Usage

- **Search for Weather:**
  - Enter a city name in the search bar and click "Get Weather" to retrieve the current weather conditions.
- **Use Geolocation:**
  - Click "Use My Location" to automatically fetch weather data for your current location.
- **View 5-Day Forecast:**
  - After searching for a city, scroll down to view the 5-day forecast.
- **Learn About PM Accelerator:**
  - Click the "Info" button to open a modal with detailed information about the Product Manager Accelerator program.
- **Close the Modal:**
  - Click the "Go Back" button inside the modal to return to the main app interface.

### Project Structure

```
weather-app/
│
├── images/                    # Folder containing images (e.g., profile picture)
├── styles.css                 # CSS file for styling
├── app.js                     # JavaScript file for app functionality
├── index.html                 # Main HTML file
├── README.md                  # Project README file
└── .gitignore                 # Git ignore file
```

## Contributing

If you’d like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch-name`).
5. Open a pull request.

## Contact

For any inquiries, please contact [Prem Kalyan David Raj](PremKalyanDavidRaj.Gai@unh.eedu).
