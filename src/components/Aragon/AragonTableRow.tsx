import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

//Styles
import aragonStyles from '../../views/styles/AragonStyles';

type Props = {
    field: string,
    value: string
}

var AragonTableRow = ({field, value}:Props) => {

    const styles = aragonStyles()

    return (
        <TableRow >
            <TableCell className={styles.cell}>{field}</TableCell>
            <TableCell className={styles.cell}>{value}</TableCell>
        </TableRow>
    )

}

export default AragonTableRow