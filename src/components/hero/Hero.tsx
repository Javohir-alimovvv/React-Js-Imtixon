import React, { memo } from 'react'
import "./Hero.scss"
import hero_img from "../../assets/image/hero_small.png"
import vector_img from "../../assets/image/Vector.png"
import line from "../../assets/image/line.png"



const Hero: React.FC = () => {
  return (
    <>

      <main className='hero__big'>
        <div id="container">
          <div className='hero'>
            <div className='hero__left'>
              <h1 className='hero__left__title'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
              <p className='hero__left__text'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
              <button className='hero__left__btn'>Shop Now</button>
              <div className='hero__left__group'>
                <div>
                  <h2 className='hero__left__group__number'>200+</h2>
                  <p className='hero__left__group__text'>International Brands</p>
                </div>
                <img className='hero__left__group__img__one' src={line} alt="" />
                <div>
                  <h2 className='hero__left__group__number'>2,000+</h2>
                  <p className='hero__left__group__text'>High-Quality Products</p>
                </div>
                <img className='hero__left__group__img__two' src={line} alt="" />
                <div>
                  <h2 className='hero__left__group__number'>30,000+</h2>
                  <p className='hero__left__group__text'>Happy Customers</p>
                </div>
              </div>
            </div>

            <div className='hero__right'>
              <div className='hero__right__box'>
                <img className='hero__right__img' src={hero_img} alt="" />
              </div>
              <img className='hero__right__vector' src={vector_img} alt="" />
              <img className='hero__right__vector__two' src={vector_img} alt="" />
            </div>
          </div>
        </div>
      </main>

    </>
  )
}

export default memo(Hero)