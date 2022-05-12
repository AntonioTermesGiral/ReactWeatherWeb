import {ThemeProvider} from '@mui/material/styles';
import { observer } from 'mobx-react-lite';
import ThemePicker from './components/ThemePicker';
import Router from './components/Router';
import './styles/App.css';
import { CssBaseline } from '@mui/material';

function App() {

  var picker = ThemePicker.getInstance()

  return (
      <ThemeProvider theme={picker.getTheme}>
        <CssBaseline />
        <Router/>
      </ThemeProvider>
  );
}

export default observer(App);
