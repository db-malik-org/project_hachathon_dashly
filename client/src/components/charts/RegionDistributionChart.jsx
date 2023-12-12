import React from 'react'
import { Pie } from 'react-chartjs-2'
import 'chart.js/auto'
import { fixedColorPalette, hoverColor } from "helpers/constant"


const RegionDistributionChart = ({ data }) => {
  // Group data by region and calculate total nombre_de_Contribuables for each region
  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.region]) {
      acc[item.region] = 0
    }
    acc[item.region] += item.nombre_de_Contribuables
    return acc
  }, {})

  const regionData = {
    labels: Object.keys(groupedData),
    datasets: [
      {
        data: Object.values(groupedData),
        backgroundColor: fixedColorPalette,
        hoverBackgroundColor: hoverColor,
      },
    ],
  }

  return (
    <div>
      <h2>Contribution des Municipalités dans le Nombre de Contribuables</h2>
      <Pie data={regionData} />
    </div>
  )
}

export default RegionDistributionChart
