import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { withStyles } from '@mui/styles';
import styles from './styles';
import { useSelector } from 'react-redux';
import { getRefreshedPageData } from '../../store/common/selectors';
import { get } from '../../axiosUtils/appUtils';

const ParkingMap = (props) => {
  const { classes } = props;
  const { state } = useLocation();
  const [dataSet, setDataset] = useState([]);
  const [parkingStatus, setParkingStatus] = useState({});
  const refreshFlag = useSelector((state) => getRefreshedPageData(state));

  useEffect(() => {
    axios.get('/db/parkingMapData.json').then((response) => {
      state?.level && setDataset(response?.data?.[state?.level.toUpperCase()]);
    });
  }, []);

  useEffect(() => {
    get('/parking/map').then((res) => {
      res?.data?.data?.sensors && setParkingStatus(res?.data?.data?.sensors);
    });
  }, [refreshFlag]);

  return (
    <>
      <div id='map' className={classes.wrapper}>
        <img src={state?.imagePath} alt='test' className={classes.image} />
        {dataSet.map((each) => (
          <div
            key={each?.parkingNumber}
            style={{
              width: each?.position === 'H' ? '2%' : '1.3%',
              height: each?.position === 'H' ? '11px' : '33px',
              background: +parkingStatus?.[each?.parkingNumber]
                ? 'red'
                : 'green',
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
        ))}
      </div>
    </>
  );
};

export default withStyles(styles)(ParkingMap);
