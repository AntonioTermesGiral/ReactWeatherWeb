import {action, computed, observable, makeObservable} from "mobx";
import WeatherData from "../models/WeatherData";

class ExtremaduraViewModel {

    @observable plasenciaData : WeatherData = new WeatherData("Plasencia")
    @observable badajozData : WeatherData = new WeatherData("Badajoz")
    @observable caceresData : WeatherData = new WeatherData("Cáceres")
    static viewModel : ExtremaduraViewModel

    constructor() {
        makeObservable(this)
    }

    static getInstance() : ExtremaduraViewModel {

        if (ExtremaduraViewModel.viewModel === undefined) {
            ExtremaduraViewModel.viewModel = new ExtremaduraViewModel()
        }

        return ExtremaduraViewModel.viewModel
        
    }

    @action requestData = () => {

        this.fetchData(this.plasenciaData).then((result) => { this.plasenciaData = result!})
        this.fetchData(this.badajozData).then((result) => { this.badajozData = result!})
        this.fetchData(this.caceresData).then((result) => { this.caceresData = result!})
    
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

        return [this.plasenciaData, this.badajozData, this.caceresData];

    }

}

export default ExtremaduraViewModel;