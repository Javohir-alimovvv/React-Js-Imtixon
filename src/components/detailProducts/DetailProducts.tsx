import React, { memo } from 'react'
import './DetailProducts.scss'
import { useQuery } from '@tanstack/react-query'
import { request } from '../../redux/api'
import { FaStar } from 'react-icons/fa6'
import { IProducts } from '../../types'
import { useNavigate } from 'react-router-dom'

const DetailProducts: React.FC = () => {
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
                        <h3 className='products__title'>You might also like</h3>
                        <div className='products__group'>
                            {
                                data?.data?.slice(0, 4)?.map((row: IProducts) => (
                                    <div key={row.id} className='products__group__card'>
                                        <div className='products__group__card__box'>
                                            <img className='products__group__card__box__image' src={row.images} alt="" />
                                            <div className='products__group__card__box__shadow'>
                                                <button onClick={() => navigate(`/detail/${row.id}`)} className='products__group__card__box__shadow__button'>See More</button>
                                            </div>
                                        </div>
                                        <h3 className='products__group__card__title'>{row.title}</h3>
                                        <div className='products__group__card__star__group'>
                                            <p className='products__group__card__start__group__star'>{renderStars(row.star)}</p>
                                            <p className='products__group__card__start__group__star__number'>{row.star}</p>
                                        </div>
                                        <p className='products__group__card__price'>{row.price}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default memo(DetailProducts)