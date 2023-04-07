import React from 'react';
import './Header.css'
import logo from '../../images/my-amazon.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='full-head flex'>
            <div>
                <img className='img' src={logo} alt="" />
            </div>
            <div className='menu'>
                <Link to='/'>Shop</Link>
                <Link to="/Order-Review">Order</Link>
                <Link to="/Manage-Inventory">Inventory</Link>
                <Link to="/Login">Login</Link>
                <Link to='/SignUp'>SignUp</Link>
            </div>
        </nav>
    );
};

export default Header;