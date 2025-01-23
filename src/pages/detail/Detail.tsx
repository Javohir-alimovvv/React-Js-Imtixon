import React, { memo } from 'react'
import "./Detail.scss"
import DetailHero from '../../components/detailHero/DetailHero'
import Coments from '../../components/coments/Coments'
import DetailProducts from '../../components/detailProducts/DetailProducts'

const Detail: React.FC  = () => {
  return (
    <>

    <DetailHero/>
    <Coments/>
    <DetailProducts/>

    </>
  )
}

export default memo(Detail)