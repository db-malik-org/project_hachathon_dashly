import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useTheme } from "@mui/material";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ impots }) => {
  const theme = useTheme();

  // Group impots by 'annee' and calculate the average Moyenne Impôt Euros for each 'annee'
  const groupedData = impots.reduce((acc, entry) => {
    const key = entry.annee;
    acc[key] = acc[key] || { total: 0, count: 0 };
    acc[key].total += entry.moyenne_Impot_Euros;
    acc[key].count += 1;
    return acc;
  }, {});

  // Calculate the average for each 'annee'
  const averages = Object.keys(groupedData).map((key) => ({
    annee: parseInt(key),
    moyenne_Impot_Euros: groupedData[key].total / groupedData[key].count,
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
        text: 'Evolution of Average Moyenne Impôt Euros Over Years',
      },
    },
  };

  const labels = sortedAverages.map((entry) => entry.annee);

  const data = {
    labels,
    datasets: [
      {
        label: 'Average Moyenne Impôt Euros',
        data: sortedAverages.map((entry) => entry.moyenne_Impot_Euros),
        borderColor:theme.palette.primary,
        backgroundColor: 'rgb(37, 48, 42)',
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default LineChart;
