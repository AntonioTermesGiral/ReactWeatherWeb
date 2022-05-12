
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AirIcon from '@mui/icons-material/Air';
import CloudIcon from '@mui/icons-material/Cloud';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

//Styles
import andaluciaStyles from "../../views/styles/AndaluciaStyles";

type Props = {
    text: string,
    icon: string
}

function selectIcon(icon: string) {
    switch(icon) {
        case 'City':
            return(
                <LocationCityIcon color="primary"/>
            )
        case 'Thermostat':
            return(
                <ThermostatIcon color="primary"/>
            )
        case 'Air':
            return(
                <AirIcon color="primary"/>
            )
        case 'Cloud':
            return(
                <CloudIcon color="primary"/>
            )
    }
}

var AndaluciaListItem = ({ text, icon }: Props) => {

    const styles = andaluciaStyles()

    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar className={styles.avatarBackground}>
                    {selectIcon(icon)}
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={text} />
        </ListItem>
    )

}

export default AndaluciaListItem;