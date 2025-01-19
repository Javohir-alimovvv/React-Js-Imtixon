import React from 'react'
import "./Coments.scss"
import { data, useParams } from 'react-router-dom';
import { useGetShopDetailQuery } from '../../redux/api/api';
import { FaCircleCheck, FaStar } from 'react-icons/fa6';
import { request } from '../../redux/api';
import { useQuery } from '@tanstack/react-query';
import { HiDotsHorizontal } from "react-icons/hi";

interface ShopDetailCaments {
    createdAt: string
    text: string
    start: number
    id: number
    userName: string
}

const Coments = () => {

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

    return (
        <>

            <div id='container'>
                <div className='coments'>
                    <div>

                    </div>
                    <div>
                        {
                            comments?.map((comment: ShopDetailCaments) => (
                                <div key={comment.id}>
                                    <div>
                                        <p>{renderStars(comment?.start)}</p>
                                        <HiDotsHorizontal />
                                    </div>
                                    <h3>{comment.userName}<FaCircleCheck /></h3>
                                    <p>{comment.text}</p>
                                    <p>{comment.createdAt}</p>
                                </div>
                            ))
                        }
                    </div>
                    <button></button>

                </div>
            </div>

        </>
    )
}

export default Coments

