import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import RefreshIcon from '@mui/icons-material/Refresh';
import Button from '@mui/material/Button';
import { refreshPageData } from '../../store/common/actions';
import { useDispatch, useSelector } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import { useLocation, useNavigate } from 'react-router-dom';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import {
  getRefreshedPageData,
  headerItemToggle,
} from '../../store/common/selectors';
import { headerTitle, buttonLabel } from '../../data/constants';
import ForwardSharpIcon from '@mui/icons-material/ForwardSharp';

const drawerWidth = 240;

const Header = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const isParkingMapPage = location.pathname.includes('parkingMap');

  const refreshFlag = useSelector((state) => getRefreshedPageData(state));
  const headeritemToggle = useSelector((state) => headerItemToggle(state));

  const logout = () => {
    localStorage.clear();
    navigate('/');
  };

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        {headerTitle}
      </Typography>
      <Divider />
      {headeritemToggle?.show_all && (
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <ListItem
            onClick={() => {
              dispatch(refreshPageData(!refreshFlag));
            }}
          >
            <ListItemAvatar>
              <Avatar>
                <RefreshIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={buttonLabel.REFRESH} />
          </ListItem>

          <ListItem onClick={logout}>
            <ListItemAvatar>
              <Avatar>
                <LogoutIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={buttonLabel.LOGOUT} />
          </ListItem>

          {isParkingMapPage && (
            <ListItem onClick={goToDashboard}>
              <ListItemAvatar>
                <Avatar>
                  <ForwardSharpIcon sx={{ transform: 'rotate(180deg)' }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={buttonLabel.BACK} />
            </ListItem>
          )}
        </List>
      )}
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', bgcolor: 'primary', m: '3rem', mb: '0.5rem' }}>
      <CssBaseline />
      <AppBar component='nav'>
        <Toolbar>
          {headeritemToggle?.show_all && (
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            {headerTitle}
          </Typography>
          {headeritemToggle?.show_all && (
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button
                variant='outlined'
                color='secondary'
                sx={{
                  border: '2px solid',
                  marginRight: '10px',
                }}
                onClick={() => {
                  dispatch(refreshPageData(!refreshFlag));
                }}
              >
                {buttonLabel.REFRESH}
                <RefreshIcon />
              </Button>
              <Button
                variant='outlined'
                color='secondary'
                sx={{
                  border: '2px solid',
                  marginRight: '10px',
                }}
                onClick={logout}
              >
                {buttonLabel.LOGOUT}
                <LogoutIcon />
              </Button>
              {isParkingMapPage && (
                <Button
                  variant='outlined'
                  color='secondary'
                  sx={{
                    border: '2px solid',
                    marginRight: '10px',
                  }}
                  onClick={goToDashboard}
                >
                  <ForwardSharpIcon sx={{ transform: 'rotate(180deg)' }} />
                </Button>
              )}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      {headeritemToggle?.show_all && (
        <Box component='nav'>
          <Drawer
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      )}
    </Box>
  );
};

export default Header;
