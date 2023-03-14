import React from 'react';
import { useTheme } from '@mui/material/styles';
import Chart from 'react-apexcharts';

export default function DonutChart({ occupied, vacant, height }) {
  const theme = useTheme();
  const occupiedColor = theme?.status?.occupied;
  const vacantColor = theme?.status?.vacant;
  const options = {
    chart: {
      foreColor: '#000000',
    },
    colors: [occupiedColor, vacantColor],
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
