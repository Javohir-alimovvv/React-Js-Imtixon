import React, { memo } from 'react'
import Hero from '../../components/hero/Hero'
import Logos from '../../components/logos/Logos'
import Products from '../../components/products/Products'
import Brand from '../../components/brand/Brand'

const Home: React.FC = () => {
  return (
    <>
    
      <Hero />
      <Logos />
      <Products/>
      <Brand/>

    </>
  )
}

export default memo(Home)