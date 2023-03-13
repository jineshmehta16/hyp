import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOverallParkingInformation } from '../../store/dashboard/action';
import { getOverallParkingDetails } from '../../store/dashboard/selector';
import OccupancyLayout from '../occupancyLayout';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

import parkingMap from '../../../assets/images/lowerbasement.png';
import parkingMap2 from '../../../assets/images/upperbasement.png';

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

  return (
    <>
      <OccupancyLayout
        occupied={parkingDetails?.occupied}
        vacant={parkingDetails?.vacant}
        parkingLevelOccupancy={parkingDetails?.parkingLevelOccupancy}
        currentUtilizationInPercentage={
          parkingDetails?.currentUtilizationInPercentage
        }
      />
    </>
  );
};
export default Home;
