import React, { memo } from 'react'
import "./Detail.scss"
import DetailHero from '../../components/detailHero/DetailHero'
import Coments from '../../components/coments/Coments'

const Detail: React.FC  = () => {
  return (
    <>

    <DetailHero/>
    <Coments/>

    </>
  )
}

export default memo(Detail)