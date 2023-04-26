import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { withStyles } from '@mui/styles';
import styles from './styles';
import DateSelector from '../dateSelector';
import Grid from '@mui/material/Grid';
import dayjs from 'dayjs';

const InviteGuestDialog = (props) => {
  const { classes } = props;
  const [open, setOpen] = useState(false);

  const [inputs, setInputs] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((Values) => ({ ...Values, [name]: value }));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem('guestFormData'));

    const arr = data ? data : [];
    const date = dayjs(selectedDate, 'YYYY-MM-DD+h:mm').format('DD-MMM-YYYY');
    arr.push({ ...inputs, date, status: 'Not-Checked in' });
    localStorage.setItem('guestFormData', JSON.stringify(arr));
    handleClose();
    setInputs({});
    setSelectedDate(null);
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
        Invite Guest
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Request for Guest Parking</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <FormControl className={classes?.root}>
                  <FormLabel>Who is inviting the guest:</FormLabel>
                  <TextField
                    onChange={handleChange}
                    variant='outlined'
                    name='nameOfInviting'
                    value={inputs.nameOfInviting || ''}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl className={classes?.root}>
                  <FormLabel>Date of the visit: </FormLabel>
                  <DateSelector
                    setNewDate={setSelectedDate}
                    updatedDate={selectedDate}
                    views={['year', 'month', 'day']}
                    format='DD-MM-YYYY'
                    variant='outlined'
                  />
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl className={classes?.root}>
                  <FormLabel>Name of the guest:</FormLabel>
                  <TextField
                    onChange={handleChange}
                    variant='outlined'
                    name='guestName'
                    value={inputs.guestName || ''}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl className={classes?.root}>
                  <FormLabel>Company Name:</FormLabel>
                  <TextField
                    onChange={handleChange}
                    variant='outlined'
                    name='companyName'
                    value={inputs.companyName || ''}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl className={classes?.root}>
                  <FormLabel>Parking Zone name/ID:</FormLabel>
                  <TextField
                    onChange={handleChange}
                    variant='outlined'
                    name='parkingZone'
                    value={inputs.parkingZone || ''}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl className={classes?.root}>
                  <FormLabel>Guest Contact Number:</FormLabel>
                  <TextField
                    onChange={handleChange}
                    variant='outlined'
                    type='number'
                    name='guestContact'
                    value={inputs.guestContact || ''}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl className={classes?.root}>
                  <FormLabel>Guest Car Number:</FormLabel>
                  <TextField
                    onChange={handleChange}
                    variant='outlined'
                    name='guestCarNumber'
                    value={inputs.guestCarNumber || ''}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Button
              variant='contained'
              type='submit'
              sx={{ marginTop: '10px' }}
            >
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(InviteGuestDialog);
