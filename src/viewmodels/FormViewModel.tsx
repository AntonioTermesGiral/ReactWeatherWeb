import {action, computed, observable, makeObservable} from "mobx";
import FormData from "../models/FormData";

class FormViewModel {

    static viewModel : FormViewModel
    @observable data: FormData[] = []

    constructor() {
        makeObservable(this)
    }

    static getInstance() : FormViewModel {

        if (FormViewModel.viewModel === undefined) {
            FormViewModel.viewModel = new FormViewModel()
        }

        return FormViewModel.viewModel
        
    }

    @action addRegister = (newRegister : FormData) => {

        if (localStorage.getItem('FormResults')) {
            this.data = JSON.parse(localStorage.getItem('FormResults')!)
        }
        this.data.push(newRegister)
        localStorage.setItem('FormResults', JSON.stringify(this.data));

        console.log(localStorage.getItem('FormResults'))
        console.log(this.data)
    
    }

    @computed get getData(): FormData[] {

        if (localStorage.getItem('FormResults')) {
            return JSON.parse(localStorage.getItem('FormResults')!)
        } else {
            return [];
        }
        
    }

}

export default FormViewModel;