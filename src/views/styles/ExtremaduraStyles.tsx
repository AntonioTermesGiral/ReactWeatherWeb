import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const extremaduraStyles = makeStyles((theme: Theme) =>
    createStyles({
        maintable: {
            minWidth: 200,
            marginTop: 36,
        },
        titlebox: {
            display:"flex",
            alignItems:"center",
            flexDirection:"column"
        },
        primaryColor: {
            color: theme.palette.primary.main,
        },
        tablecellhead: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            textAlign: 'center',
        },
        tablecellbody: {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.black,
            textAlign: 'center'
        },
        tableRow: {
            '&:hover': {
                "& $tablecellbody": {
                    backgroundColor: theme.palette.secondary.light
                }
            }
        }
    })
)

export default extremaduraStyles;