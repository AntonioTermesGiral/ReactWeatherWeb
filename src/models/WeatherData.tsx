class WeatherData {
    city: string = "";
    temperature?: number = 0;
    windSpeed?: number = 0;
    clouds?: string = "";

    constructor(city: string, temperature?: number, windSpeed?: number, clouds?: string) {
        this.city = city
        this.temperature = temperature
        this.windSpeed = windSpeed
        this.clouds = clouds
    }

}

export default WeatherData;