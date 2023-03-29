import React from 'react';
import './Product.css';
const Product = (props) => {
    const {price , ratings , name , seller , img} = props.product;

    return (
        <div className='product-container'>
            <img className='product-img' src={img} alt=""/>
            <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <p classNAme="product-price">price:${price}</p>
            <p className='product-seller-rating'>Manufacturer:{seller}</p>
            <p className='product-seller-rating'>Rating:{ratings}</p>
            </div>
            <button className='btn-add-cart'>Add To Cart</button>
        </div>
    );
};

export default Product;