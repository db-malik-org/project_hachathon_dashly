import React from 'react'
import { Pie } from 'react-chartjs-2'

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
        backgroundColor: ['#384d00', '#2D9596', '#9AD0C2', '#265073', 'rgba(75, 192, 192, 0.6)', 'rgba(255, 159, 64, 0.6)'],
        hoverBackgroundColor: [ 'rgba(75, 192, 192, 0.6)', 'rgba(25, 28, 22, 0.6)'],
      },
    ],
  }

  const canvasStyle = {
    marginTop: '100px',
    width: '345px', // You can use pixels or percentage based on your preference
    height: '345px',
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
