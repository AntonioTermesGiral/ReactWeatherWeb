import { Box } from '@mui/material';
import List from '@mui/material/List';
import WeatherData from "../../models/WeatherData"

//Components
import AndaluciaListItem from './AndaluciaListItem';

//Styles
import andaluciaStyles from "../../views/styles/AndaluciaStyles";

type Props = {
    list: WeatherData[]
}

var AndaluciaList = ({ list }: Props) => {

    const styles = andaluciaStyles()

    return (
        <Box className={styles.listsBox}>
            {list.map((currentWeather, i) => {
                return (
                    <div key={i}>
                        <List className={styles.list} >
                            <AndaluciaListItem text={currentWeather.city} icon='City' />
                            <AndaluciaListItem text={currentWeather.temperature + " Cº"} icon='Thermostat' />
                            <AndaluciaListItem text={currentWeather.windSpeed + " m/s"} icon='Air' />
                            <AndaluciaListItem text={currentWeather.clouds + ""} icon='Cloud' />
                        </List>
                    </div>
                )
            })}
        </Box>
    )

}

export default AndaluciaList;