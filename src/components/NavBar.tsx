import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ThemePicker from './ThemePicker';
import { Link } from 'react-router-dom';
import NavBarSwitch from './NavBarSwitch';
import { IconButton, ListItem, ListItemText, useMediaQuery, List, Drawer, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

//Styles
import navBarStyles from '../views/styles/NavBarStyles';

const pages = ['Aragon', 'Andalucía', 'Extremadura', 'Form', 'Results'];
const link = ['/Aragon', '/Andalucia', '/Extremadura', '/Form', '/Form_Results']

const NavBar = () => {

  const [checked, setChecked] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);

  var themePicker = ThemePicker.getInstance()
  const styles = navBarStyles()
  const matches = useMediaQuery(themePicker.getTheme.breakpoints.up('sm'))

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open)
  };

  return (
    <AppBar className={styles.appBar}>
      <Container className={styles.toolBarContainer}>
        <Toolbar disableGutters>
          {/*Pantalla de Movil*/}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }} className={styles.buttonBox}>
            <IconButton
              size="large"
              onClick={() => { toggleDrawer(true) }}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={() => { toggleDrawer(false) }}
              classes={{ paper: styles.paper }}
            >
              <Box className={styles.mobileBox}
                role="presentation"
                onClick={() => { toggleDrawer(false) }}
                onKeyDown={() => { toggleDrawer(false) }}
              >
                <Typography variant="h5" textAlign={"center"} sx={{mt: '5%',mb: '5%' , color: 'white'}}>Weather Web</Typography>
                <List>
                  {pages.map((page, index) => (
                    <Link to={link[index]} key={index} className={styles.buttonLink}>
                      <ListItem button className={styles.mobileElements}>
                        <ListItemText primary={page} />
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Box>
            </Drawer>
          </Box>
          {/*Pantalla de PC*/}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }} className={styles.buttonBox}>
            {pages.map((page, index) => (
              <Link to={link[index]} key={index} className={styles.buttonLink}>
                <Button variant='outlined' className={styles.menuButtons}>
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          {matches && <p className={styles.whiteColor}>Light Mode</p>}
          <NavBarSwitch
            checked={checked}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setChecked(event.target.checked);
              themePicker.ToggleColorMode();
            }} color="secondary" />
          {matches && <p className={styles.whiteColor}>Dark Mode</p>}
        </Toolbar>
      </Container>
    </AppBar>
  )

}

export default NavBar;