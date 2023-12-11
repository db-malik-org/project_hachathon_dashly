import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'

// chart top 5 first impots by region
const ContributorsByYearCharts = ({data, loading}) => {
  const colors = ['#66c2a5', '#071f1b', '#8da0cb', '#0f0e2b', '#a6d854'];


  const chartData = {
    labels: data.map(item => item.year),
    datasets: [
      {
        label: 'Totale Impot',
        data: data.map(item => item.total_Contributor),
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

export default ContributorsByYearCharts;
