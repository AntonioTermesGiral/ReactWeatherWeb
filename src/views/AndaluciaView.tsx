import {useEffect} from 'react';
import { observer } from "mobx-react-lite";
import { Box } from '@mui/material';

//ViewModel
import AndaluciaViewModel from '../viewmodels/AndaluciaViewModel';

//Components
import AndaluciaTitle from '../components/Andalucia/AndaluciaTitle';
import AndaluciaList from '../components/Andalucia/AndaluciaList';

//Styles
import andaluciaStyles from './styles/AndaluciaStyles';

const AndaluciaView = () => {

    var viewModel = AndaluciaViewModel.getInstance()

    var styles = andaluciaStyles()

    useEffect(() => {
      viewModel.requestData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <Box className={styles.defaultBox}>
        <AndaluciaTitle/>
        <AndaluciaList list={viewModel.getWeather}/>
    </Box>
  );

} 

export default observer(AndaluciaView);