import React from 'react';
import { Pie } from 'react-chartjs-2';

const transformDataForPieChart = (data, attribute) => {
  const uniqueValues = Array.from(new Set(data.map((item) => item[attribute])));
  const dataCount = uniqueValues.reduce(
    (count, value) => ({
      ...count,
      [value]: data.filter((item) => item[attribute] === value).length,
    }),
    {}
  );

  return {
    labels: Object.keys(dataCount),
    datasets: [
      {
        data: Object.values(dataCount),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
      },
    ],
  };
};

const DepartementPieChart = ({ data }) => {
  const departementData = transformDataForPieChart(data, 'departement');
  return (
    <div>
      <h2>Departement PieChart</h2>
      <Pie data={departementData} />
    </div>
  );
};

export default DepartementPieChart;
