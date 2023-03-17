import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import DownloadIcon from '@mui/icons-material/Download';
import { withStyles } from '@mui/styles';
import styles from './styles';
import { post } from '../../axiosUtils/appUtils';
import { useDispatch } from 'react-redux';
import { manageToast, setOverlayStatus } from '../../store/common/actions';
import {
  reportFormatType,
  buttonLabel,
  pickReportFormatLabel,
} from '../../data/constants';

const ReportForm = (props) => {
  const { classes } = props;
  const dispatch = useDispatch();
  const [reportFormat, setReportFormat] = useState(reportFormatType.DAILY);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const years = [
    '2023',
    '2022',
    '2021',
    '2020',
    '2019',
    '2018',
    '2017',
    '2016',
    '2015',
    '2014',
    '2013',
    '2012',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      reportFormat,
      selectedDate,
      selectedYear,
      selectedMonth,
    };
    console.log('formData', formData);

    //TODO- replace with actual endpoint

    // post('url', formData)
    //   .then((res) => {})
    //   .catch((error) => {
    //     const obj = {
    //       title: 'error',
    //       message: error.message,
    //       status: true,
    //       type: 'error',
    //     };
    //     dispatch(manageToast(obj));
    //     dispatch(setOverlayStatus(false));
    //   });
  };
  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <FormControl sx={{ marginBottom: '10px' }}>
        <FormLabel id='demo-controlled-radio-buttons-group'>
          {pickReportFormatLabel}:
        </FormLabel>
        <RadioGroup
          aria-labelledby='demo-controlled-radio-buttons-group'
          name='controlled-radio-buttons-group'
          value={reportFormat}
          onChange={(e) => setReportFormat(e.target.value)}
        >
          <FormControlLabel
            value={reportFormatType.DAILY}
            control={<Radio />}
            label='Daily'
          />
          <FormControlLabel
            value={reportFormatType.MONTHLY}
            control={<Radio />}
            label='Monthly'
          />
        </RadioGroup>
      </FormControl>
      {reportFormat === reportFormatType.DAILY && (
        <>
          <FormControl sx={{ marginBottom: '10px', width: '100%' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label='Pick date'
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                disableFuture={true}
              />
            </LocalizationProvider>
          </FormControl>
        </>
      )}

      {reportFormat === reportFormatType.MONTHLY && (
        <>
          <FormControl
            sx={{ marginBottom: '10px' }}
            required={reportFormat === reportFormatType.MONTHLY}
          >
            <InputLabel id='demo-simple-select-label'>Month</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={selectedMonth}
              label='Month'
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              {months?.map((month) => (
                <MenuItem value={month} key={month}>
                  {month}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            fullWidth
            sx={{ marginBottom: '10px' }}
            required={reportFormat === reportFormatType.MONTHLY}
          >
            <InputLabel id='demo-simple-select-label'>Year</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={selectedYear}
              label='Year'
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              {years?.map((year) => (
                <MenuItem value={year} key={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </>
      )}
      <Button variant='contained' type='submit'>
        {buttonLabel.DOWNLOAD}
        <DownloadIcon />
      </Button>
    </form>
  );
};

export default withStyles(styles)(ReportForm);
