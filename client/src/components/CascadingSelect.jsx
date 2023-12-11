import React, { useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import { Box, Button, Card, CardContent } from '@mui/material'
import LineChartProgressByYears from './charts/LineChartProgressByYears'
import { useTheme } from '@emotion/react'
import LineChartProgressByYearsContributor from "./charts/LineChartProgressByYearsContributor"

const CascadingSelect = ({ data }) => {
  const theme = useTheme()

  const [selectedRegion, setSelectedRegion] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [filtredData, setFiltredData] = useState([])
  // Get unique regions
  const regions = Array.from(new Set(data.map((item) => item.region))) || []

  // Get unique departments based on selected region
  const departments = selectedRegion ? Array.from(new Set(data.find((item) => item.region === selectedRegion)?.data.map((dep) => dep.departement) || [])) : []

  // Get cities based on selected region and department
  const cities =
    selectedRegion && selectedDepartment
      ? Array.from(
          new Set(
            data
              .find((item) => item.region === selectedRegion)
              ?.data.find((dep) => dep.departement === selectedDepartment)
              ?.data.map((city) => city.ville) || []
          )
        )
      : []

  const handleFilterApply = () => {
    const filteredData = data
      .filter((item) => item.region === selectedRegion)
      .flatMap((item) => item.data)
      .filter((dep) => dep.departement === selectedDepartment)
      .flatMap((dep) => dep.data)
      .filter((city) => city.ville === selectedCity)
      .flatMap((city) => city.data)

    // filteredData now contains the data corresponding to the selected region, department, and city
    console.log('Filtered Data:', filteredData)
    setFiltredData(filteredData)
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: '20px' }}>
        <Box sx={{ width: '300px' }}>
          <FormControl fullWidth>
            <InputLabel>Choisir Region</InputLabel>
            <Select
              value={selectedRegion}
              onChange={(e) => {
                setSelectedRegion(e.target.value)
                setSelectedDepartment('')
                setSelectedCity('')
              }}
            >
              {regions.map((region, index) => (
                <MenuItem key={index} value={region}>
                  {region}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: '300px' }}>
          <FormControl fullWidth>
            <InputLabel>Choisir Departement</InputLabel>
            <Select
              value={selectedDepartment}
              onChange={(e) => {
                setSelectedDepartment(e.target.value)
                setSelectedCity('')
              }}
            >
              {departments.map((department, index) => (
                <MenuItem key={index} value={department}>
                  {department}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: '300px' }}>
          <FormControl fullWidth>
            <InputLabel>Choisir Ville</InputLabel>
            <Select
              value={selectedCity}
              onChange={(e) => {
                setSelectedCity(e.target.value)
              }}
            >
              {cities.map((city, index) => (
                <MenuItem key={index} value={city}>
                  {city}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Button variant="contained" color="primary" onClick={handleFilterApply}>
          Valider
        </Button>
      </Box>

      <Box sx={{ display: 'flex', gap: '20px' }}>
        <Card
          sx={{
            margin: '2rem 0',
            width: '50%',
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
            <LineChartProgressByYears data={filtredData} />
          </CardContent>
        </Card>
        <Card
          sx={{
            margin: '2rem 0',
            width: '50%',
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
            <LineChartProgressByYearsContributor data={filtredData} />
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}

export default CascadingSelect
