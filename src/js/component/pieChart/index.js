import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';

export default function PieChart({ occupied, vacant, height }) {
  const theme = useTheme();
  const options = {
    chart: {
      type: 'pie',
    },
    colors: [theme?.status?.occupied, theme?.status?.vacant],
    labels: ['occupied', 'vacant'],
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
    <div>
      <Chart options={options} series={series} type='pie' height={height} />
    </div>
  );
}
