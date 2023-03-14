import React from 'react';
import { useTheme } from '@mui/material/styles';
import Chart from 'react-apexcharts';

export default function DonutChart({ occupied, vacant, height }) {
  const theme = useTheme();
  const options = {
    chart: {
      foreColor: theme?.palette?.primary?.main,
    },
    colors: [theme?.status?.occupied, theme?.status?.vacant],
    labels: ['occupied', 'vacant'],
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
