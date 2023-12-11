import React from 'react';
import { Bar } from 'react-chartjs-2';

// chart top 5 first impots by region
const ImpotByYearCharts = ({data, loading}) => {
  const colors = ['#66c2a5', '#071f1b', '#8da0cb', '#2b0e20', '#a6d854'];

  const top10Region = data.sort((a, b) => b.avgImpot - a.avgImpot).slice(0, 5);

  const chartData = {
    labels: top10Region.map(region => region.year),
    datasets: [
      {
        label: 'Totale Impot',
        data: top10Region.map(region => region.total_Impot),
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
          text: 'Année',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Totale Impot',
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
      <h2>Les  impots  par année</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default ImpotByYearCharts;
