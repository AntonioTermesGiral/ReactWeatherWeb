import { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import { observer } from "mobx-react-lite";

//ViewModel
import ExtremaduraViewModel from '../viewmodels/ExtremaduraViewModel';

//Styles
import extremaduraStyles from './styles/ExtremaduraStyles';

//Components
import ExtremaduraTitle from '../components/Extremadura/ExtremaduraTitle';
import ExtremaduraTableHead from '../components/Extremadura/ExtremaduraTableHead';
import ExtremaduraTableBody from '../components/Extremadura/ExtremaduraTableBody';

const ExtremaduraView = () => {

  const viewModel = ExtremaduraViewModel.getInstance()
  const styles = extremaduraStyles();

  useEffect(() => {
    viewModel.requestData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <TableContainer>
      <ExtremaduraTitle/>
      <Table className={styles.maintable}>
        <ExtremaduraTableHead itemList={["City", "Temperature", "Wind Speed", "Clouds"]}/>
        <ExtremaduraTableBody list={viewModel.getWeather}/>
      </Table>
    </TableContainer>
  );

}

export default observer(ExtremaduraView);
