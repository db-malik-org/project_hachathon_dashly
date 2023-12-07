import React from 'react'
import Hero from 'scenes/landing/hero/Hero'
import Features from 'scenes/landing/features'
import HeaderWebsite from 'components/landingComponents/header'
import Footer from "components/landingComponents/footer"

const index = () => {
  return (
    <>
      <HeaderWebsite />
      <Hero />
      <Features />
      {/* <InterSection /> */}
      <Footer />

    </>
  )
}

export default index
