// import React from 'react'
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
// import { Line } from 'react-chartjs-2'
// import { useTheme } from '@mui/material'

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

// const LineChart = ({ impots }) => {
//   const theme = useTheme()

//   // Sort the averages array by 'annee' (year)
//   const sortedyears = impots.sort((a, b) => a.annee - b.annee)

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Evolution of Average Moyenne Impôt Euros Over Years',
//       },
//     },
//   }

//   const labels = sortedyears.map((entry) => entry.annee)

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: 'Average Moyenne Impôt Euros',
//         data: sortedyears.map((entry) => entry.moyenne_Impot_Euros),
//         borderColor: theme.palette.primary,
//         backgroundColor: 'rgb(37, 48, 42)',
//       },
//     ],
//   }

//   return <Line options={options} data={data} />
// }

// export default LineChart
