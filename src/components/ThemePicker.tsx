import createTheme from "@mui/material/styles/createTheme";
import { action, computed, observable, makeObservable} from "mobx";

class ThemePicker {

    private static lightTheme = createTheme({
        palette: {
            primary: {
                main: '#42a5f5',
            },
            secondary: {
                main: '#bbdefb',
            },
            background: {
                default: '#e1f5fe'
            }
        },
    })

    private static darkTheme = createTheme({
        palette: {
            primary: {
                main: '#263238',
            },
            secondary: {
                main: '#90a4ae',
            },
            background: {
                default: '#b0bec5',
            },
        }
    })

    static instance : ThemePicker
    @observable darkmode : boolean = false;
    @observable theme = ThemePicker.lightTheme;

    constructor() {
        makeObservable(this)
    }

    static getInstance() : ThemePicker {

        if (ThemePicker.instance === undefined) {
            ThemePicker.instance = new ThemePicker()
        }

        return ThemePicker.instance
        
    }

    @action ToggleColorMode = () => {
        this.darkmode = !this.darkmode
        this.changeTheme()
    }

    @action private changeTheme = () => {

        this.theme = (this.darkmode) ? ThemePicker.darkTheme : ThemePicker.lightTheme

    }

    @computed get getTheme () {
        return this.theme
    }

}

export default ThemePicker;