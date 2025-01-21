import { useQuery } from '@tanstack/react-query'
import React, { memo } from 'react'
import { request } from '../../redux/api'
import "./CommentsHome.scss"
import { HomeCaments } from '../../types'
import { FaCircleCheck, FaStar } from 'react-icons/fa6'
import { HiDotsHorizontal } from 'react-icons/hi'

const CommentsHome: React.FC = () => {
    const { data } = useQuery({
        queryKey: ['caments'],
        queryFn: () => {
            return request
                .get("/caments")
                .then(res => res)
                .catch(err => console.log(err))
        }
    })

    const renderStars = (star: number) => {
            return Array.from({ length: star }, (_, index) => (
                <span key={index}><FaStar /></span>
            ))
        }
    return (
        <>

            <div id='container'>
                <div className='comments__home'>
                    <h3 className='comments__home__title'>OUR HAPPY CUSTOMERS</h3>
                    <div className='comments__home__group'>
                        {
                            data?.data?.map((comment: HomeCaments) => (
                                <div className='coments__group__card' key={comment.id}>
                                    <div className='coments__group__card__star__gr'>
                                        <p className='coments__group__card__star__gr__icon'>{renderStars(comment?.start)}</p>
                                        <button className='coments__group__card__star__gr__dot'><HiDotsHorizontal /></button>
                                    </div>
                                    <h3 className='coments__group__card__user'>{comment.userName}<FaCircleCheck className='check__icons' /></h3>
                                    <p className='coments__group__card__desc'>{comment.text}</p>
                                    <p className='coments__group__card__date'>{comment.createdAt}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default memo(CommentsHome)