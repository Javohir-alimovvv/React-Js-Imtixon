import { useQuery } from '@tanstack/react-query'
import React, { memo } from 'react'
import { request } from '../../redux/api'
import "./Products.scss"
import { IProducts } from '../../types'
import { FaStar } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'


const Products: React.FC = () => {
    const limit = 4

    const { data } = useQuery({
        queryKey: ['products'],
        queryFn: () => {
            return request
                .get('/products', {
                    params: {
                        limit: limit
                    }
                })
                .then(res => res)
        }
    })

    const renderStars = (star: number) => {
        return Array.from({ length: star }, (_, index) => (
            <span key={index}><FaStar /></span>
        ))
    }

    const navigate = useNavigate()

    return (
        <>
            <section>
                <div id='container'>
                    <div className='products'>
                        <h3 className='products__title'>NEW ARRIVALS</h3>
                        <div className='products__group'>
                            {
                                data?.data?.map((item: IProducts) => (
                                    <div key={item.id} className='products__group__card'>
                                        <div className='products__group__card__box'>
                                            <img className='products__group__card__box__image' src={item.images} alt="" />
                                            <div className='products__group__card__box__shadow'>
                                                <button onClick={() => navigate(`/detail/${item.id}`)} className='products__group__card__box__shadow__button'>See More</button>
                                            </div>
                                        </div>
                                        <h3 className='products__group__card__title'>{item.title}</h3>
                                        <div className='products__group__card__star__group'>
                                            <p className='products__group__card__start__group__star'>{renderStars(item.star)}</p>
                                            <p className='products__group__card__start__group__star__number'>{item.star}</p>
                                        </div>
                                        <p className='products__group__card__price'>{item.price}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <button className='products__btn'>View All</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default memo(Products)