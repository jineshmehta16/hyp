import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function GuestParkingDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant='outlined'
        onClick={handleClickOpen}
        color='secondary'
        sx={{
          border: '2px solid',
          marginRight: '10px',
        }}
      >
        Guest Checkin
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Request for Guest Parking</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter One Time Password(OTP)</DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='OTP'
            fullWidth
            variant='outlined'
            sx={{ marginBottom: '10px', width: '100%' }}
          />

          <InputLabel id='demo-simple-select-label'>
            Select your company name
          </InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            label='Age'
            defaultValue='TCS'
            fullWidth
          >
            <MenuItem value='TCS'>TCS</MenuItem>
            <MenuItem value='Infosys'>Infosys</MenuItem>
            <MenuItem value='Paytm'>Paytm</MenuItem>
            <MenuItem value='Accenture'>Accenture</MenuItem>
            <MenuItem value='GooglePay'>GooglePay</MenuItem>
            <MenuItem value='Capita'>Capita</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
