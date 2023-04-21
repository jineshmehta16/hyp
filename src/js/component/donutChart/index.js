import React from 'react';
import { useTheme } from '@mui/material/styles';
import Chart from 'react-apexcharts';
import { parkingStatus } from '../../data/constants';

export default function DonutChart({ occupied, vacant, height }) {
  const theme = useTheme();
  const options = {
    chart: {
      foreColor: theme?.palette?.primary?.main,
    },
    colors: [theme?.status?.occupied, theme?.status?.vacant],
    labels: [parkingStatus?.OCCUPIED, parkingStatus?.VACANT],
    legend: {
      fontSize: '16px',
    },
    plotOptions: {
      pie: {
        donut: {
          size: '45%',
        },
      },
    },
    dataLabels: {
      style: {
        fontSize: '0.8rem',
      },
    },
  };

  const series = [];
  series.push(occupied);
  series.push(vacant);

  return (
    <div>
      <Chart options={options} series={series} type='donut' height={height} />
    </div>
  );
}
