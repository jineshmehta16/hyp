import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';

export default function PieChart({ occupied, vacant, height }) {
  const theme = useTheme();
  const occupiedColor = theme?.status?.occupied;
  const vacantColor = theme?.status?.vacant;
  const options = {
    chart: {
      type: 'pie',
    },
    colors: [occupiedColor, vacantColor],
    labels: ['occupied', 'vacant'],
    legend: {
      fontSize: '18px',
    },
    dataLabels: {
      style: {
        fontSize: '18px',
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
