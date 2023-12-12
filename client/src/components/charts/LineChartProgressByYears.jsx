import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'

const LineChartProgressByYears = ({ data }) => {


  
  const chartData = {
    labels: data.map(entry => entry.annee),
    datasets: [
      {
        label: 'Average Tax',
        data: data.map(entry => entry.moyenne_Impot_Euros),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: 'rgba(75,192,192,1)',
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
          text: 'Year',
        },
        ticks: {
          callback: (value) => String(value).replace(/^2/, '2'), 
        },
      },
      y: {
        type: 'linear',
        position: 'left',
        title: {
          display: true,
          text: 'Average Tax',
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChartProgressByYears;
