import {action, computed, observable, makeObservable} from "mobx";
import WeatherData from "../models/WeatherData";

class AndaluciaViewModel {

    @observable sevillaData : WeatherData = new WeatherData("Sevilla")
    @observable cordobaData : WeatherData = new WeatherData("Córdoba")
    @observable cadizData : WeatherData = new WeatherData("Cádiz")
    static viewModel : AndaluciaViewModel

    constructor() {
        makeObservable(this)
    }

    static getInstance() : AndaluciaViewModel {

        if (AndaluciaViewModel.viewModel === undefined) {
            AndaluciaViewModel.viewModel = new AndaluciaViewModel()
        }

        return AndaluciaViewModel.viewModel
        
    }

    @action requestData = () => {

        this.fetchData(this.sevillaData).then((result) => { this.sevillaData = result!})
        this.fetchData(this.cordobaData).then((result) => { this.cordobaData = result!})
        this.fetchData(this.cadizData).then((result) => { this.cadizData = result!})
    
    }

    @action private fetchData = (data: WeatherData) => {

        return fetch('https://api.openweathermap.org/data/2.5/weather?' + new URLSearchParams({
            q: data.city,
            units:"metric",
            appid:"54b2c8591af9fd68161f066916009311",
        }), {
            method: "GET",
        }).then(response => response.json())
            .then(result => {
                return new WeatherData(data.city, result.main.temp, result.wind.speed, result.weather[0].description)

            })
            .catch(error => console.log('error', error));

    }

    @computed get getWeather(): WeatherData[] {

        return [this.sevillaData, this.cordobaData, this.cadizData];

    }

}

export default AndaluciaViewModel;