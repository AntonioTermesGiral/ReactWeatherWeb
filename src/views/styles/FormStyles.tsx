import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const formStyles = makeStyles((theme: Theme) =>
    createStyles({
        gridContainer: {
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
        },
        marginTop: {
            marginTop: '3%',
        },
        submitBtn: {
            marginTop: '3%',
            color: 'white',
            '&:disabled': {
                backgroundColor: theme.palette.primary.main,
                color: 'white'
            }
        }
    })
)

export default formStyles;