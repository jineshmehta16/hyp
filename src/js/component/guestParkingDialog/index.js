import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function GuestParkingDialog() {
  const [open, setOpen] = useState(false);
  const [otp, setOTP] = useState('');
  const [carNumber, setCarNumber] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    const dataForGuest = JSON.parse(localStorage?.getItem('guestFormData'));
    const newObj = dataForGuest.map((obj) =>
      obj?.guestCarNumber === carNumber
        ? { ...obj, ...{ status: 'inside' } }
        : obj
    );
    localStorage.setItem('guestFormData', JSON.stringify(newObj));
    setOpen(false);
    setCarNumber('');
    setOTP('');
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
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            required
          />

          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Guest Car Number'
            fullWidth
            variant='outlined'
            sx={{ marginBottom: '10px', width: '100%' }}
            value={carNumber}
            onChange={(e) => setCarNumber(e.target.value)}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
