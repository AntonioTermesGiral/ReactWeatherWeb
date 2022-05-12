import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const andaluciaStyles = makeStyles((theme: Theme) =>
    createStyles({
        defaultBox: {
            display:"flex",
            alignItems:"center",
            flexDirection:"column",
        },
        primaryColor: {
            color: theme.palette.primary.main,
        },
        avatarBackground: {
            backgroundColor: theme.palette.secondary.main
        },
        listsBox: {
            display: 'flex',
            alignItems:"center",
            flexDirection:"row",
            margin: 'auto',
            flexWrap: 'wrap',
            justifyContent: 'center'
        },
        list: {
            height: '15em',
            backgroundColor: theme.palette.background.default,
            border: '1px solid',
            borderRadius: '16px',
            borderColor: theme.palette.primary.main,
            margin: '1em',
            '&:hover': {
                borderColor: 'white',
            }
        }
    })
)

export default andaluciaStyles;