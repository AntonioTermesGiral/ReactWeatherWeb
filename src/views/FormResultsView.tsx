import { Box, Paper, Table, TableContainer} from "@mui/material";
import { observer } from "mobx-react-lite";
import FormViewModel from "../viewmodels/FormViewModel";

//Components
import FormResultsHead from "../components/FormResults/FormResultsHead";
import FormResultsBody from "../components/FormResults/FormResultsBody";

//Styles
import formResultsStyles from "./styles/FormResultsStyles";

const FormResultsView = () => {

    var viewModel = FormViewModel.getInstance()
    const styles = formResultsStyles()
    
    return (
        <Box className={styles.mainBox}>
            <TableContainer component={Paper} className={styles.tableContainer}>
                <Table className={styles.mainTable}>
                    <FormResultsHead content={["Name", "Age", "Birthday", "Favourite Browser", "Likes React"]} />
                    <FormResultsBody data={viewModel.getData}/>
                </Table>
            </TableContainer>
        </Box>
    );

}

export default observer(FormResultsView);