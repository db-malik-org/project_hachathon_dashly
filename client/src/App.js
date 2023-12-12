import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { themeSettings } from 'theme'
import Landing from 'scenes/landing'
import Layout from 'scenes/layout'
import Dashboard from 'scenes/dashboard'
import Region from 'scenes/region'
import Annee from 'scenes/annee'

import { getImpotsByRegion } from 'services/axiosInstance'
import ContactForm from "scenes/contactform/form"

function App() {
  const mode = useSelector((state) => state.global.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchImpotByRegion = async (region) => {
      try {
        const impotByRegions = await getImpotsByRegion(region)
        setData(impotByRegions)
      } catch (error) {
        console.error('Error fetching regions in component:', error)
      }
    }
    fetchImpotByRegion()
  }, [])

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard data={data} />} />
              <Route path="/regions" element={<Region data={data} />} />
              <Route path="/annee" element={<Annee data={data} />} />
              <Route path="/contact" element={<ContactForm />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
