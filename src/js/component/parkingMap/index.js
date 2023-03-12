import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import parkingMap from '../../../assets/images/lowerbasement.png';
import parkingMap2 from '../../../assets/images/upperbasement.png';

const ParkingMap = (props) => {
  const { state } = useLocation();
  const [dataSet, setDataset] = useState([]);
  const count = useRef(0);

  console.log(state);
  useEffect(() => {
    document.getElementById('map').onclick = function (e) {
      let percentX = e?.clientX / this.offsetWidth;
      let percentY = e?.clientY / this.offsetHeight;
      console.log(percentX* 100)
      console.log(percentY* 100)
      setDataset((pre) => [
        ...pre,
        {
          parkingNumber: count.current,
          xCord: percentX * 100,
          yCord: percentY * 100,
          occupied: true,
        },
      ]);
      count.current += 1;
    };
  }, []);

  useEffect(() => {
    axios.get('/db/parkingMapData.json').then((response) => {
      console.log(response);
      setDataset(response?.data);
    });
  }, []);

  return (
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
          position: 'relative',
          width: '100%',
          height: '100%',
          zIndex: 2,
        }}
      />
      {dataSet.map((each) =>
        each?.occupied ? (
          <div
            key={each?.parkingNumber}
            style={{
              width: each?.position === 'H' ? '45px' : '13px',
              height: each?.position === 'H' ? '9px': '33px',
              background: 'green',
              position: 'absolute',
              top: `${each?.yCord}%`,
              left: `${each?.xCord}%`,
              color: 'white',
              fontSize: '9px',
              fontWeight:'bold',
              zIndex:4,
              textAlign: 'center',
            }}
          >
            {each?.parkingNumber}
          </div>
        ) : null
      )}
    </div>
  );
};

export default ParkingMap;
