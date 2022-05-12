import { Box, Typography } from "@mui/material";

//styles
import aragonStyles from "../../views/styles/AragonStyles";

var AragonTitle = () => {

  const styles = aragonStyles()

    return (
        <Box className={styles.titleBox}>
            <Typography className={styles.primaryColor} fontSize='3.5em'>Aragón</Typography>
            <Typography className={styles.primaryColor} fontSize='1.5em'>Using a table</Typography>
        </Box>
    )

}

export default AragonTitle