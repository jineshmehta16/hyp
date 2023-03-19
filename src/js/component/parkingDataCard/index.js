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
      key={levelParkingData?.level}
      raised
      sx={{
        backgroundColor: (theme) => theme?.palette?.cardBg?.main,
        marginRight: '2rem',
      }}
    >
      {levelParkingData ? (
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
          </CardContent>
          <CardActions>
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
      ) : (
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            sx={{
              height: '15rem',
              textAlign: 'center',
              paddingTop: '7.5rem',
            }}
          >
            {comingSoonCardTitle}
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};

export default ParkingDataCard;
