import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

const OccupancyLayout = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box
            sx={{
              height: 300,
              border: '5px solid green',
            }}
          >
            <Typography variant='h5'>
              {' '}
              Car Parking Occupancy (Total){' '}
            </Typography>

            <LinearProgress variant='determinate' value={50} />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              height: 300,
              border: '5px solid green',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default OccupancyLayout;
