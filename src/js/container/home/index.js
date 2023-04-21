import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOverallParkingInformation } from '../../store/dashboard/action';
import { getOverallParkingDetails } from '../../store/dashboard/selector';
import { getRefreshedPageData } from '../../store/common/selectors';
import { headerItemsToggle } from '../../store/common/actions';
import OccupancyLayout from '../occupancyLayout';

const Home = () => {
  const [parkingDetails, setParkingDetails] = useState({});

  const dispatch = useDispatch();

  const overallParkingDetails = useSelector((state) =>
    getOverallParkingDetails(state)
  );

  const refreshFlag = useSelector((state) => getRefreshedPageData(state));

  useEffect(() => {
    dispatch(getOverallParkingInformation());
  }, [refreshFlag]);

    useEffect(() => {
    dispatch(headerItemsToggle({show_all:true}))
  },[]);

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
