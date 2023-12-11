import React from 'react';
import { Pie } from 'react-chartjs-2';

const RegionDistributionByDepartmentsPieChart = ({ data }) => {
  // Group data by region and calculate the number of unique departments for each region
  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.region]) {
      acc[item.region] = new Set();
    }
    acc[item.region].add(item.departement);
    return acc;
  }, {});

  // Calculate the count of unique departments for each region
  const departmentCounts = Object.values(groupedData).map((set) => set.size);

  const regionData = {
    labels: Object.keys(groupedData),
    datasets: [
      {
        data: departmentCounts,
        backgroundColor: [
          '#5a786b',
          '#36A2EB',
          '#152c45',
          // Add more colors if needed
        ],
        hoverBackgroundColor: [
          '#636dff',
          '#8356ff',
          // Add more colors if needed
        ],
      },
    ],
  };

  return (
    <div>
      <h2>Distribution des régions par nombre de départements</h2>
      <Pie data={regionData} />
    </div>
  );
};

export default RegionDistributionByDepartmentsPieChart;
