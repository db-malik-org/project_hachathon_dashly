import { Box, Card, CardContent, FormControl, InputLabel, MenuItem, Select, Typography, useTheme } from '@mui/material'
import Header from 'components/Header'
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import regression from 'regression'
import 'chart.js/auto'

const LineChartPredictions = ({ data }) => {
  const [preparedData, setPreparedData] = useState([])
  const [selectedRegion, setSelectedRegion] = useState('')
  const theme = useTheme()

  const regions = data.map((entry) => entry.region)

  const handleChangeRegion = (event) => {
    setSelectedRegion(event.target.value)
  }

  const prepareDataForRegression = (data, selectedRegion) => {
    const regionData = data.find((region) => region.region === selectedRegion)

    if (!regionData) {
      return []
    }

    const allEntries = regionData.data.flatMap((department) => department.data)

    const entriesByYear = allEntries.reduce((acc, entry) => {
      const year = entry.data.annee

      if (!acc[year]) {
        acc[year] = []
      }

      acc[year].push(entry.data.moyenne_Impot_Euros)

      return acc
    }, {})

    const totalImpotByYear = Object.entries(entriesByYear).map(([year, impotArray]) => ({
      year: parseInt(year),
      total_Impot: impotArray.reduce((total, impot) => total + impot, 0),
    }))

    totalImpotByYear.sort((a, b) => a.year - b.year)

    return totalImpotByYear
  }

  useEffect(() => {
    const preparedData = prepareDataForRegression(data, selectedRegion)
    setPreparedData(preparedData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRegion])

  const years = preparedData.map((entry) => entry.year)
  const totalImpotValues = preparedData.map((entry) => entry.total_Impot)

  const regressionModel = regression.linear(years.map((_, index) => [years[index], totalImpotValues[index]]))

  const futureYears = [2023, 2024, 2025, 2026] 
  const predictedValues = futureYears.map((year) => ({
    year,
    total_Impot: regressionModel.predict(year)[1],
  }))

  const chartData = {
    labels: [...years, ...futureYears.map(String)],
    datasets: [
      {
        label: 'Progrès réel en cours',
        data: totalImpotValues,
        fill: false,
        borderColor: '#505baf',
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: '#4bc0ae',
      },
      {
        label: 'Progression prévue',
        data: [...totalImpotValues, ...predictedValues.map((entry) => entry.total_Impot)],
        fill: false,
        borderColor: '#ff6b6b',
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
          callback: (value) => String(value).replace(/^2/, '2'), 
        },
      },
      y: {
        type: 'linear',
        position: 'left',
        title: {
          display: true,
          text: 'Totale Impot',
        },
      },
    },
  }

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Prévisions fiscales pour les régions" subtitle="" />
      <Box sx={{ width: '80%', padding: '30px 0' }}>
        <Box sx={{ width: '300px' }}>
          <FormControl fullWidth>
            <InputLabel>Sélectionner une région</InputLabel>
            <Select value={selectedRegion} onChange={handleChangeRegion}>
              <MenuItem value="" disabled>
                Sélectionner une région
              </MenuItem>
              {regions.map((region, index) => (
                <MenuItem key={index} value={region}>
                  {region}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Card
        sx={{
          width: '80%',
          backgroundImage: 'none',
          backgroundColor: theme.palette.background.alt,
          borderRadius: '0.55rem',
        }}
      >
        <CardContent
          sx={{
            color: theme.palette.neutral[300],
          }}
        >
          {selectedRegion ? (
            <div>
              <Line data={chartData} options={options} />
            </div>
          ) : (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '100px' }}>
              <Typography sx={{ fontSize: '24px', fontWeight: '700' }}>Choisir une region pour voir les predictions</Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  )
}

export default LineChartPredictions
