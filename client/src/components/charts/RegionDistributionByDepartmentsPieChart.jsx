import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto'
import { fixedColorPalette, hoverColor } from "helpers/constant";

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
        backgroundColor: fixedColorPalette,
        hoverBackgroundColor: hoverColor,
      },
    ],
  };

  return (
    <div>
      <h2>Distribution des régions par nombre de départements</h2>
      <Pie  data={regionData} />
    </div>
  );
};

export default RegionDistributionByDepartmentsPieChart;
