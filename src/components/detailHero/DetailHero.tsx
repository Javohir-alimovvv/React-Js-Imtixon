import React, { memo, useState } from 'react'
import "./DetailHero.scss"
import { Link, useParams } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa6";
import { useGetCardByIdQuery, useGetShopDetailQuery } from '../../redux/api/api';
import { FaStar, FaCheck } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/api';
import { IProducts } from '../../types';


interface ShopDetail {
    images: string[];
    title: string
    description: string
    price: number
    star: number
    size: string[]

}

const DetailHero: React.FC = () => {

    const { id } = useParams()
    const { data } = useGetShopDetailQuery(id) as { data: ShopDetail }

    const renderStars = (star: number) => {
        return Array.from({ length: star }, (_, index) => (
            <span key={index}><FaStar /></span>
        ))
    }

    const [count, setCount] = useState<number>(0)
    const [price, setPrice] = useState<number>(data?.price || 0)
    const increment = () => {
        setCount(p => p + 1)
        setPrice(prevPrice => prevPrice + (data?.price || 0))
    }
    const decrement = () => {
        setCount(p => p - 1)
        setPrice(prevPrice => prevPrice - (data?.price || 0))
    }



    const { data: product } = useGetCardByIdQuery(id) as { data: IProducts }
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        if (product) {
            dispatch(
                addToCart({
                    id: product.id,
                    title: product.title,
                    price,
                    quantity: count,
                    image: [product.images]
                }))
        }
    }

    return (
        <>

            <div>
                <div id='container'>
                    <div className='detail'>
                        <Link to={"/"}>
                            <div className='detail__links'>
                                <li className='detail__links__item'>Home</li>
                                <FaChevronRight className='detail__links__item__icon' />
                                <li className='detail__links__item'>Shop</li>
                                <FaChevronRight className='detail__links__item__icon' />
                                <li className='detail__links__item'>Men</li>
                                <FaChevronRight className='detail__links__item__icon' />
                                <li className='detail__links__metka'>T-shirts</li>
                            </div>
                        </Link>
                        <div className='detail__maps'>
                            <div className='detail__maps__left'>
                                <div className='detail__maps__left__group'>
                                    <div className='detail__maps__left__group__img'>
                                        <img className='detail__maps__left__group__img__img' src={data?.images[0]} alt="" />
                                    </div>
                                    <div className='detail__maps__left__group__img'>
                                        <img className='detail__maps__left__group__img__img' src={data?.images[1]} alt="" />
                                    </div>
                                    <div className='detail__maps__left__group__img'>
                                        <img className='detail__maps__left__group__img__img' src={data?.images[2]} alt="" />
                                    </div>
                                </div>
                                <div className='detail__maps__left__box'>
                                    <img className='detail__maps__left__box__img' src={data?.images[1]} alt="" />
                                </div>
                            </div>
                            <div className='detail__maps__right'>
                                <h2 className='detail__maps__right__title'>{data?.title}</h2>
                                <div className='detail__maps__right__stars'>
                                    <p className='detail__maps__right__stars__icon'>{renderStars(data?.star)}</p>
                                    <p className='detail__maps__right__stars__text'>{data?.star}</p>
                                </div>
                                <div className='detail__maps__right__prices'>
                                    <h3 className='detail__maps__right__prices__inc'>${price.toFixed(2)}</h3>
                                    <del className='detail__maps__right__prices__dec'>$400</del>
                                </div>
                                <p className='detail__maps__right__desc'>{data?.description}</p>
                                <div className='detail__maps__right__line'></div>
                                <div className='detail__maps__right__rgb'>
                                    <p className='detail__maps__right__rgb__text'>Select Colors</p>
                                    <div className='detail__maps__right__rgb__group'>
                                        <div className='detail__maps__right__rgb__group__radio'><FaCheck /></div>
                                        <div className='detail__maps__right__rgb__group__radio__two'></div>
                                        <div className='detail__maps__right__rgb__group__radio__theree'></div>
                                    </div>
                                </div>
                                <div className='detail__maps__right__line'></div>
                                <div className='detail__maps__right__sizes'>
                                    <p className='detail__maps__right__sizes__text'>Choose Size</p>
                                    <div className='detail__maps__right__sizes__group'>
                                        <button className='detail__maps__right__sizes__group__btn'>{data?.size[0]}</button>
                                        <button className='detail__maps__right__sizes__group__btn'>{data?.size[1]}</button>
                                        <button className='detail__maps__right__sizes__group__btn'>{data?.size[2]}</button>
                                        <button className='detail__maps__right__sizes__group__btn'>{data?.size[3]}</button>
                                    </div>
                                </div>
                                <div className='detail__maps__right__line'></div>
                                <div className='detail__maps__right__counters'>
                                    <div className='detail__maps__right__counters__count'>
                                        <button disabled={count === 1} onClick={decrement}
                                            className='detail__maps__right__counters__count__btn__one'>-</button>
                                        <p className='detail__maps__right__counters__count__value'>{count}</p>
                                        <button onClick={increment}
                                            className='detail__maps__right__counters__count__btn__two'>+</button>
                                    </div>
                                    <button onClick={handleAddToCart} className='detail__maps__right__counters__adds'>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default memo(DetailHero)