import React from 'react';
import Typography from '@mui/material/Typography';
import { withStyles } from '@mui/styles';
import styles from './styles';
import { footerText } from '../../data/constants';

const Footer = (props) => {
  const { classes } = props;
  return (
    <footer className={classes?.footerWrapper}>
      <Typography
        component='div'
        variant='body1'
        className={classes?.footerText}
      >
        {footerText}
      </Typography>
    </footer>
  );
};
export default withStyles(styles)(Footer);
