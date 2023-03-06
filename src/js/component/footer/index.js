import React from 'react';
import Typography from '@mui/material/Typography';
import { withStyles } from '@mui/styles';
import styles from './styles';

const Footer = (props) => {
  const { classes } = props;
  return (
    <footer className={classes?.footerWrapper}>
      <Typography
        component='div'
        variant='body1'
        className={classes.footerText}
      >
        HyP- Host your parking &copy;2023 Techprom IoT Solutions Pvt Ltd
      </Typography>
    </footer>
  );
};
export default withStyles(styles)(Footer);
