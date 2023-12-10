import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const BarChart = ({ impots }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Impots Data Bar Chart',
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
      },
    },
  }

  // Sort the impots array based on Moyenne Impôt Euros in descending order
  const sortedImpots = impots.sort((a, b) => b.moyenne_Impot_Euros - a.moyenne_Impot_Euros)

  // Take only the top 10 entries
  const top10Impots = sortedImpots.slice(0, 10)


   // Generate a gradient background color for each bar
   const backgroundColors = generateGradientColors(top10Impots.length);

  const labels = top10Impots.map((entry) => entry.ville)
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Moyenne Impôt Euros',
        data: top10Impots.map((entry) => entry.moyenne_Impot_Euros),
        backgroundColor: backgroundColors,
      },
    ],
  }

  return <Bar options={options} data={data} />
}

// Function to generate gradient background colors
const generateGradientColors = numColors => {
  const colors = [];
  const baseColor = [255, 99, 132]; // RGB values for the base color

  for (let i = 0; i < numColors; i++) {
    const factor = i / (numColors - 1); // Adjust factor for smooth gradient
    const mixedColor = baseColor.map((channel, index) =>
      Math.round(channel * (1 - factor))
    );
    colors.push(`rgba(${mixedColor.join(',')}, 0.5)`);
  }

  return colors;
};

export default BarChart
