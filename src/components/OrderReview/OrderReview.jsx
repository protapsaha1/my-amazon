import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import '../../utilities/fakedb'
import ReviewOrder from '../ReviewOrder/ReviewOrder';
import './OrderReview.css';

const OrderReview = () => {
    const cartItem = useLoaderData();
    console.log(cartItem)
    return (
        <div className='shop-container'>
            <div className='review-container'>
                <h1>hello</h1>
                {
                    cartItem.map(product => <ReviewOrder
                    key = {product.id}
                    product={product}
                    ></ReviewOrder>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cartItem}></Cart>
            </div>
        </div>
    );
};

export default OrderReview;