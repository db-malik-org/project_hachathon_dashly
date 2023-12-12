import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'

const GlobalLigneProgressContribuable = ({ data }) => {
  const [preparedData, setPreparedData] = useState([])
 console.log(data);

  useEffect(() => {
    const prepareData = (data) => {
      const result = []

      data.forEach((region) => {
        region.data.forEach((departement) => {
          const departementData = departement.data

          departementData.forEach((villeData) => {
            const { annee, nombre_de_Contribuables } = villeData.data

            const existingYearIndex = result.findIndex((entry) => entry.annee === annee)

            if (existingYearIndex !== -1) {
              result[existingYearIndex].nombre_de_Contribuables += nombre_de_Contribuables // Add to global_Contribuable
            } else {
              result.push({
                annee,
                nombre_de_Contribuables,
              })
            }
          })
        })
      })

      return result
    }

    const preparedData = prepareData(data)
    setPreparedData(preparedData)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const chartData = {
    labels: preparedData.map((entry) => entry.annee),
    datasets: [
      {
        label: 'Evolution du Nombre de Contribuables',
        data: preparedData.map((entry) => entry.nombre_de_Contribuables),
        fill: false,
        borderColor: '#651f18',
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: '#ff6b6b',
      },
    ],
  }

  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'Année',
        },
        ticks: {
          callback: (value) => String(value).replace(/^2/, '2'), // Format as 2019, 2020, etc.
        },
      },
      y: {
        type: 'linear',
        position: 'left',
        title: {
          display: true,
          text: 'Montant',
        },
      },
    },
  }

  return <Line data={chartData} options={options} />
}

export default GlobalLigneProgressContribuable
