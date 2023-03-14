import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DonutChart from '../../component/donutChart';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';

import parkingMap from '../../../assets/images/lowerbasement.png';

const ParkingDataCard = ({ levelParkingData }) => {
  const navigate = useNavigate();

  const openMap = (level, image) => {
    navigate(`/parkingMap/${level}`, { state: { imagePath: image } });
  };
  return (
    <Card
      key={levelParkingData?.level}
      raised
      style={{ backgroundColor: '#E8E8E8', marginRight: '2rem' }}
    >
      <CardContent>
        <Typography gutterBottom variant='subtitle1' component='div'>
          Parking Level- {levelParkingData?.level}
        </Typography>
        <DonutChart
          occupied={levelParkingData?.occupied || 0}
          vacant={levelParkingData?.vacant || 0}
          height={180}
        />

        <Typography gutterBottom variant='body1' component='div'>
          To view the map of {levelParkingData?.level} parking level click on
          the button below
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() =>
            openMap(levelParkingData?.level?.toLowerCase(), parkingMap)
          }
          variant='contained'
          size='small'
        >
          Open Map
        </Button>
      </CardActions>
    </Card>
  );
};

export default ParkingDataCard;
