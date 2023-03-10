import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import { withStyles } from '@mui/styles';
import styles from './styles';

const OccupancyLayout = (props) => {
  const { classes } = props;
  return (
    <Box sx={{ flexGrow: 1 }} m={3}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box
            sx={{
              height: 180,
              border: '5px solid green',
            }}
          >
            <Typography variant='h5' m={3}>
              {' '}
              Car Parking Occupancy (Total){' '}
            </Typography>

            <Grid container spacing={6} m={2}>
              <Grid item xs={6} className={classes?.root}>
                <LinearProgress variant='determinate' value={props?.occupied} />

                <Box
                  m={3}
                  sx={{
                    display: 'flex',
                  }}
                >
                  <Box
                    component='span'
                    sx={{
                      alignItems: 'flex-start',
                      color: '#B30000',
                    }}
                  >
                    <Typography variant='body1' fontWeight={600}>
                      {' '}
                      {props?.occupied}% <br /> Occupied{' '}
                    </Typography>
                  </Box>
                  <Box
                    component='span'
                    sx={{
                      marginLeft: 'auto',
                      color: ' #72cc50',
                    }}
                  >
                    <Typography variant='body1' fontWeight={600}>
                      {props?.vacant}% <br /> Vacant{' '}
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Typography
                  variant='h4'
                  sx={{ flexGrow: 1, textAlign: 'center' }}
                >
                  {' '}
                  {props?.occupied}%
                </Typography>
                <Typography
                  variant='h5'
                  sx={{ flexGrow: 1, textAlign: 'center' }}
                >
                  {' '}
                  Current Utilization
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              height: 180,
              border: '5px solid green',
              textAlign: 'center',
              justifyContent: 'center',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default withStyles(styles)(OccupancyLayout);
