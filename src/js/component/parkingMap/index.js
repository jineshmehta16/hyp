import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { withStyles } from '@mui/styles';
import styles from './styles';
import { useSelector } from 'react-redux';
import { getRefreshedPageData } from '../../store/common/selectors';

const ParkingMap = (props) => {
  const { classes } = props;
  const { state } = useLocation();
  const [dataSet, setDataset] = useState([]);
  const [parkingStatus, setParkingStatus] = useState({});
  const refreshFlag = useSelector((state) => getRefreshedPageData(state));

  // const count = useRef(0);

  // To read the data from JSON
  // const SENSORS_DATA = '/db/actualParkingMapData.json';
  const SENSORS_DATA = 'http://sanralpharma.com/webservices/public/parking/map';

  // const SENSORS_DATA =
  //   'https://api.parkomate.com/api/v2/occupancy?property=korum_thane&key=4f63a413-39c8-4ae8-bd6f-450294d90585&granularity=sensor';

  //   useEffect(() => {
  // //use this code to map parking numbers and its location===================================
  //     document.getElementById('map').onclick = function (e) {
  //       let percentX = e?.offsetX / this.offsetWidth;
  //       let percentY = e?.offsetY / this.offsetHeight;
  //       console.log(percentX * 100);
  //       console.log(percentY * 100);
  //       setDataset((pre) => [
  //         ...pre,
  //         {
  //           parkingNumber: count.current,
  //           xCord: percentX * 100,
  //           yCord: percentY * 100,
  //           occupied: true,
  //           position: 'H',
  //         },
  //       ]);
  //     };
  //   }, []);

  // //use this code to print the mapping and pass in floor json file
  // useEffect(() => {
  //   console.log(JSON.stringify(dataSet));
  // }, [dataSet]);

  useEffect(() => {
    axios.get('/db/parkingMapData.json').then((response) => {
      setDataset(response?.data);
    });

    axios.get(SENSORS_DATA).then((res) => {
      res?.data?.data?.sensors && setParkingStatus(res?.data?.data?.sensors);
    });
  }, [refreshFlag]);

  return (
    <>
      {/* parking number
      <input
        onChange={(e) => (count.current = e.target.value)}
        className={classes.textBox}
      /> */}

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
