import React, { memo, useState } from 'react'
import "./Coments.scss"
import { FaCircleCheck, FaStar } from 'react-icons/fa6';
import { request } from '../../redux/api';
import { useQuery } from '@tanstack/react-query';
import { HiDotsHorizontal } from "react-icons/hi";
import { useParams } from 'react-router-dom';

interface ShopDetailCaments {
    createdAt: string
    text: string
    start: number
    id: number
    userName: string
}

const Coments: React.FC = () => {

    const renderStars = (star: number) => {
        return Array.from({ length: star }, (_, index) => (
            <span key={index}><FaStar /></span>
        ))
    }
    const { id } = useParams();

    const { data: comments, isLoading, error } = useQuery({
        queryKey: ["coments", id],
        queryFn: async () => {
            const response = await request.get(`/products/${id}/caments`);
            return response.data;
        },
        enabled: !!id,
    });

    if (isLoading) return <p>Loading comments...</p>;
    if (error) return <p>Failed to load comments.</p>;
    const [form, setForm] = useState<boolean>(true)

    const toggleSearch = () => {
        setForm(!form);
    };

    const { data } = useQuery({
        queryKey: ['caments', id],
        queryFn: () => {
            return request
                .post(`/products/${id}/caments`)
                .then(res => res)
                .catch(err => console.log(err))
        },
        enabled: !!id
    })
    // const renderStars = (star: number) => {
    //     return Array.from({ length: star }, (_, index) => (
    //         <span key={index}><FaStar /></span>
    //     ))
    // }

    return (
        <>

            <div id='container'>
                <div className='coments'>
                    <div className='coments__top__content'>
                        <h3 className='coments__top__content__title'>All Reviews</h3>
                        <button onClick={toggleSearch} className='coments__top__content__btn'>Write a Review</button>
                    </div>
                    <form className={`coments__form ${form ? "form__two" : ""}`} action="">
                        <input className='coments__form__coment' placeholder='Leave comment' type="text" />
                        <input className='coments__form__name' placeholder='Enter your name' type="text" />
                        <button className='coments__form__button'>Submit</button>
                    </form>
                    <div className='coments__group'>
                        {
                            comments?.map((comment: ShopDetailCaments) => (
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
                    <button className='coments__btn'>Load More Reviews</button>

                </div>
            </div>

        </>
    )
}

export default memo(Coments)

