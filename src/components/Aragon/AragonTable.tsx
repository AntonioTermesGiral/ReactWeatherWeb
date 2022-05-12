import WeatherData from "../../models/WeatherData"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import { Box} from "@mui/material";

//Components
import AragonTableRow from "./AragonTableRow";

//Styles
import aragonStyles from "../../views/styles/AragonStyles"

type Props = {
    list: WeatherData[]
}

var AragonTable = ({list}:Props) => {

  const styles = aragonStyles()

    return (
      <Box className={styles.listsBox}>
        {list.map((currentWeather, i) => {
          return (
            <Box className={styles.elementBox} key={i}>
              <h3 className={styles.cityName}>{currentWeather.city}</h3>
              <TableContainer>
                <Table>
                  <TableBody>
                    <AragonTableRow field="Temperature" value={currentWeather.temperature + " Cº"}/>
                    <AragonTableRow field="Wind Speed" value={currentWeather.windSpeed + " m/s"}/>
                    <AragonTableRow field="Clouds" value={currentWeather.clouds + ""}/>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          )
        })}
      </Box>
      
    )

}

export default AragonTable