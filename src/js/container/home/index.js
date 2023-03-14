import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOverallParkingInformation } from '../../store/dashboard/action';
import { getOverallParkingDetails } from '../../store/dashboard/selector';
import { getGlobalRefresh } from '../../store/sensors/selector';
import OccupancyLayout from '../occupancyLayout';

const Home = () => {
  const [parkingDetails, setParkingDetails] = useState({});

  const dispatch = useDispatch();

  const overallParkingDetails = useSelector((state) =>
    getOverallParkingDetails(state)
  );

  const refreshFlag = useSelector((state) => getGlobalRefresh(state));

  useEffect(() => {
    dispatch(getOverallParkingInformation());
  }, [refreshFlag]);

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
