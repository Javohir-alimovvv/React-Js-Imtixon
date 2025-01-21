import React, { memo } from 'react'
import Hero from '../../components/hero/Hero'
import Logos from '../../components/logos/Logos'
import Products from '../../components/products/Products'
import Brand from '../../components/brand/Brand'
import CommentsHome from '../../components/commentHome/CommentsHome'

const Home: React.FC = () => {
  return (
    <>
    
      <Hero />
      <Logos />
      <Products/>
      <Brand/>
      <CommentsHome/>

    </>
  )
}

export default memo(Home)