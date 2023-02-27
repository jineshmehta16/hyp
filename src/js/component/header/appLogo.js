import React from 'react';
import { NavLink } from 'react-router-dom';
import { LogoDetails } from '../../data/staticAppData';
import Box from '@mui/material/Box';
import styles from './styles';

export const AppLogo = ({ classes }) => {
  return (
    <Box
      px={{ xs: 0, sm: 0, md: 3, lg: 3 }}
      pt={{ xs: 2, sm: 2, md: 0, lg: 0 }}
    >
      <NavLink className={classes?.headerLinks} to={'/'}>
        <img
          className="img-auto"
          src={LogoDetails.logoHeader}
          alt={LogoDetails.name}
        ></img>
      </NavLink>
    </Box>
  );
};

export default AppLogo