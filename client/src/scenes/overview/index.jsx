import React, { useState } from 'react'
import { Box } from '@mui/material'
import Header from 'components/Header'
// import OverviewChart from 'components/OverviewChart'

const Overview = () => {
  const [view, setView] = useState('units')

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="DASHBOARD INTERACTIF" subtitle="Overview of general revenue and profit" />
      {/* <Box height="75vh">
        <FormControl sx={{ mt: "1rem" }}>
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            label="View"
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        <OverviewChart view={view} />
        
      </Box> */}
      <Box sx={{backgroundColor: 'blue', width: '100%', height: '100vh'}}>
        <iframe
          title="projet hackaton ECE"
          width="100%"
          height="1000"
          style={{ backgroundColor: '#191f45' }}
          src="https://app.powerbi.com/reportEmbed?reportId=9dd3e298-46ad-46ff-b95f-f083fbd17423&autoAuth=true&embeddedDemo=true"
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
      </Box>
    </Box>
  )
}

export default Overview
