import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const navBarStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            position: 'static'
        },
        toolBarContainer: {
            maxWidth:"100%"
        },
        buttonBox: {
            flexGrow: 1,
            margin: 'auto'
        },
        buttonLink: {
            textDecoration: 'none',
            '&:active' : {
                backgroundColor: theme.palette.secondary.main,
            },
            '&:selected' : {
                backgroundColor: theme.palette.secondary.main,
            }
        },
        menuButtons: {
            marginTop: 2,
            marginBottom: 2,
            marginLeft: 1,
            color: 'white',
            display: 'block',
            '&:hover': {
                border: '1px solid white',
            }
        },
        paper: {
            background: theme.palette.primary.main
          },
        whiteColor: {
            color: 'white'
        },
        mobileBox: {
            width: '16em'
        },
        mobileElements: {
            color: theme.palette.primary.dark,
            borderLeft: '1px',
            borderTop: '1px',
            borderBottom: '1px',
            borderTopLeftRadius: '47%',
            borderBottomLeftRadius: '47%',
            marginLeft: '2em',
            marginBottom: '2em',
            marginTop: '1em',
            backgroundColor: theme.palette.secondary.main,
            maxWidth: '14em',
            '& .MuiTypography-root' : {
                fontWeight: 'bold'
            }
        },
    })
)

export default navBarStyles;