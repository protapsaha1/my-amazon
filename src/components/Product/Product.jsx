import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    const {price , ratings , name , seller , img} = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product-container'>
            <img className='product-img' src={img} alt=""/>
            <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <p className="product-price">price:${price}</p>
            <p className='product-seller-rating'>Manufacturer:{seller}</p>
            <p className='product-seller-rating'>Rating:{ratings}</p>
            </div>
            <button onClick={() =>handleAddToCart (props.product)} className='btn-add-cart'>
                Add To Cart
             <FontAwesomeIcon icon={faShoppingCart} />
             </button>
        </div>
    );
};

export default Product;