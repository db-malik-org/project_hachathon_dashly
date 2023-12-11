import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'

const VilleChart = ({ villeData, villeName }) => {
  // Calculate the average Moyenne Impôt Euros over the years for the current ville
  const averages = villeData.map((entry) => ({
    annee: entry.annee,
    moyenne_Impot_Euros: entry.moyenne_Impot_Euros,
  }));

  // Sort the averages array by 'annee' (year)
  const sortedAverages = averages.sort((a, b) => a.annee - b.annee);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Evolution of Moyenne Impôt Euros for ${villeName} Over Years`,
      },
    },
  };

  const labels = sortedAverages.map((entry) => entry.annee);

  const data = {
    labels,
    datasets: [
      {
        label: `Moyenne Impôt Euros for ${villeName}`,
        data: sortedAverages.map((entry) => entry.moyenne_Impot_Euros),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default VilleChart;
