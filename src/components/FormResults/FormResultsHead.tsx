import { TableCell, TableRow, TableHead } from "@mui/material";

//Styles
import FormResultsStyles from '../../views/styles/FormResultsStyles'

type Props = {
    content : String[];
}

const FormResultsHead = ({content}: Props) => {

    const styles = FormResultsStyles()

    return (
        <TableHead>
            <TableRow>
                {content.map((current, index) => {
                    return (
                        <TableCell key={index} className={styles.tableHead} >{current}</TableCell>
                    )
                }
                )}
            </TableRow>
        </TableHead>
    );

}

export default FormResultsHead;