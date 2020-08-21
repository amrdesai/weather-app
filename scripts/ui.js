class UI {
    constructor() {
        this.location = document.getElementById('location-city');
        this.image = document.getElementById('w-img');
        this.description = document.getElementById('w-desc');
        this.temperature = document.getElementById('w-degree');
        this.body = document.body;
    }

    convertKelvinToCelsius(kelvin) {
        if (kelvin < (0)) {
            return 'below absolute zero (0 K)';
        } else {
            return (kelvin - 273.15).toFixed(1);
        }
    }

    paint(weather) {
        const test = weather.name + '-city'
        this.location.textContent = weather.name;
        this.temperature.textContent = this.convertKelvinToCelsius(weather.main.temp);
        this.description.textContent = weather.weather[0].description;
        this.image.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`)
        this.body.style.backgroundImage = `url('https://source.unsplash.com/random?${test}')`;
    }
}