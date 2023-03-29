import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products , setProducts] = useState([]);
    useEffect(() =>{
        fetch(' https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                    product = {product}
                    key = {product.id}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Order summary{products.length}</h3>
                <p>Select Item:</p>
                <p>Total Price:</p>
                <p>Total Shopping change:</p>
                <p>Tax:</p>
                <p>Grand Total:</p>
                <div className='btn-grid '>
                <button className='btn-cart-clear'>Clear Cart</button>
                <button className='btn-review-order'>Review Order</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;