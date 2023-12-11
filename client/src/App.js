import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { themeSettings } from 'theme'
import Landing from 'scenes/landing'
import Layout from 'scenes/layout'
import Dashboard from 'scenes/dashboard'
import Region from 'scenes/region'
import Annee from 'scenes/annee'
import Transactions from 'scenes/transactions'
import Geography from 'scenes/geography'
import Overview from 'scenes/overview'
import Daily from 'scenes/daily'
import Monthly from 'scenes/monthly'
import Breakdown from 'scenes/breakdown'
import Admin from 'scenes/admin'
import Performance from 'scenes/performance'
import ContactForm from 'scenes/contactform'
import { getImpotsByRegion } from 'services/axiosInstance'

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
            {/* <Route path="/contact" element={<ContactForm />} /> */}
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard data={data} />} />
              <Route path="/regions" element={<Region data={data} />} />
              <Route path="/annee" element={<Annee data={data} />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/power bi" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/performance" element={<Performance />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
