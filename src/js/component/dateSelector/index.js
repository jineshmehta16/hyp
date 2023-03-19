import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormControl from '@mui/material/FormControl';
import { withStyles } from '@mui/styles';
import styles from './styles';

const DateSelector = (props) => {
  return (
    <>
      <FormControl sx={{ marginBottom: '10px', width: '100%' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label='Pick date'
            inputFormat='DD-MM-YYYY'
            value={props.updatedDate}
            onChange={props.setNewDate}
            disableFuture={true}
          />
        </LocalizationProvider>
      </FormControl>
    </>
  );
};

export default withStyles(styles)(DateSelector);
