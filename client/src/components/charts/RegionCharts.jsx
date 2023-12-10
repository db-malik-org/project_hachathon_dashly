import React from 'react';
import VilleChart from './VilleChart';

const RegionCharts = ({ impots }) => {
  // Group impots by 'region', 'departement', 'ville', and 'annee'
  const groupedData = impots.reduce((acc, entry) => {
    const regionKey = entry.region;
    acc[regionKey] = acc[regionKey] || { region: regionKey, departments: {} };

    const departmentKey = entry.departement;
    acc[regionKey].departments[departmentKey] = acc[regionKey].departments[departmentKey] || { department: departmentKey, villes: {} };

    const villeKey = entry.ville;
    acc[regionKey].departments[departmentKey].villes[villeKey] = acc[regionKey].departments[departmentKey].villes[villeKey] || [];
    acc[regionKey].departments[departmentKey].villes[villeKey].push(entry);

    return acc;
  }, {});

  // Function to get an array of regions
  const getRegionArray = (groupedData) => {
    return Object.values(groupedData).map((region) => ({
      region: region.region,
      departments: Object.values(region.departments).map((department) => ({
        department: department.department,
        villes: Object.keys(department.villes),
      })),
    }));
  };

  // Create components for each region
  const regionArray = getRegionArray(groupedData);

console.log(regionArray);
  return null; // Return your actual JSX here
};

export default RegionCharts;
