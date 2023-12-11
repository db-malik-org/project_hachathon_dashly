import React from 'react'
import { Pie } from 'react-chartjs-2'
import 'chart.js/auto'
import { fixedColorPalette, hoverColor } from "helpers/constant"

const ImpotDistributionByYearPieChart = ({ data }) => {
  // Group data by year and calculate total impots for each year
  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.annee]) {
      acc[item.annee] = 0
    }
    acc[item.annee] += item.moyenne_Impot_Euros
    return acc
  }, {})

  const impotData = {
    labels: Object.keys(groupedData),
    datasets: [
      {
        data: Object.values(groupedData),
        backgroundColor: fixedColorPalette,
        hoverBackgroundColor: hoverColor,
      },
    ],
  }

  const canvasStyle = {
    marginTop: '130px',
    width: '355px', // You can use pixels or percentage based on your preference
    height: '355px',
  }
  return (
    <div>
      <h2>Distribution des impôts par année</h2>
      <div style={canvasStyle}>
        <Pie data={impotData} />
      </div>
    </div>
  )
}

export default ImpotDistributionByYearPieChart
