//Styles
import { TableBody, TableCell, TableRow } from '@mui/material';
import FormResultsStyles from '../../views/styles/FormResultsStyles'
import FormData from '../../models/FormData'

type Props = {
    data : FormData[];
}

const FormResultsBody = ({data}: Props) => {

    const styles = FormResultsStyles()

    return (
        <TableBody>
            {data.map((currentLine, index) => {
                return (
                    <TableRow key={index} className={styles.tableRow}>
                        <TableCell className={styles.tableBody} >{currentLine.name}</TableCell>
                        <TableCell className={styles.tableBody} >{currentLine.age}</TableCell>
                        <TableCell className={styles.tableBody} >{currentLine.birthday}</TableCell>
                        <TableCell className={styles.tableBody} >{currentLine.favBrowser}</TableCell>
                        <TableCell className={styles.tableBody} >{currentLine.likeReact === "true" ? "Yes" : "No"}</TableCell>
                    </TableRow>
                )
            })}
        </TableBody>
    )

}

export default FormResultsBody;