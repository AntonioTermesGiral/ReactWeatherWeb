import TableCell from '@mui/material/TableCell/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

//Styles
import extremaduraStyles from "../../views/styles/ExtremaduraStyles";

type Props = {
    itemList : string[]
}

var ExtremaduraTableHead = ({itemList}: Props) => {

  const styles = extremaduraStyles();

  return (
      <TableHead>
        <TableRow>
            {itemList.map(item => {
                return (
                  <TableCell className={styles.tablecellhead} key={item}>{item}</TableCell>
                )
            })}
        </TableRow>
      </TableHead>
  )

}

export default ExtremaduraTableHead;