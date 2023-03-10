import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOverallParkingInformation } from '../../store/dashboard/action';
import { getOverallParkingDetails } from '../../store/dashboard/selector';

const Home = () => {
  const [parkingDetails, setParkingDetails] = useState({});

  const dispatch = useDispatch();

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

  return <>{parkingDetails?.occupied}</>;
};
export default Home;
