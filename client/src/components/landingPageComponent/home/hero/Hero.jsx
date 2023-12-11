import React from 'react'
import Heading from '../../common/Heading'
import './hero.css'
import { Box, Button } from '@mui/material'

const Hero = () => {
  const letsPlay = () => {
    window.location.href = "/dashboard"
  }
  return (
    <>
      <section style={{ background: 'linear-gradient(to right, rgb(231, 203, 139), rgb(122, 99, 46))' }} className="hero">
        <div className="container">
          <Heading
            title="Analyse Fiscale : Éclairer les Tendances et les Modèles à travers la Visualisation des Données"
            subtitle="Jouez avec les Données Fiscales pour Découvrir des Perspectives Inédites."
          />
          <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
            <Button onClick={letsPlay} sx={{ width: '400px', height: '50px' , m: 5}} variant="contained" color="success" size="large">
              Lets Play
            </Button>
          </Box>
        </div>
      </section>
    </>
  )
}

export default Hero
