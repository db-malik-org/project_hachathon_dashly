import React, { useState } from 'react'
import { LightModeOutlined, DarkModeOutlined } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import FlexBetween from 'components/FlexBetween'
import { useDispatch } from 'react-redux'
import { setMode } from 'state'
import {Box, IconButton, Toolbar, useTheme } from '@mui/material'
const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch()
  const theme = useTheme()



  return (
    <Box
      sx={{
        position: 'static',
        background: 'none',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* LEFT SIDE */}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === 'dark' ? <DarkModeOutlined sx={{ fontSize: '25px' }} /> : <LightModeOutlined sx={{ fontSize: '25px' }} />}
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </Box>
  )
}

export default Navbar
