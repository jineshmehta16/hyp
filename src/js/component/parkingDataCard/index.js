import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DonutChart from '../../component/donutChart';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import {
  comingSoonCardTitle,
  parkingLevelSubtitle,
  availableParkingsLabel,
} from '../../data/constants';

const ParkingDataCard = ({ levelParkingData, imagepath }) => {
  const navigate = useNavigate();

  const openMap = (level, image) => {
    navigate(`/parkingMap/${level}`, {
      state: { imagePath: image, level: level },
    });
  };

  return (
    <Card
      raised
      sx={{
        backgroundColor: (theme) => theme?.palette?.cardBg?.main,
        marginRight: '2rem',
        margin: '1rem',
      }}
    >
      {levelParkingData && (
        <>
          <CardContent>
            <Typography gutterBottom variant='subtitle1' component='div'>
              {parkingLevelSubtitle} - {levelParkingData?.level}
            </Typography>
            <DonutChart
              occupied={levelParkingData?.occupied || 0}
              vacant={levelParkingData?.vacant || 0}
              height={180}
            />

            <Typography variant='span'>
              {availableParkingsLabel}:<b>{levelParkingData?.vacant || 0}</b>
            </Typography>
          </CardContent>
          <CardActions sx={{ marginTop: '-10px' }}>
            <Button
              onClick={() =>
                openMap(
                  levelParkingData?.level?.toLowerCase(),
                  imagepath,
                  levelParkingData?.level
                )
              }
              variant='contained'
              size='small'
            >
              Open Map
            </Button>
          </CardActions>
        </>
      )}
    </Card>
  );
};

export default ParkingDataCard;
