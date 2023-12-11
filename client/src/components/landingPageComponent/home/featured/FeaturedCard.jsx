import React from "react"
import { featured } from "../../data/Data"
import { Box } from "@mui/material"

const FeaturedCard = () => {
  return (
    <Box >
      <div className='content grid4 mtop'>
        {featured.map((items, index) => (
          <div style={{height:'200px'}} className='box' key={index}>
            <h3>{items.name}</h3>
            <label style={{marginTop : '50px'}}>{items.total}</label>
          </div>
        ))}
      </div>
    </Box>
  )
}

export default FeaturedCard
