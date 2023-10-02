import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { withStyles } from '@mui/styles';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { manageToast, setOverlayStatus } from '../../store/common/actions';
import { getRefreshedPageData } from '../../store/common/selectors';
import { get } from '../../axiosUtils/appUtils';

const ParkingMap = (props) => {
  const { classes } = props;
  const dispatch = useDispatch();
  const { state } = useLocation();
  const [dataSet, setDataset] = useState([]);
  const [parkingStatus, setParkingStatus] = useState({});
  const refreshFlag = useSelector((state) => getRefreshedPageData(state));

  useEffect(() => {
    axios.get('/db/parkingMapData.json').then((response) => {
      state?.level && setDataset(response?.data?.[state?.level.toUpperCase()]);
    });
  }, []);

  const getMapData = () => {
    dispatch(setOverlayStatus(true));
    return get('/parking/map')
      .then((response) => {
        if (response?.data?.status?.toUpperCase() === 'SUCCESS') {
          response?.data?.data?.sensors && setParkingStatus(response?.data?.data?.sensors);
        } else {
          const obj = {
            title: 'error',
            message: 'Unable to fetch map data. Please check the URL.',
            status: true,
            type: 'error',
          };
          dispatch(manageToast(obj));
        }
        dispatch(setOverlayStatus(false));
      })
      .catch((error) => {
        const obj = {
          title: 'error',
          message: error.title,
          status: true,
          type: 'error',
        };
        dispatch(manageToast(obj));
        dispatch(setOverlayStatus(false));
      });
  
  }

  useEffect(() => {
     getMapData();
  }, [refreshFlag]);


  return (
    <>
      <div id='map' className={classes.wrapper}>
        <img src={state?.imagePath} alt='Flow Design and Layout' className={classes.image} />
        {dataSet.map((each) => {
          let bgColor = +parkingStatus?.[each?.parkingNumber]
          ? 'red'
          : 'green';

          if(each?.inactive){
            bgColor = 'black';
          }

          return(
            <div
              key={each?.parkingNumber}
              style={{
                width: each?.position === 'H' ? '2%' : '1.3%',
                height: each?.position === 'H' ? '11px' : '33px',
                background: bgColor,
                position: 'absolute',
                top: `${each?.yCord}%`,
                left: `${each?.xCord}%`,
                color: 'yellow',
                fontSize: '9px',
                fontWeight: 'bold',
                zIndex: 4,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {each?.parkingNumber}
            </div>
          )
        })}
      </div>
    </>
  );
};

export default withStyles(styles)(ParkingMap);
