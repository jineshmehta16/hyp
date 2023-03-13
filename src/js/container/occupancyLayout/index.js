import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { withStyles } from '@mui/styles';
import styles from './styles';
import PieChart from '../../component/pieChart';
import DonutChart from '../../component/donutChart';

import { useNavigate } from 'react-router-dom';

import parkingMap from '../../../assets/images/lowerbasement.png';

const OccupancyLayout = (props) => {
  const { classes } = props;
  const navigate = useNavigate();

  const openMap = (level, image) => {
    navigate(`/parkingMap/${level}`, { state: { imagePath: image } });
  };
  return (
    <Box sx={{ flexGrow: 1 }} m={0}>
      <Grid container spacing={3} p={4}>
        <Grid item md={4} xs={12}>
          <Card
            sx={{
              height: 260,
              border: '3px solid',
              borderColor: (theme) => theme?.status?.success,
            }}
          >
            <Typography variant='h5' m={3}>
              {' '}
              Car Parking Occupancy (Total){' '}
            </Typography>
            <PieChart
              occupied={props?.occupied || 0}
              vacant={props?.vacant || 0}
              height={170}
            />

            <Typography variant='body2' m={3}>
              Current Utilization: {props?.currentUtilizationInPercentage}
            </Typography>
          </Card>
        </Grid>
        <Grid item md={8} xs={12}>
          <Box
            sx={{
              height: 260,
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
                <Card sx={{ maxWidth: 345 }} key={levelParkingData?.level}>
                  <CardContent className={classes?.cardContent}>
                    <Typography gutterBottom variant='h5' component='div'>
                      Parking Level- {levelParkingData?.level}
                    </Typography>
                    <DonutChart
                      occupied={props?.occupied || 0}
                      vacant={props?.vacant || 0}
                      height={100}
                    />
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => openMap('b1', parkingMap)}
                      variant='contained'
                      size='small'
                    >
                      Open Map
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default withStyles(styles)(OccupancyLayout);
