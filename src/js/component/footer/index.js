import React from 'react';
import Grid from '@mui/material/Grid';

const Footer = (props) => {
  const { classes } = props;
  return (
    <footer className={classes?.footerWrapper}>
        <Grid container spacing={1}>
          Footer....         
        </Grid>
    </footer>
  );
};
export default Footer;