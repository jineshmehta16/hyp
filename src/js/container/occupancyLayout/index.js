import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PieChart from '../../component/pieChart';
import ReportForm from '../../component/reportForm';
import ParkingDataCard from '../../component/parkingDataCard';
import b1Map from '../../../assets/images/lowerbasement.png';
import b2Map from '../../../assets/images/upperbasement.png';
import {
  totalParkingCardTitle,
  levelwiseParkingCardTitle,
  downloadReportTitle,
  currentUtilization,
} from '../../data/constants';

const floorImagePath = {
  LB1: b1Map,
  UB1: b2Map,
};

const OccupancyLayout = (props) => {
  const emptyParkingData = {
    level: 'B2',
    occupied: 0,
    vacant: 100,
    currentUtilizationInPercentage: 0,
  };
  return (
    <Box sx={{ flexGrow: 1 }} m={0}>
      <Grid container spacing={3} p={4}>
        <Grid item lg={4} md={12} xs={12}>
          <Card
            sx={{
              height: '100%',
            }}
          >
            <CardContent sx={{ padding: '4px 9px' }}>
              <Typography variant='h6' m={0} align='left'>
                {' '}
                {totalParkingCardTitle}
              </Typography>
              <PieChart
                occupied={props?.occupied || 0}
                vacant={props?.vacant || 0}
                height={250}
              />

              <Typography variant='body1' m={5}>
                {currentUtilization} :
                <b>{props?.currentUtilizationInPercentage}%</b>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={8} md={12} xs={12}>
          <Card
            sx={{
              height: '100%',
              paddingBottom: '18px',
              marginBottom: '2rem',
              textAlign: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant='h6' align='left' ml={2} mt={1}>
              {levelwiseParkingCardTitle}
            </Typography>

            <Grid container m={0.2} spacing={3} pt={2} align='left'>
              {props?.parkingLevelOccupancy?.map((levelParkingData) => (
                <>
                  <Grid item md={6} xs={12} key={levelParkingData?.level}>
                    <ParkingDataCard
                      key={levelParkingData?.level}
                      levelParkingData={levelParkingData}
                      imagepath={floorImagePath?.[levelParkingData?.level]}
                    />
                  </Grid>
                </>
              ))}

              {props?.parkingLevelOccupancy?.length === 1 && (
                <Grid item md={6} xs={12}>
                  <ParkingDataCard
                    levelParkingData={emptyParkingData}
                    imagepath={floorImagePath?.['B2']}
                  />
                </Grid>
              )}
            </Grid>
          </Card>
        </Grid>

        <Grid item lg={4} md={12} xs={12}>
          <Card
            sx={{
              height: '100%',
            }}
          >
            <CardContent sx={{ padding: '4px 9px' }}>
              <Typography variant='h6' m={0} align='left'>
                {downloadReportTitle}
              </Typography>
              <ReportForm />
            </CardContent>
          </Card>
        </Grid>

        <Grid item lg={8} md={12} xs={12}>
          <Card
            sx={{
              height: '100%',
              paddingBottom: '18px',
              marginBottom: '2rem',
              textAlign: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant='h6' align='left' ml={2} mt={1}>
              {' '}
              {levelwiseParkingCardTitle}
            </Typography>

            <Grid container m={0.2} spacing={3} pt={2} align='left'>
              {props?.parkingLevelOccupancy?.map((levelParkingData) => (
                <>
                  <Grid item md={6} xs={12} key={levelParkingData?.level}>
                    <ParkingDataCard key={levelParkingData?.level} />
                  </Grid>
                </>
              ))}

              {props?.parkingLevelOccupancy?.length === 1 && (
                <Grid item md={6} xs={12}>
                  <ParkingDataCard
                    levelParkingData={emptyParkingData}
                    imagepath={floorImagePath?.['B2']}
                  />
                </Grid>
              )}
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OccupancyLayout;
