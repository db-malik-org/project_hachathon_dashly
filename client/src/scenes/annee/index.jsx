import React, { useEffect, useState } from 'react'
import { Box, Card, CardContent, useTheme, useMediaQuery, Typography } from '@mui/material'

import Header from 'components/Header'
import ContrubuableByRegionCharts from 'components/charts/ContrubuableByRegionCharts'

import CascadingSelect from 'components/CascadingSelect'
import ImpotByYearCharts from "components/charts/ImpotByYearCharts"
import ContributorsByYearCharts from "components/charts/ContributorsByYearCharts"

const Annee = ({ data }) => {
  const isNonMobile = useMediaQuery('(min-width: 1000px)')
  const theme = useTheme()
  const [annee, setAnnee] = useState([])
  const [loadingRegions, setLoadingRegions] = useState(true)

  useEffect(() => {
// Function to get an array of {year, total_Impot}
const getTotalImpotByYear = (data) => {
  const resultArray = [];

  data.forEach((regionData) => {
    regionData.data.forEach((departementData) => {
      departementData.data.forEach((villeData) => {
        const existingYearIndex = resultArray.findIndex((entry) => entry.year === villeData.data.annee);

        if (existingYearIndex !== -1) {
          // If the year already exists in the resultArray, add the impot to the existing total
          resultArray[existingYearIndex].total_Impot += villeData.data.moyenne_Impot_Euros;
          resultArray[existingYearIndex].total_Contributor += villeData.data.nombre_de_Contribuables;
        } else {
          // If the year does not exist, create a new entry in the resultArray
          resultArray.push({
            year: villeData.data.annee,
            total_Impot: villeData.data.moyenne_Impot_Euros,
            total_Contributor: villeData.data.nombre_de_Contribuables,
          });
        }
      });
    });
  });
  
  return resultArray;
};

// Example usage:
const totalImpotByYear = getTotalImpotByYear(data);

console.log(totalImpotByYear);
setAnnee(totalImpotByYear)
  }, [data])

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Analyse Des Regions" subtitle="" />
      {annee || loadingRegions ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(2, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
          }}
        >
          <Card
            sx={{
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
              <ImpotByYearCharts data={annee} loading={loadingRegions} />
            </CardContent>
          </Card>

          <Card
            sx={{
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
              <ContributorsByYearCharts data={annee} loading={loadingRegions} />
            </CardContent>
          </Card>
        </Box>
      ) : (
        <>Loading...</>
      )}
      <Box m="1.5rem 2.5rem">
        <Typography>
          <h1>Progressions des Impot par region</h1>
        </Typography>
        <CascadingSelect data={data} />
      </Box>
    </Box>
  )
}

export default Annee
