import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOverallParkingInformation } from '../../store/dashboard/action';
import { getOverallParkingDetails } from '../../store/dashboard/selector';
import OccupancyLayout from '../occupancyLayout';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const Home = () => {
  const [parkingDetails, setParkingDetails] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const overallParkingDetails = useSelector((state) =>
    getOverallParkingDetails(state)
  );

  useEffect(() => {
    dispatch(getOverallParkingInformation());
  }, [dispatch]);

  useEffect(() => {
    setParkingDetails((prev) => {
      return { ...prev, ...overallParkingDetails };
    });
  }, [overallParkingDetails]);

  const openMap = (level) => {
    navigate(`/parkingMap/${level}`);
  };

  return (
    <>
      <OccupancyLayout
        occupied={parkingDetails?.occupied}
        vacant={parkingDetails?.vacant}
        parkingLevelOccupancy={parkingDetails?.parkingLevelOccupancy}
      />

      <Button onClick={() => openMap('b1')} variant='contained'>
        Open Map
      </Button>
    </>
  );
};
export default Home;
