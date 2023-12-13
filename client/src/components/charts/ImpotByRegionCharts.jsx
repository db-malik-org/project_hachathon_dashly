import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'

// chart top 5 first impots by region
const ImpotByRegionChart = ({data, loading}) => {
  const colors = ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854'];

  const top10Region = data.sort((a, b) => b.avgImpot - a.avgImpot).slice(0, 5);

  const chartData = {
    labels: top10Region.map(region => region.region),
    datasets: [
      {
        label: 'Average Impot',
        data: top10Region.map(region => region.avgImpot),
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace('0.8', '1')),
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Region',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Moyenne Impot',
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div>
      <h2>Top 5 moyens impots  par region</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default ImpotByRegionChart;
