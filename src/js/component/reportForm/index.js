import React, { useState, useCallback } from 'react';
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
import dayjs from 'dayjs';
import DateSelector from '../dateSelector';
import {
  reportFormatType,
  buttonLabel,
  pickReportFormatLabel,
  years,
  months,
} from '../../data/constants';

const ReportForm = (props) => {
  const { classes } = props;
  const dispatch = useDispatch();
  const [reportFormat, setReportFormat] = useState(reportFormatType.DAILY);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const resetForm = useCallback(() => {
    setReportFormat(reportFormatType.DAILY);
    setSelectedDate(null);
    setSelectedMonth('');
    setSelectedYear('');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData =
      reportFormat === reportFormatType.DAILY
        ? {
            dailyReportDate: dayjs(selectedDate, 'YYYY-MM-DD+h:mm').format(
              'YYYY-MM-DD'
            ),
          }
        : {
            selectedMonth,
            selectedYear,
          };

    post('/report/daily', formData)
      .then(function (response) {
        const href = `http://sanralpharma.com/${response}`;
        const link = document.createElement('a');
        link.href = href;
        link.setAttribute('target', '_blank');
        link.setAttribute('download', 'dailyReport');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(href);

        resetForm();
      })
      .catch((error) => {
        const obj = {
          title: 'error',
          message: error.message,
          status: true,
          type: 'error',
        };
        dispatch(manageToast(obj));
        dispatch(setOverlayStatus(false));
      });
  };

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <FormControl sx={{ marginBottom: '10px' }}>
        <FormLabel>{pickReportFormatLabel}:</FormLabel>
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
      {reportFormat === reportFormatType.DAILY ? (
        <>
          <DateSelector
            setNewDate={setSelectedDate}
            updatedDate={selectedDate}
          />
        </>
      ) : (
        <>
          <FormControl
            sx={{ marginBottom: '10px' }}
            required={reportFormat === reportFormatType.MONTHLY}
          >
            <InputLabel>Month</InputLabel>
            <Select
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
            <InputLabel>Year</InputLabel>
            <Select
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
