import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChartProgressByYearsContributor = ({ data }) => {
  const chartData = {
    labels: data.map(entry => entry.annee.toString()),
    datasets: [
      {
        label: 'Evolution de Nombre de Contribuables',
        data: data.map(entry => entry.nombre_de_Contribuables),
        fill: false,
        borderColor: '#505baf',
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: '#4bc0ae',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'Année',
        },
      },
      y: {
        type: 'linear',
        position: 'left',
        title: {
          display: true,
          text: 'nombre de contribuables',
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            // Format the tooltip label
            return context.dataset.label + ': ' + context.parsed.y.toLocaleString();
          },
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChartProgressByYearsContributor;
