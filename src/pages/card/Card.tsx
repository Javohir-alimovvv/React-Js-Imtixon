import React, { memo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux';
import { removeFromCart } from '../../redux/api/index';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaChevronRight } from "react-icons/fa6";
import "./Card.scss"
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { CiShoppingTag } from 'react-icons/ci';

const Card: React.FC = () => {

    const cart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (id: number) => {
        dispatch(removeFromCart(id));
    };

    const [count, setCount] = useState<number>(1)
    const [pay, setPrice] = useState<number>(cart.reduce((total, item) => total + item.price, 0))
    const increment = () => {
        setCount(p => p + 1)
        setPrice(prevPrice => prevPrice + cart.reduce((total, item) => total + item.price, 0) / cart.length)
    }
    const decrement = () => {
        setCount(p => p - 1)
        setPrice(prevPrice => prevPrice - cart.reduce((total, item) => total + item.price, 0) / cart.length)
    }
    return (

        <>

            <div id="container">
                <div className="cards">
                    <div className='cards__top'>
                        <Link to={"/"}>
                            <h3 className='cards__top__gr'>Home <FaChevronRight className='cards__top__gr__icon' /><span>Cart</span></h3>
                        </Link>
                        <h3 className='cards__top__title'>Your cart</h3>
                    </div>
                    <div className='cards__map'>
                        <div className='cards__map__left'>
                            {
                                cart?.map((item) => (
                                    <div key={item.id} className='cars__flex'>
                                        <div className='cards__map__left__box' >
                                            <div className='cards__map__left__box__top'>
                                                <img className='cards__map__left__box__top__image' src={item.image[0]} alt="" />
                                            </div>
                                            <div className='cards__map__left__box__center'>
                                                <h3 className='cards__map__left__box__center__title'>{item.title}</h3>
                                                <h3 className='cards__map__left__box__center__size'>Size: <span>Large</span></h3>
                                                <h3 className='cards__map__left__box__center__size'>Color: <span>White</span></h3>
                                                <p className='cards__map__left__box__center__price'>{item.price}</p>
                                            </div>
                                            <div className='cards__map__left__box__right'>
                                                <button className='cards__map__left__box__right__remove__btn' onClick={() => handleRemoveFromCart(item.id)}><RiDeleteBin6Fill /></button>
                                                <div className='detail__maps__right__counters__count'>
                                                    <button disabled={count === 1} onClick={decrement}
                                                        className='detail__maps__right__counters__count__btn__one'>-</button>
                                                    <p className='detail__maps__right__counters__count__value'>{count}</p>
                                                    <button onClick={increment}
                                                        className='detail__maps__right__counters__count__btn__two'>+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='cards__map__left__line'></div>
                                    </div>
                                ))
                            }

                        </div>
                        <div className='cards__map__right'>
                            <h3 className='cards__map__right__text'>Order Summary</h3>
                            <div className='cards__map__right__group'>
                                <p className='cards__map__right__group__name'>Subtotal</p>
                                <h3 className='cards__map__right__group__price'>$565</h3>
                            </div>
                            <div className='cards__map__right__group'>
                                <p className='cards__map__right__group__name'>Discount (-20%)</p>
                                <h3 className='cards__map__right__group__price__min'>-$113</h3>
                            </div>
                            <div className='cards__map__right__group'>
                                <p className='cards__map__right__group__name'>Delivery Fee</p>
                                <h3 className='cards__map__right__group__price'>$15</h3>
                            </div>
                            {
                                cart?.map((card) => (
                                    <div className='cards__map__right__group'>
                                        <p className='cards__map__right__group__name'>Total</p>
                                        <h3 key={card.id} className='cards__map__right__group__price'>{card.amount}</h3>
                                    </div>
                                ))
                            }
                            <div className='cards__map__right__promo__gr'>
                                <div className='cards__map__right__promo'>
                                    <CiShoppingTag  className='cards__map__right__promo__icon'/>
                                    <p className='cards__map__right__promo__text'>Add promo code</p>
                                </div>
                                <button className='cards__map__right__promo__btn'>Apply</button>
                            </div>
                            <button className='cards__map__right__btn__go'>Go to Checkout <FaArrowRight  className='cards__map__right__btn__go__icon'/></button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default memo(Card)