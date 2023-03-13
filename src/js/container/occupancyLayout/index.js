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
                Current Utilization: {props?.currentUtilizationInPercentage}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={8} xs={12}>
          <Card
            sx={{
              height: 400,
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
                <Grid item md={6} xs={12}>
                  <Card
                    key={levelParkingData?.level}
                    raised
                    style={{ backgroundColor: '#E8E8E8', marginRight: '2rem' }}
                  >
                    <CardContent className={classes?.cardContent}>
                      <Typography
                        gutterBottom
                        variant='subtitle1'
                        component='div'
                      >
                        Parking Level- {levelParkingData?.level}
                      </Typography>
                      <DonutChart
                        occupied={levelParkingData?.occupied || 0}
                        vacant={levelParkingData?.vacant || 0}
                        height={180}
                      />

                      <Typography gutterBottom variant='body1' component='div'>
                        To view the map of {props?.levelParkingData?.level}{' '}
                        parking level click on the button below
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        onClick={() =>
                          openMap(
                            levelParkingData?.level?.toLowerCase(),
                            parkingMap
                          )
                        }
                        variant='contained'
                        size='small'
                      >
                        Open Map
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default withStyles(styles)(OccupancyLayout);
