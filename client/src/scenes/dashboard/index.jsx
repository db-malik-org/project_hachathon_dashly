import React, { useEffect, useState } from 'react'
import FlexBetween from 'components/FlexBetween'
import Header from 'components/Header'
import { Email, PointOfSale, PersonAdd, Traffic } from '@mui/icons-material'
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import OverviewChart from 'components/OverviewChart'
import StatBox from 'components/StatBox'
import BarChart from 'components/charts/BarChart'

import PieChart from 'components/charts/PieChart'
import LineChart from 'components/charts/LineChart'
import { getImpots } from 'services/axiosInstance'
import PieCharts from 'components/charts/PieCharts'
import DepartementPieChart from 'components/charts/PieCharts'
import RegionDistributionChart from 'components/charts/RegionDistributionChart'
import ImpotDistributionByYearPieChart from "components/charts/ImpotDistributionByYearPieChart"
import RegionDistributionByDepartmentsPieChart from "components/charts/RegionDistributionByDepartmentsPieChart"

const Dashboard = ({data}) => {
  const theme = useTheme()
  const isNonMediumScreens = useMediaQuery('(min-width: 1200px)')
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

  const columns = [
    {
      field: '_id',
      headerName: 'ID',
      flex: 1,
    },
    {
      field: 'userId',
      headerName: 'User ID',
      flex: 1,
    },
    {
      field: 'createdAt',
      headerName: 'CreatedAt',
      flex: 1,
    },
    {
      field: 'Regions',
      headerName: '# of Products',
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ]

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </FlexBetween>

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          '& > div': { gridColumn: isNonMediumScreens ? undefined : 'span 12' },
        }}
      >
        <Box gridColumn="span 4" gridRow="span 3" backgroundColor={theme.palette.background.alt} p="1.5rem" borderRadius="0.55rem">
          <RegionDistributionChart data={impots} />
        </Box>
        <Box gridColumn="span 4" gridRow="span 3" backgroundColor={theme.palette.background.alt} p="1.5rem" borderRadius="0.55rem">
          <ImpotDistributionByYearPieChart data={impots} />
        </Box>
        <Box gridColumn="span 4" gridRow="span 3" backgroundColor={theme.palette.background.alt} p="1.5rem" borderRadius="0.55rem">
          <RegionDistributionByDepartmentsPieChart data={impots} />
        </Box>
        {/* ROW 1 */}
        {/* <StatBox
          title="Total Customers"
          value={data}
          increase="+14%"
          description="Since last month"
          icon={<Email sx={{ color: theme.palette.secondary[300], fontSize: '26px' }} />}
        />
        <StatBox
          title="Sales Today"
          value={data}
          increase="+21%"
          description="Since last month"
          icon={<PointOfSale sx={{ color: theme.palette.secondary[300], fontSize: '26px' }} />}
        /> */}
        <Box gridColumn="span 8" gridRow="span 2" backgroundColor={theme.palette.background.alt} p="1rem" borderRadius="0.55rem">
          <OverviewChart view="sales" isDashboard={true} />
          {/* <LineChart impots={data} /> */}
        </Box>
        {/* <StatBox
          title="Monthly Sales"
          value={data}
          increase="+5%"
          description="Since last month"
          icon={<PersonAdd sx={{ color: theme.palette.secondary[300], fontSize: '26px' }} />}
        /> */}
        {/* <StatBox
          title="Yearly Sales"
          value={data}
          increase="+43%"
          description="Since last month"
          icon={<Traffic sx={{ color: theme.palette.secondary[300], fontSize: '26px' }} />}
        /> */}

        {/* ROW 2 */}
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
          {loading ? <h1>Loading...</h1> : <BarChart impots={impots} />}
          {/* <DataGrid loading={isLoading || !data} getRowId={(row) => row._id} rows={(data && data.transactions) || []} columns={columns} /> */}
        </Box>
      </Box>
      {/* <DepartmentCharts impots={data} /> */}
    </Box>
  )
}

export default Dashboard
