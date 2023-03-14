import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PieChart from '../../component/pieChart';
import ParkingDataCard from '../../component/parkingDataCard';

const OccupancyLayout = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }} m={0}>
      <Grid container spacing={3} p={4}>
        <Grid item lg={4} md={12} xs={12}>
          <Card
            sx={{
              height: 400,
            }}
          >
            <CardContent>
              <Typography variant='h5' m={3}>
                {' '}
                Car Parking Occupancy (Total){' '}
              </Typography>
              <PieChart
                occupied={props?.occupied || 0}
                vacant={props?.vacant || 0}
                height={250}
              />

              <Typography variant='h6' m={3}>
                Current Utilization: {props?.currentUtilizationInPercentage}%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={8} md={12} xs={12}>
          <Card
            sx={{
              height: 'max-content',
              paddingBottom: '18px',
              marginBottom: '50px',
              textAlign: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant='h6' align='left' ml={2} mt={1}>
              {' '}
              Parking Occupancy (Level-wise)
            </Typography>

            <Grid container m={0.2} spacing={3} pt={2} align='left'>
              {props?.parkingLevelOccupancy?.map((levelParkingData) => (
                <Grid item md={6} xs={12} key={levelParkingData?.level}>
                  <ParkingDataCard levelParkingData={levelParkingData} />
                </Grid>
              ))}
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OccupancyLayout;
