class Weather {
    constructor(city, country) {
        this.apiKey = '29aaec483fdfda392ad92d6b2ad79b02';
        this.city = city;
        this.country = country;
    }

    // Fetching Weather Data from API
    async getWeatherInfo() {
        // Fetch 
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`);
        // Get JSON
        const responseData = await response.json();
        // Return JSON
        return responseData
    }

    // Change Location
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }

}
