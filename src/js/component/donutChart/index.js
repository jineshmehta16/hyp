import React from 'react';
import Chart from 'react-apexcharts';

export default function PieChart({ occupied, vacant, height }) {
  const options = {
    chart: {
      foreColor: '#000000',
    },
    colors: ['#B30000', '#72cc50'],
    labels: ['occupied', vacant],
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
