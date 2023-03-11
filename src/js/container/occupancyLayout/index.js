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
    <Box sx={{ flexGrow: 1 }} m={0}>
      <Grid container spacing={3}>
        <Grid item md={8} xs={12}>
          <Box
            sx={{
              height: 160,
              border: '3px solid',
              borderColor: (theme) => theme?.status?.success,
            }}
          >
            <Typography variant='h5' m={3}>
              {' '}
              Car Parking Occupancy (Total){' '}
            </Typography>

            <Grid container spacing={6} m={2}>
              <Grid
                item
                xs={6}
                className={[classes?.barHeight, classes.root].join(' ')}
              >
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
                      color: (theme) => theme?.status?.occupied,
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
                      color: (theme) => theme?.status?.vacant,
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
        <Grid item md={4} xs={12}>
          <Box
            sx={{
              height: 160,
              border: '3px solid',
              borderColor: (theme) => theme?.status?.success,
              textAlign: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant='h6' align='left' ml={2}>
              {' '}
              Parking Occupancy (Level-wise)
            </Typography>

            <Grid container m={1} spacing={1} pt={1} align='left'>
              {props?.parkingLevelOccupancy?.map((levelParkingData) => (
                <React.Fragment key={levelParkingData?.level}>
                  <Grid item xs={2}>
                    <Typography variant='body1'>
                      {levelParkingData?.level}
                    </Typography>
                  </Grid>
                  <Grid item xs={9} className={classes?.root} align='left'>
                    <LinearProgress
                      variant='determinate'
                      value={levelParkingData?.occupied}
                    />
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
                        <Typography variant='body1'>
                          {' '}
                          {levelParkingData?.occupied}% Occupied{' '}
                        </Typography>
                      </Box>
                      <Box
                        component='span'
                        sx={{
                          marginLeft: 'auto',
                          color: ' #72cc50',
                        }}
                      >
                        <Typography variant='body1'>
                          {levelParkingData?.vacant}% Vacant{' '}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default withStyles(styles)(OccupancyLayout);
