import React, { memo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux';
import { removeFromCart } from '../../redux/api/index';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight, FaChevronRight } from "react-icons/fa6";
import "./Card.scss"
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { CiShoppingTag } from 'react-icons/ci';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import empyt_img from "../../assets/image/cart.jpg"

const Card: React.FC = () => {

    const cart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    const Bot_token = "7663778517:AAHLTijMCfFznDWG_1RuAK8YxoRBhYsWPe4"

    const handleRemoveFromCart = (id: number) => {
        dispatch(removeFromCart(id));
    };

    const [count, setCount] = useState<number>(0)
    const [pay, setPrice] = useState<number>(0)

    const increment = () => {
        setCount(p => p + 1)
        setPrice(prevPrice => prevPrice + cart.reduce((total, item) => total + item.price, 0))
    }
    const decrement = () => {
        setCount(p => p - 1)
        setPrice(prevPrice => prevPrice - cart.reduce((total, item) => total + item.price, 0))
    }

    const [information, setInformation] = useState(
        {
            firstName: "",
            lastName: "",
            phone: "",
            email: ""
        }
    )

    const navigateCard = useNavigate()

    const handleSubmitBot = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const message = `
             New Order:
       First Name: ${information.firstName}
       Last Name: ${information.lastName}
       Phone: ${information.phone}
       Email: ${information.email}

      Summary:
       Maxsulot nomi: Fudbolka
       Mahsulot narxi: $700
        `;
        try {
            await axios.post(`https://api.telegram.org/bot${Bot_token}/SendMessage`, {
                chat_id: "6891591255",
                text: message
            })
            toast.success('Malumot yuborildi, Maxsulot tez orada yetkazib beriladi')
            setInformation({
                firstName: "",
                lastName: "",
                phone: "",
                email: ""
            })
            cart.forEach(item => handleRemoveFromCart(item.id))
            navigateCard("/")
        } catch (error) {
            toast.error('Error')
        }

    }
    const handleChengeBot = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setInformation({ ...information, [e.target.name]: e.target.value })

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
                            {cart && cart.length > 0 ? (
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
                                                <p className='cards__map__left__box__center__price'>${item.amount + pay}</p>
                                            </div>
                                            <div className='cards__map__left__box__right'>
                                                <button className='cards__map__left__box__right__remove__btn' onClick={() => handleRemoveFromCart(item.id)}><RiDeleteBin6Fill /></button>
                                                <div className='detail__maps__right__counters__count'>
                                                    <button disabled={count + item.quantity === 1} onClick={decrement}
                                                        className='detail__maps__right__counters__count__btn__one'>-</button>
                                                    <p className='detail__maps__right__counters__count__value'>{count + item.quantity}</p>
                                                    <button onClick={increment}
                                                        className='detail__maps__right__counters__count__btn__two'>+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='cards__map__left__line'></div>
                                    </div>
                                ))
                            ) 
                            : (
                                <div className='card_empty'>
                                    <img className='card_empty_img' src={empyt_img} alt="" />
                                </div>
                            )
                                
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
                                    <div key={card.id} className='cards__map__right__group'>
                                        <p className='cards__map__right__group__name'>Total</p>
                                        <h3 className='cards__map__right__group__price'>{card.amount + pay}</h3>
                                    </div>
                                ))
                            }
                            <div className='cards__map__right__promo__gr'>
                                <div className='cards__map__right__promo'>
                                    <CiShoppingTag className='cards__map__right__promo__icon' />
                                    <p className='cards__map__right__promo__text'>Add promo code</p>
                                </div>
                                <button className='cards__map__right__promo__btn'>Apply</button>
                            </div>
                            <button className='cards__map__right__btn__go'>Go to Checkout <FaArrowRight className='cards__map__right__btn__go__icon' /></button>
                        </div>
                    </div>
                    <div className='cards__payment'>
                        <h2 className='cards__payment__text'>Check Out</h2>
                        <form onSubmit={handleSubmitBot} className='cards__payment__form' action="">
                            <div className='cards__payment__form__group'>
                                <h3 className='cards__payment__form__title'>Contact Infomation</h3>
                                <div className='cards__payment__form__group__child'>
                                    <input onChange={handleChengeBot} value={information.firstName} name='firstName' className='cards__payment__form__group__child__input' placeholder='First name' type="text" />
                                    <input onChange={handleChengeBot} value={information.lastName} name='lastName' className='cards__payment__form__group__child__input' placeholder='Last name' type="text" />
                                </div>
                                <input onChange={handleChengeBot} value={information.phone} name='phone' className='cards__payment__form__group__phone' placeholder='Phone number' type="number" />
                                <input onChange={handleChengeBot} value={information.email} name='email' className='cards__payment__form__group__phone' placeholder='Your Email' type="email" />
                            </div>
                            <button className='cards__payment__form__btn'>Place Order</button>
                        </form>
                    </div>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </>

    )
}

export default memo(Card)