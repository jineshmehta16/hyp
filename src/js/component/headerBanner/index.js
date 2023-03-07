import React from 'react';
import Typography from '@mui/material/Typography';
import { withStyles } from '@mui/styles';
import styles from './styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';

const HeaderBanner = (props) => {
  const { classes } = props;

  const getCurrentDateTime = () => {
    const today = new Date();
    let year = today.getFullYear();
    let month =
      today.getMonth() + 1 < 10
        ? '0' + (today.getMonth() + 1)
        : today.getMonth() + 1;

    let dd = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();
    let currentDate = dd + '-' + month + '-' + year;
    const currentTime = today.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });

    const dateTimeStr = currentDate + ' ' + currentTime;

    return dateTimeStr;
  };

  return (
    <Box className={classes?.headerBannerWrapper}>
      <Grid
        container
        direction='row'
        justify='space-around'
        alignItems='center'
      >
        <Grid item md={10}>
          <Stack direction='row' alignItems='center' gap={1}>
            <Avatar sx={{ width: 30, height: 30, bgcolor: '#67637780' }}>
              <HomeIcon />
            </Avatar>

            <Typography
              component='div'
              variant='h6'
              className={classes?.bannerText}
            >
              HyP Parking Management Dashboard
            </Typography>
          </Stack>
        </Grid>

        <Grid item md={2}>
          <Typography
            component='div'
            variant='h6'
            className={classes?.dateTimeText}
            justifyContent='flex-end'
            alignItems='center'
          >
            {getCurrentDateTime()}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
export default withStyles(styles)(HeaderBanner);
