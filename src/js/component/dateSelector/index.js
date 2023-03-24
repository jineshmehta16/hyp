import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { withStyles } from '@mui/styles';
import styles from './styles';

const DateSelector = (props) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={props?.label}
          inputFormat={props?.format}
          value={props?.updatedDate}
          onChange={props?.setNewDate}
          disableFuture={true}
          views={props?.views}
        />
      </LocalizationProvider>
    </>
  );
};

export default withStyles(styles)(DateSelector);
