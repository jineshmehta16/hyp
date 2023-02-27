import React, { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/material/Icon';
import MotorcycleIcon from '@mui/material/Icon';
import FavoriteIcon from '@mui/material/Icon';
import AccountCircleIcon from '@mui/material/Icon';
import styles from './styles';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export const BottomNavigationMobile = ({ classes }) => {
  const [value, setValue] = useState('home');
  const history = useHistory();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigateToUrl = (url) => {
    window.scrollTo(0, 0);
    history.push(url);
  };

  return (
    <Box className={classes?.bottomNavigationBoxWrapper}>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        showLabels
        className={classes?.bottomNavigationBox}
      >
        <BottomNavigationAction
          onClick={() => navigateToUrl('/')}
          label="Home"
          value="home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="Buy Bike"
          onClick={() => navigateToUrl('/view-bike')}
          value="buy"
          icon={<MotorcycleIcon />}
        />
        <BottomNavigationAction
          label="Wishlist"
          value="wishlist"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Sell Bike"
          onClick={() => navigateToUrl('/sell-bike')}
          value="sell"
          icon={<MotorcycleIcon />}
        />
        <BottomNavigationAction
          label="Account"
          value="account"
          icon={<AccountCircleIcon />}
        />
      </BottomNavigation>
    </Box>
  );
};

export default BottomNavigationMobile