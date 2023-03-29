import React from 'react';
import './Shop.css';

const Shop = () => {
    return (
        <div className='shop-container'>
            <div className="product-container">
     
            </div>
            <div className="cart-container">
                <h3>Order summary</h3>
                <p>Select Item:</p>
                <p>Total Price:</p>
                <p>Total Shopping change:</p>
                <p>Tax:</p>
                <p>Grand Total:</p>
                <div className='btn-grid '>
                <button className='cart-btn btn-cart-clear'>Clear Cart</button>
                <button className='cart-btn btn-review-order'>Review Order</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;