import React, { useEffect, useState, useMemo } from 'react';
import ParkingGrid from '../../component/parkingGrid';
import Grid from '@mui/material/Grid';
import InviteGuestDataGrid from '../../component/inviteGuestDataGrid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PieChart from '../../component/pieChart';

const ParkingGridContainer = () => {
  const dataForGuest = JSON.parse(localStorage?.getItem('guestFormData'));

  const values = useMemo(() =>
    JSON.parse(localStorage?.getItem('guestFormData'), [dataForGuest])
  );

  const intialColumnsData = [
    createData('TCS', 100, 20, 5, 8),
    createData('Infosys', 150, 9.0, 37, 4.3),
    createData('LTIMindtree', 200, 16.0, 24, 6.0),
    createData('Capita', 150, 3.7, 67, 4.3),
    createData('Persistent', 120, 16.0, 49, 3.9),
    createData('Paytm', 50, 16.0, 24, 6.0),
  ];

  const intialRowsData = [
    createData('TCS', Math.floor(Math.random() * 100)),
    createData('Infosys', Math.floor(Math.random() * 100)),
    createData('LTIMindtree', Math.floor(Math.random() * 100)),
    createData('Capita', Math.floor(Math.random() * 100)),
    createData('Persistent', Math.floor(Math.random() * 100)),
    createData('Paytm', Math.floor(Math.random() * 100)),
  ];

  const [rowsFourVehilers, setRowsFourVehilers] = useState(intialColumnsData);
  const [rowsTwoVehilers, setRowsTwoVehilers] = useState(intialRowsData);

  const columnsFourVehilers = [
    'Entity',
    'Allocated',
    'Entered',
    'exited',
    'Inside',
  ];
  const columnsTwoVehilers = ['Entity', 'Availability'];

  const columnsForGuestParkingData = [
    'Who is inviting?',
    'Date of the visit',
    'Name of the guest',
    'Company Name',
    'Parking Zone name/ID',
    'Guest Contact Number',
    'Guest Car Number',
    'Status',
  ];

  function createData(entity, allocated, entered, exited, inside) {
    return { entity, allocated, entered, exited, inside };
  }

  useEffect(() => {
    let interval = setInterval(() => {
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
      ]);

      setRowsTwoVehilers([
        createData('TCS', 159),
        createData('Infosys', 237),
        createData('LTIMindtree', 262),
        createData('Capita', 305),
        createData('Persistent', 356),
        createData('Paytm', 262),
      ]);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{
          height: '300px',
          marginTop: '10px',
        }}
      >
        <Grid item xs={9}>
          <Grid container spacing={3} sx={{ mb: '10px' }}>
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

          <InviteGuestDataGrid
            columns={columnsForGuestParkingData}
            dataForGuest={values}
          />
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent sx={{ padding: '4px 9px' }}>
              <Typography variant='h6' m={0} align='left'>
                {' '}
                Total cars
              </Typography>
              <PieChart occupied={200} vacant={300} height={450} />
              <Typography variant='span'>
                Available Parkings:<b>200</b>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ParkingGridContainer;
