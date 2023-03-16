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

const ReportForm = () => {
  const [reportFormat, setReportFormat] = useState('daily');
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
  };
  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '60%',
        marginLeft: '2rem',
        marginTop: '2rem',
      }}
      onSubmit={handleSubmit}
    >
      <FormControl sx={{ marginBottom: '10px' }}>
        <FormLabel id='demo-controlled-radio-buttons-group'>
          Pick the format of report:{' '}
        </FormLabel>
        <RadioGroup
          aria-labelledby='demo-controlled-radio-buttons-group'
          name='controlled-radio-buttons-group'
          value={reportFormat}
          onChange={(e) => setReportFormat(e.target.value)}
        >
          <FormControlLabel value='daily' control={<Radio />} label='Daily' />
          <FormControlLabel
            value='monthly'
            control={<Radio />}
            label='Monthly'
          />
        </RadioGroup>
      </FormControl>
      {reportFormat === 'daily' && (
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

      {reportFormat === 'monthly' && (
        <>
          <FormControl
            sx={{ marginBottom: '10px' }}
            required={reportFormat === 'monthly'}
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
                <MenuItem value={month}>{month}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            fullWidth
            sx={{ marginBottom: '10px' }}
            required={reportFormat === 'monthly'}
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
                <MenuItem value={year}>{year}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </>
      )}
      <Button variant='contained' type='submit'>
        {' '}
        Download
        <DownloadIcon />
      </Button>
    </form>
  );
};

export default ReportForm;
