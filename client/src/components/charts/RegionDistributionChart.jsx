import React from 'react'
import { Pie } from 'react-chartjs-2'
import * as d3 from 'd3'

//this comonent is for :  Contribution des Municipalités dans le Nombre de Contribuables

const RegionPieChart = ({ data }) => {
  // Group data by region and calculate total nombre_de_Contribuables for each region
  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.region]) {
      acc[item.region] = 0
    }
    acc[item.region] += item.nombre_de_Contribuables
    return acc
  }, {})

  // Extract the total contributors for each region
  const contributors = Object.values(groupedData)

  // Define a color scale based on the number of contributors
  const colorScale = d3
    .scaleSequential(d3.interpolateCool) // Use the interpolateBlues color scheme
    .domain([Math.min(...contributors) * Math.random(), Math.max(...contributors)])

  const regionData = {
    labels: Object.keys(groupedData),
    datasets: [
      {
        data: Object.values(groupedData),
        backgroundColor: Object.values(groupedData).map((contributors) => colorScale(contributors)),
        hoverBackgroundColor: Object.values(groupedData).map((contributors) => colorScale(contributors)),
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

export default RegionPieChart
