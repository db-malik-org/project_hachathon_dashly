import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'

const GlobalLigneProgressImpot = ({ data }) => {
  const [preparedData, setPreparedData] = useState([])
  useEffect(() => {
    const prepareData = (data) => {
      const result = []

      data.forEach((region) => {
        region.data.forEach((departement) => {
          const departementData = departement.data

          departementData.forEach((villeData) => {
            const { annee, moyenne_Impot_Euros } = villeData.data

            // Check if the year is already in the result array
            const existingYearIndex = result.findIndex((entry) => entry.annee === annee)

            if (existingYearIndex !== -1) {
              // Update existing entry with the new values
              result[existingYearIndex].moyenne_Impot_Euros += moyenne_Impot_Euros // Add to global_Impot
            } else {
              // Add a new entry for the year
              result.push({
                annee,
                moyenne_Impot_Euros,
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
        label: 'Evolution du Total Impot',
        data: preparedData.map((entry) => entry.moyenne_Impot_Euros),
        fill: false,
        borderColor: '#505baf',
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: '#0f7767',
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
          callback: (value) => String(value).replace(/^2/, '2'),
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

  return (
      <Line data={chartData} options={options} />
  )
}

export default GlobalLigneProgressImpot
