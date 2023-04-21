import React, { useEffect, useState } from 'react';
import ParkingGrid from '../../component/parkingGrid';
import Grid from '@mui/material/Grid';
import InventoryCard from '../../component/inventoryCard';

const ParkingGridContainer = () => {
  const columnsFourVehilers = [
    'Entity',
    'Allocated',
    'Entered',
    'exited',
    'Inside',
  ];

  const columnsTwoVehilers = ['Entity', 'Availability'];
  function createData(entity, allocated, entered, exited, inside) {
    return { entity, allocated, entered, exited, inside };
  }

  const intialColumnsData = [
    createData('TCS', 100, 20, 5, 8),
    createData('Infosys', 150, 9.0, 37, 4.3),
    createData('LTIMindtree', 200, 16.0, 24, 6.0),
    createData('Capita', 150, 3.7, 67, 4.3),
    createData('Persistent', 120, 16.0, 49, 3.9),
    createData('Paytm', 50, 16.0, 24, 6.0),
    createData('JP Morgans', 250, 3.7, 67, 4.3),
    createData('Accenture', 500, 16.0, 49, 3.9),
  ];

  const [rowsFourVehilers, setRowsFourVehilers] = useState(intialColumnsData);

  const intialRowsData = [
    createData('TCS', Math.floor(Math.random() * 100)),
    createData('Infosys', Math.floor(Math.random() * 100)),
    createData('LTIMindtree', Math.floor(Math.random() * 100)),
    createData('Capita', Math.floor(Math.random() * 100)),
    createData('Persistent', Math.floor(Math.random() * 100)),
    createData('Paytm', Math.floor(Math.random() * 100)),
    createData('JP Morgans', Math.floor(Math.random() * 100)),
    createData('Accenture', Math.floor(Math.random() * 100)),
  ];

  const [rowsTwoVehilers, setRowsTwoVehilers] = useState(intialRowsData);

  useEffect(() => {
    let interval = setInterval(() => {
      console.log('test');
      setRowsFourVehilers([
        createData(
          'TCS',
          100,
          Math.floor(Math.random() * 10 + 1),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 10 + 1)
        ),
        createData(
          'Infosys',
          150,
          Math.floor(Math.random() * 10 + 1),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 10 + 1)
        ),
        createData(
          'LTIMindtree',
          200,
          Math.floor(Math.random() * 10 + 1),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 10 + 1)
        ),
        createData(
          'Capita',
          150,
          Math.floor(Math.random() * 10 + 1),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 10 + 1)
        ),
        createData(
          'Persistent',
          120,
          Math.floor(Math.random() * 10 + 1),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 10 + 1)
        ),
        createData(
          'Paytm',
          50,
          Math.floor(Math.random() * 10 + 1),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 10 + 1)
        ),
        createData(
          'JP Morgans',
          250,
          Math.floor(Math.random() * 10 + 1),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 10 + 1)
        ),
        createData(
          'Accenture',
          500,
          Math.floor(Math.random() * 10 + 1),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 10 + 1)
        ),
      ]);

      setRowsTwoVehilers([
        createData('TCS', 159),
        createData('Infosys', 237),
        createData('LTIMindtree', 262),
        createData('Capita', 305),
        createData('Persistent', 356),
        createData('Paytm', 262),
        createData('JP Morgans', 305),
        createData('Accenture', 356),
      ]);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{ height: '300px', marginTop: '60px', padding: '20px' }}
      >
        <Grid item xs={9}>
          <Grid container spacing={3}>
            <Grid item xs={7}>
              <ParkingGrid
                columns={columnsFourVehilers}
                rows={rowsFourVehilers}
              />
            </Grid>
            <Grid item xs={5}>
              <ParkingGrid
                columns={columnsTwoVehilers}
                rows={rowsTwoVehilers}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <InventoryCard />
          <InventoryCard />
        </Grid>
      </Grid>
    </>
  );
};

export default ParkingGridContainer;
