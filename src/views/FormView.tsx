import { Alert, CircularProgress, FormControl, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, Select, Snackbar } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import React from "react";
import { useState, useRef, useEffect } from "react";
import FormData from "../models/FormData";
import FormViewModel from "../viewmodels/FormViewModel";
import SaveIcon from "@mui/icons-material/Save";

//Styles
import formStyles from "./styles/FormStyles";

const FormView = () => {

    const [currentValues, setCurrentValues] = useState(new FormData())
    const [errorOpen, setErrorOpen] = useState(false)
    const [successOpen, setSuccessOpen] = useState(false)
    const [loading, setLoading] = useState(false);
    const timer = useRef<number>();

    const viewModel = FormViewModel.getInstance()
    const styles = formStyles()

    const regexDate = '^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])$'
    const regexName = '^[a-zA-Z]+$'
    const regexAge = '^0?[1-9]|[1-9][0-9]'

    const handleSubmit = (event: any) => {

        event.preventDefault();

        if (!loading) {
            setLoading(true);
            timer.current = window.setTimeout(() => {
              setLoading(false);
              if(currentValues.name.trim() !== "" &&
              currentValues.age > 0 &&
              currentValues.favBrowser !== "" &&
              currentValues.birthday !== "") {

              viewModel.addRegister(currentValues)
              setCurrentValues(new FormData())
              setSuccessOpen(true)

              } else {setErrorOpen(true)}

            }, 1700);
        
        }
    }

    const handleInputChange = (event : any) => {

        const { name, value } = event.target;

        setCurrentValues({
            ...currentValues,
            [name]: value,
        });
    };

    const handleCloseSnack = (event?: React.SyntheticEvent | Event, reason?: string) => {

        if (reason === 'clickaway') {
            return;
        }

        setErrorOpen(false);
        setSuccessOpen(false);
    };    

    useEffect(() => {
        return () => {
          clearTimeout(timer.current);
        };
      }, []);

    return (
        <form onSubmit={handleSubmit}>
            <Grid container className={styles.gridContainer} spacing= {3}>
                <Grid item className={styles.marginTop}>
                    <TextField
                        id="name-input-form"
                        name="name"
                        label="Name"
                        type="text"
                        autoComplete='off'
                        inputProps={{ pattern: regexName}}
                        value={currentValues.name}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="birthday-input-form"
                        name="birthday"
                        label="Birthday"
                        type="text"
                        autoComplete='off'
                        helperText="Day / Month"
                        inputProps={{ pattern: regexDate}}
                        value={currentValues.birthday}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="age-input-form"
                        name="age"
                        label="Age"
                        type="text"
                        autoComplete='off'
                        inputProps={{ inputMode: 'numeric', pattern: regexAge }}
                        value={currentValues.age}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <FormControl>
                        <FormLabel>Favourite Browser</FormLabel>
                        <Select
                        name="favBrowser"
                        value={currentValues.favBrowser}
                        onChange={handleInputChange}
                        >
                            <MenuItem key="chrome" value="Chrome">
                                Chrome
                            </MenuItem>
                            <MenuItem key="firefox" value="Firefox">
                                Firefox
                            </MenuItem>
                            <MenuItem disabled key="microsoftedge " value="Microsoft Edge">
                                Microsoft Edge
                            </MenuItem>
                            <MenuItem key="opera " value="Opera">
                                Opera
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl>
                        <FormLabel>Do you like react?</FormLabel>
                        <RadioGroup
                        name="likeReact"
                        value={currentValues.likeReact}
                        onChange={handleInputChange}
                        row
                        >
                            <FormControlLabel
                                key="yesReact"
                                value="true"
                                control={<Radio size="small" />}
                                label="Yes"
                            />
                            <FormControlLabel
                                key="noReact"
                                value="false"
                                control={<Radio size="small" />}
                                label="No"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Button variant="contained" color="primary" type="submit" disabled={loading} className={styles.submitBtn}>
                {(loading && (
                    <CircularProgress size={24} sx={{mr: '8px', color: 'white'}}/>
                )) || (
                    <SaveIcon sx={{mr: '8px'}}/>
                )}
                 Send
                </Button>
            </Grid>
            <Snackbar open={errorOpen} autoHideDuration={3000} onClose={handleCloseSnack}>
                <Alert onClose={handleCloseSnack} severity="error" sx={{ width: '100%' }}>
                    Please fill all the fields in the form.
                </Alert>
            </Snackbar>
            <Snackbar open={successOpen} autoHideDuration={3000} onClose={handleCloseSnack}>
                <Alert onClose={handleCloseSnack} severity="success" sx={{ width: '100%' }}>
                    Form sent succesfully!
                </Alert>
            </Snackbar>
      
        </form>
    )

} 

export default FormView;