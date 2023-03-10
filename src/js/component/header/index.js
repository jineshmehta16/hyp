import React, { useState } from 'react';
import styles from './styles';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { isMobile } from 'react-device-detect';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/material/Icon';
import Zoom from '@mui/material/Zoom';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/material/Icon';
import MenuItemHeader from './menuItem';
import AppLogo from './appLogo';
import Box from '@mui/material/Box';
import HeaderBanner from '../headerBanner';

const ScrollTop = (props) => {
  const { children, window, classes } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role='presentation' className={classes?.root}>
        {children}
      </div>
    </Zoom>
  );
};

const initialState = {
  anchorEl: null,
  searchInput: '',
  open: false,
  openDrawer: false,
};
const Header = (props) => {
  const { classes } = props;
  const [componentstate, setComponentstate] = useState(initialState);

  const open = Boolean(componentstate.anchorEl);

  const handleClick = (event) => {
    setComponentstate({
      ...componentstate,
      anchorEl: event.currentTarget,
    });
  };

  const handleClose = () => {
    setComponentstate({
      ...componentstate,
      anchorEl: null,
    });
  };
  const openSearchCityDialog = () => {
    setComponentstate({
      ...componentstate,
      open: true,
    });
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setComponentstate({
      ...componentstate,
      openDrawer: open,
    });
  };

  return (
    <>
      {isMobile ? (
        <>
          <AppBar position='static' className={classes?.mobileAppbar}>
            <Toolbar>
              <Box flexGrow={1}>
                <AppLogo />
              </Box>
              <Box>
                <SearchIcon fontSize='large' />
              </Box>
            </Toolbar>
          </AppBar>
        </>
      ) : (
        <>
          <AppBar
            position='static'
            color='default'
            id='back-to-top-anchor'
            className={`${'px-4 font-size-20px'} ${
              classes?.headerWhiteBackground
            }`}
          >
            <Toolbar className='d-flex justify-content-center aligm-items-center'>
              <AppLogo />

              {/* <Box
                display='flex'
                mr={6}
                className={`${'app-input'} ${classes?.headerInputWrapper}`}
              ></Box> */}

              {/* <MenuItemHeader
                open={open}
                handleClick={handleClick}
                anchorEl={componentstate.anchorEl}
                handleClose={handleClose}
              /> */}
            </Toolbar>
          </AppBar>
          <HeaderBanner />
        </>
      )}

      {!isMobile && (
        <ScrollTop {...props}>
          <Fab
            color='primary'
            className={classes?.scrollToTopBtn}
            size='small'
            aria-label='scroll back to top'
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      )}
    </>
  );
};
export default Header;
