import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import WeatherData from '../../models/WeatherData';

//Styles
import extremaduraStyles from "../../views/styles/ExtremaduraStyles";

type Props = {
    list: WeatherData[]
}

var ExtremaduraTableBody = ({list}: Props) => {

    const styles = extremaduraStyles();

    return (
        <TableBody>
            {list.map((currentWeather, i) => {
                return (
                <TableRow key={i} className={styles.tableRow}>
                    <TableCell className={styles.tablecellbody}>{currentWeather.city}</TableCell>
                    <TableCell className={styles.tablecellbody}>{currentWeather.temperature} Cº</TableCell>
                    <TableCell className={styles.tablecellbody}>{currentWeather.windSpeed} m/s</TableCell>
                    <TableCell className={styles.tablecellbody}>{currentWeather.clouds}</TableCell>
                </TableRow>
                )
            })}
        </TableBody>
    )

}

export default ExtremaduraTableBody;