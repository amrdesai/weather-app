// Init storage
const storage = new Storage();

// Get Location
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

// Init UI
const ui = new UI();

// Get weather info on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Modal Toggle
document.getElementById('change-location-btn').addEventListener('click', openModal);

// Change Location Event Listener
document.getElementById('new-location-submit-btn').addEventListener('click', changeLocation);


// Change Location Function
function changeLocation(e) {
    e.preventDefault();
    // Get inputs
    const cityInput = document.getElementById('city').value;
    const countryInput = document.getElementById('country').value;
    // Change location
    weather.changeLocation(cityInput, countryInput);
    // Set location in local storage
    storage.setLocationData(cityInput, countryInput);
    // Get weather
    getWeather();
    // Close Modal
    closeModal();
}

// Get weather information
function getWeather() {
    weather.getWeatherInfo()
        .then((result) => {
            ui.paint(result);
        })
        .catch(error => console.log(error));
}


// Kelvin to Celsius 
function convertKelvinToCelsius(kelvin) {
    if (kelvin < (0)) {
        return 'below absolute zero (0 K)';
    } else {
        return (kelvin - 273.15);
    }
}

// Celsius to Farenheit
function getFahrenheitFromCelsius(celsius) {
    return (celsius * (9 / 5)) + 32;
}

// Farenheit to Celsius
function getCelsiusFromFahrenheit(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}