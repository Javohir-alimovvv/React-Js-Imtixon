import { FaCircleCheck, FaStar } from "react-icons/fa6";
import { postCommentTitle, ShopDetailCaments } from "../../types";
import { memo, useState } from "react";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { request } from "../../redux/api";
import axios from "axios";
import "./Coments.scss"
import { RiDeleteBin6Fill } from "react-icons/ri";

const Coments: React.FC = () => {
    const [form, setForm] = useState<boolean>(false);
    const queryClient = new QueryClient();

    const [newComment, setNewComment] = useState<postCommentTitle>({
        start: 0,
        userName: '',
        text: '',
    });

    const { id } = useParams();

    // cament map
    const { data: comments, isLoading } = useQuery({
        queryKey: ["coments", id],
        queryFn: async () => {
            const response = await request.get(`/products/${id}/caments`);
            return response.data;
        },
        enabled: !!id,
    });

    // cament create 
    const mutation = useMutation({
        mutationFn: async (comment: postCommentTitle) => {
            const response = await request.post(`/products/${id}/caments`, comment);
            return response.data;
        },
        onSuccess: newComment => {
            queryClient.setQueryData(['comments', id], (old: ShopDetailCaments[] | undefined) =>
                old ? [...old, newComment] : [newComment]
            );
            setNewComment({ start: 0, userName: '', text: '' });
        },
    });

    const deleteMutation = useMutation({
        mutationFn: (commentId: number) =>
            axios
                .delete(
                    `https://6731c7fa7aaf2a9aff120907.mockapi.io/products/${id}/caments/${commentId}`
                )
                .then((res) => res.data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["comment", id] });
        },
    });

    // form input f
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (newComment.text && newComment.userName && newComment.start) {
            mutation.mutate(newComment);
        }
    };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewComment((prev: postCommentTitle) => ({
            ...prev,
            [name]: name === 'start' ? Number(value) : value,
        }));
    };

    // start tinlab icon chiqarish
    const renderStars = (star: number) => (
        Array.from({ length: star }, (_, index) => (
            <span key={index}><FaStar /></span>
        ))
    );

    if (isLoading) return <p>Loading comments...</p>;

    const toggleSidebar = () => {
        setForm(!form);
    };
    return (
        <div id='container'>
            <div className='coments'>
                <div className='coments__top__content'>
                    <h3 className='coments__top__content__title'>All Reviews</h3>
                    <button onClick={toggleSidebar} className='coments__top__content__btn'>
                        {form ? "Close" : "Write a Review"}
                    </button>
                </div>
                <form onSubmit={handleSubmit} className={`coments__form ${form ? 'form__two' : ''}`}>
                    <input
                        onChange={handleChange}
                        value={newComment.text}
                        name='text'
                        className='coments__form__coment'
                        placeholder='Leave comment'
                        type="text"
                    />
                    <input
                        onChange={handleChange}
                        value={newComment.userName}
                        name='userName'
                        className='coments__form__star'
                        placeholder='Enter your name'
                        type="text"
                    />
                    <input
                        onChange={handleChange}
                        value={newComment.start}
                        name='start'
                        className='coments__form__name'
                        placeholder='Enter the product value'
                        type="number"
                    />
                    <button className='coments__form__button'>Submit</button>
                </form>
                <div className='coments__group'>
                    {comments?.map((comment: ShopDetailCaments) => (
                        <div className='coments__group__card' key={comment.id}>
                            <div className='coments__group__card__star__gr'>
                                <p className='coments__group__card__star__gr__icon'>
                                    {renderStars(comment.start)}
                                </p>
                                <button onClick={() => deleteMutation.mutate(comment.id)} className='coments__group__card__star__gr__dot'>
                                    <RiDeleteBin6Fill />
                                </button>
                            </div>
                            <h3 className='coments__group__card__user'>
                                {comment.userName}<FaCircleCheck className='check__icons' />
                            </h3>
                            <p className='coments__group__card__desc'>{comment.text}</p>
                            <p className='coments__group__card__date'>{comment.createdAt}</p>
                        </div>
                    ))}
                </div>
                <button className='coments__btn'>Load More Reviews</button>
            </div>
        </div>
    );
};

export default memo(Coments);
