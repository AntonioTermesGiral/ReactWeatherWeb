import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const aragonStyles = makeStyles((theme: Theme) =>
    createStyles({
        defaultBox: {
            display:"flex",
            alignItems:"center",
            flexDirection: 'column'
        },
        titleBox: {
            display:"flex" ,
            alignItems:"center",
            flexDirection:"column"
        },
        listsBox: {
            marginTop: "2.5em",
            display:"flex",
            alignItems:"center",
            flexDirection: 'row',
            margin: 'auto',
            flexWrap: 'wrap',
            justifyContent: 'center'
        },
        cell: {
            width: '10em',
            textAlign: 'center'
        },
        primaryColor: {
            color: theme.palette.primary.main
        },
        cityName: {
            textAlign: 'center',
        },
        elementBox: {
            border: '0.1em',
            borderStyle: 'solid',
            borderColor: theme.palette.primary.light,
            margin: '1%',
            borderRadius: '1%',
            transition: 'transform .6s',
            '&:hover': {
                transform: 'scale(1.1)',
            }
        }
    })
)

export default aragonStyles;