import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import parkingMap from '../../../assets/images/lowerbasement.png';
import parkingMap2 from '../../../assets/images/upperbasement.png';

const ParkingMap = (props) => {
  const { state } = useLocation();
  const [dataSet, setDataset] = useState([]);
  const [parkingStatus, setParkingStatus] = useState({});
  const count = useRef(0);

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

  useEffect(() => {
    // actual  end pointcall  --  store
    // loop on sensors object object.entries() Object.key // will get the data
    // parallelk calls
    // json object se

    axios.get('/db/parkingMapData.json').then((response) => {
      setDataset(response?.data);
    });

    axios.get('/db/actualParkingMapData.json').then((res) => {
      console.log(res);
      res?.data?.sensors && setParkingStatus(res?.data?.sensors);
    });
  }, []);

  // //use this code to print the mapping and pase in floor json file
  // useEffect(() => {
  //   console.log(JSON.stringify(dataSet));
  // }, [dataSet]);

  return (
    <>
      {/* parking number
      <input
        onChange={(e) => (count.current = e.target.value)}
        width={300}
        style={{ position: 'relative' }}
      /> */}
      <div
        id='map'
        style={{
          width: '100vw',
          height: '100vh',
          border: '1px solid red',
          position: 'relative',
          overflow: 'auto',
        }}
      >
        <img
          src={state?.imagePath}
          alt='test'
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: 2,
          }}
        />
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

export default ParkingMap;
