import React, { useEffect, useState } from 'react'
import { Box, Card, CardContent, useTheme, useMediaQuery, Typography } from '@mui/material'

import Header from 'components/Header'
import ImpotByRegionChart from 'components/charts/ImpotByRegionCharts'
import ContrubuableByRegionCharts from 'components/charts/ContrubuableByRegionCharts'

import { getRegion } from '../../services/axiosInstance'
import CascadingSelect from 'components/CascadingSelect'

const Regions = ({ data }) => {
  const isNonMobile = useMediaQuery('(min-width: 1000px)')
  const theme = useTheme()
  const [regions, setRegions] = useState([])
  const [loadingRegions, setLoadingRegions] = useState(true)

  useEffect(() => {
    const fetchRegionData = async () => {
      try {
        const regions = await getRegion()
        setRegions(regions)
        setLoadingRegions(false)
      } catch (error) {
        console.error('Error fetching regions in component:', error)
      }
    }
    fetchRegionData()
  }, [])

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Analyse Des Regions" subtitle="" />
      {regions || loadingRegions ? (
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
              <ImpotByRegionChart data={regions} loading={loadingRegions} />
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
              <ContrubuableByRegionCharts data={regions} loading={loadingRegions} />
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
    // </Box>
  )
}

export default Regions
