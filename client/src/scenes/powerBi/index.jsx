import React from 'react'
import { Box } from '@mui/material'
import Header from 'components/Header'
// import OverviewChart from 'components/OverviewChart'

const PowerBi = () => {

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="DASHBOARD INTERACTIF" subtitle="Overview of general revenue and profit" />
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

export default PowerBi
