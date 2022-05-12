import { Box, Typography } from "@mui/material";

//Styles
import extremaduraStyles from "../../views/styles/ExtremaduraStyles";

let ExtremaduraTitle = () => {

  const styles = extremaduraStyles();

  return (
      <Box className={styles.titlebox}>
        <Typography className={styles.primaryColor} fontSize='2.8em'>Extremadura</Typography>
        <Typography variant='subtitle1' className={styles.primaryColor} fontSize='1.5em'>Using a table</Typography>
      </Box>
  )

}

export default ExtremaduraTitle;