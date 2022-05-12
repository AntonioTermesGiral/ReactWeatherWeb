import { Box, Typography } from "@mui/material";

//Styles
import andaluciaStyles from "../../views/styles/AndaluciaStyles";

var AndaluciaTitle = () => {

  const styles = andaluciaStyles()

  return (
      <Box className={styles.defaultBox}>
        <Typography className={styles.primaryColor} fontSize='3em'>Andalucía</Typography>
        <Typography className={styles.primaryColor} fontSize='1.5em'>Using a list</Typography>
      </Box>
  )

}

export default AndaluciaTitle;