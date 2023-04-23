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

const InviteGuestDialog = (props) => {
  const { classes } = props;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    alert('form submitted');
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
                  <TextField variant='outlined' />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl className={classes?.root}>
                  <FormLabel>Date of the visit: </FormLabel>
                  <DateSelector format='DD-MM-YYYY' variant='outlined' />
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl className={classes?.root}>
                  <FormLabel>Name of the guest:</FormLabel>
                  <TextField variant='outlined' />
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl className={classes?.root}>
                  <FormLabel>Company Name:</FormLabel>
                  <TextField variant='outlined' />
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl className={classes?.root}>
                  <FormLabel>Parking Zone name/ID:</FormLabel>
                  <TextField variant='outlined' />
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl className={classes?.root}>
                  <FormLabel>Guest Contact Number:</FormLabel>
                  <TextField variant='outlined' type='number' />
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl className={classes?.root}>
                  <FormLabel>Guest Car Number:</FormLabel>
                  <TextField variant='outlined' />
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
