import {action, computed, observable, makeObservable} from "mobx";
import WeatherData from "../models/WeatherData";

class AragonViewModel {

    @observable huescaData : WeatherData = new WeatherData("Huesca")
    @observable zaragozaData : WeatherData = new WeatherData("Zaragoza")
    @observable teruelData : WeatherData = new WeatherData("Teruel")
    static viewModel : AragonViewModel

    constructor() {
        makeObservable(this)
    }

    static getInstance() : AragonViewModel {

        if (AragonViewModel.viewModel === undefined) {
            AragonViewModel.viewModel = new AragonViewModel()
        }

        return AragonViewModel.viewModel
        
    }

    @action requestData = () => {

        this.fetchData(this.huescaData).then((result) => { this.huescaData = result!})
        this.fetchData(this.zaragozaData).then((result) => { this.zaragozaData = result!})
        this.fetchData(this.teruelData).then((result) => { this.teruelData = result!})
    
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

        return [this.huescaData, this.zaragozaData, this.teruelData];

    }

}

export default AragonViewModel;