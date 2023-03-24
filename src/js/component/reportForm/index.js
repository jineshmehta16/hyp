import React, { useState, useCallback } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import { withStyles } from '@mui/styles';
import styles from './styles';
import { post } from '../../axiosUtils/appUtils';
import { useDispatch } from 'react-redux';
import { manageToast, setOverlayStatus } from '../../store/common/actions';
import DateSelector from '../dateSelector';
import {
  reportFormatType,
  buttonLabel,
  pickReportFormatLabel,
  pickDateLabel,
  pickDateYearLabel,
} from '../../data/constants';
import dayjs from 'dayjs';

const ReportForm = (props) => {
  const { classes } = props;
  const dispatch = useDispatch();
  const [reportFormat, setReportFormat] = useState(reportFormatType.DAILY);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonthYear, setSelectedMonthYear] = useState('');

  const resetForm = useCallback(() => {
    setReportFormat(reportFormatType.DAILY);
    setSelectedDate(null);
    setSelectedMonthYear('');
  }, []);

  const getMonth = useCallback(() => {
    const monthYearInput = new Date(selectedMonthYear);
    const getMonthName = new Intl.DateTimeFormat('en-US', { month: 'long' })
      .format;
    const selectedMonth = getMonthName(monthYearInput);
    return selectedMonth;
  }, [selectedMonthYear]);

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
            reportMonth: getMonth(),
            reportYear: new Date(selectedMonthYear).getFullYear(),
          };

    const reportUrl =
      reportFormat === reportFormatType.DAILY
        ? '/report/daily'
        : '/report/monthly';

    post(reportUrl, formData)
      .then(function (response) {
        const href = `http://sanralpharma.com/${response}`;
        const link = document.createElement('a');
        link.href = href;
        link.setAttribute('target', '_blank');
        link.setAttribute('download', 'Report');
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
          onChange={(e) => {
            setReportFormat(e.target.value);
          }}
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
      <FormControl sx={{ marginBottom: '10px', width: '100%' }}>
        {reportFormat === reportFormatType.DAILY && (
          <>
            <DateSelector
              setNewDate={setSelectedDate}
              updatedDate={selectedDate}
              label={pickDateLabel}
              format='DD-MM-YYYY'
              views={['year', 'month', 'day']}
            />
          </>
        )}

        {reportFormat === reportFormatType.MONTHLY && (
          <>
            <DateSelector
              setNewDate={setSelectedMonthYear}
              updatedDate={selectedMonthYear}
              label={pickDateYearLabel}
              format='MM-YYYY'
              views={['month', 'year']}
            />
          </>
        )}
      </FormControl>

      <Button variant='contained' type='submit'>
        {buttonLabel.DOWNLOAD}
        <DownloadIcon />
      </Button>
    </form>
  );
};

export default withStyles(styles)(ReportForm);
