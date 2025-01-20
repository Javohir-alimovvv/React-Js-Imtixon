import React, { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux';
import { removeFromCart } from '../../redux/api/index';
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa6";

const Card: React.FC = () => {

    const cart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (id: number) => {
        dispatch(removeFromCart(id));
    };
    return (

        <>

            <div id="container">
                <div className="cards">
                    <div>
                        <Link to={"/"}>
                            <h3>Home <FaChevronRight /><span>Cart</span></h3>
                        </Link>
                        <h3>Your cart</h3>
                    </div>
                    <div>
                        <div>
                            {
                                cart?.map((item) => (
                                    <div key={item.id}>
                                        <p>{item.title}</p>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Price: ${item.price}</p>
                                        <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default memo(Card)