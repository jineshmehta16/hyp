import React from 'react';
import Chart from 'react-apexcharts';

export default function PieChart({ occupied, vacant, height }) {
  const options = {
    chart: {
      type: 'pie',
    },
    colors: ['#B30000', '#72cc50'],
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
