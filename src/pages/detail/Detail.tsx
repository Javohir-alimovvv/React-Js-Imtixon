import React, { memo } from 'react'
import "./Detail.scss"
import DetailHero from '../../components/detailHero/DetailHero'
import Coments from '../../components/coments/Coments'
import Products from '../../components/products/Products'

const Detail: React.FC  = () => {
  return (
    <>

    <DetailHero/>
    <Coments/>
    <Products/>

    </>
  )
}

export default memo(Detail)