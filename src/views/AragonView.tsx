import { useEffect } from 'react';
import { observer } from "mobx-react-lite";
import { Box } from '@mui/material';

//ViewModel
import AragonViewModel from '../viewmodels/AragonViewModel';

//Components
import AragonTitle from '../components/Aragon/AragonTitle';
import AragonTable from '../components/Aragon/AragonTable';

//Styles
import aragonStyles from './styles/AragonStyles';

const AragonView = () => {

  var viewModel = AragonViewModel.getInstance()
  var styles = aragonStyles()

  useEffect(() => {
    viewModel.requestData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box className={styles.defaultBox}>
      <AragonTitle/>
      <AragonTable list={viewModel.getWeather}/>
    </Box>
  );

}

export default observer(AragonView);