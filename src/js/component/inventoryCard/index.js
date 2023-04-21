import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const InventoryCard = () => {
  return (
    <>
      <Card variant='outlined' sx={{ marginBottom: '38px' }}>
        <CardContent sx={{ marginTop: '10px', marginLeft: '80px' }}>
          <Typography>Total Inventory (4W)</Typography>
          <Grid container spacing={3} textAlign='center'>
            <Grid item>
              <Box sx={{ height: '120px', width: '120px', background: 'red' }}>
                {' '}
                500{' '}
              </Box>
              <Typography>Total Slots</Typography>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  height: '120px',
                  width: '120px',
                  background: 'green',
                }}
              >
                {' '}
                500{' '}
              </Box>
              <Typography>Available Slots</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default InventoryCard;
