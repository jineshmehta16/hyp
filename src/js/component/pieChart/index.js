import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { parkingStatus } from '../../data/constants';

export default function PieChart({ occupied, vacant, height }) {
  const theme = useTheme();
  const options = {
    chart: {
      type: 'pie',
    },
    colors: [theme?.status?.occupied, theme?.status?.vacant],
    labels: [parkingStatus?.OCCUPIED, parkingStatus?.VACANT],
    legend: {
      fontSize: '18px',
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -10,
        },
      },
    },
    dataLabels: {
      style: {
        fontSize: '1.2rem',
      },
    },
  };

  const series = [];
  series.push(occupied);
  series.push(vacant);

  return (
    <Box sx={{ paddingTop: '1.5rem' }}>
      <Chart options={options} series={series} type='pie' height={height} />
    </Box>
  );
}
