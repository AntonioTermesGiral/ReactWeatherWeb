import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const formResultsStyles = makeStyles((theme: Theme) =>
    createStyles({
        mainBox: {
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            minHeight:"80vh"
        },
        tableHead: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            textAlign:"center"
        },
        tableBody: {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.black,
            textAlign:"center"
        },
        tableRow: {
            '&:hover': {
                "& $tableBody": {
                    backgroundColor: theme.palette.secondary.light
                }
            }
        },
        tableContainer: {
            verticalAlign: 'middle'
        },
        mainTable: {
            minWidth: 200
        }
    })
)

export default formResultsStyles;