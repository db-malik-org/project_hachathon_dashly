import React, { useEffect, useState } from 'react'
import FlexBetween from 'components/FlexBetween'
import Header from 'components/Header'
import { Box, useTheme, Card, CardContent, Typography } from '@mui/material'
import BarChart from 'components/charts/BarChart'

import { getImpots } from 'services/axiosInstance'
import RegionDistributionChart from 'components/charts/RegionDistributionChart'
import ImpotDistributionByYearPieChart from 'components/charts/ImpotDistributionByYearPieChart'
import RegionDistributionByDepartmentsPieChart from 'components/charts/RegionDistributionByDepartmentsPieChart'
import GlobalLigneProgressImpot from 'components/charts/GlobalLigneProgressImpot'
import GlobalLigneProgressContribuable from 'components/charts/GlobalLigneProgressContribuable'
import DepartmentCharts from "components/charts/DepartementCharts"

const Dashboard = ({ data }) => {
  const theme = useTheme()
  const [loading, setLoading] = useState(true)
  const [impots, setImpots] = useState([])

  useEffect(() => {
    const fetchRegionData = async () => {
      try {
        const impotData = await getImpots()
        setImpots(impotData)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching regions in component:', error)
      }
    }
    fetchRegionData()
  }, [])

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="DASHBOARD" subtitle="Bienvenue dans DASHLY" />
      </FlexBetween>
      <Box sx={{ display: 'flex', gap: '20px', mt: 10 }}>
        <Card
          sx={{
            margin: '2rem 0',
            width: '30%',
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
            <RegionDistributionChart data={impots} />
          </CardContent>
        </Card>

        <Card
          sx={{
            margin: '2rem 0',
            width: '30%',
            backgroundImage: 'none',
            backgroundColor: theme.palette.background.alt,
            borderRadius: '0.55rem',
          }}
        >
          <CardContent
            sx={{
              width: '500px',
              color: theme.palette.neutral[300],
            }}
          >
            <ImpotDistributionByYearPieChart data={impots} />
          </CardContent>
        </Card>

        <Card
          sx={{
            margin: '2rem 0',
            width: '30%',
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
            <RegionDistributionByDepartmentsPieChart data={impots} />
          </CardContent>
        </Card>
      </Box>
       <Typography  variant="h1" sx={{ color: theme.palette.neutral[300], mt: 10 }}>Evolution globale des impot et des contrubuables </Typography>
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
            <GlobalLigneProgressImpot data={data} />
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
            <GlobalLigneProgressContribuable data={data} />
          </CardContent>
        </Card>
      </Box>
      {/* ROW 3 */}
      <Box
        gridColumn="span 8"
        gridRow="span 3"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
            borderRadius: '5rem',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: theme.palette.background.alt,
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: 'none',
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <Box width={'70%'} mt="40px" gridColumn="span 8" gridRow="span 2" backgroundColor={theme.palette.background.alt} p="1rem" borderRadius="0.55rem">
            <BarChart impots={impots} />
          </Box>
        )}
      </Box>
      {/* <DepartmentCharts impots={data} /> */}
    </Box>
  )
}

export default Dashboard
