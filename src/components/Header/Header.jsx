import React from 'react';
import './Header.css'
import logo from '../../images/favicon.ico'

const Header = () => {
    return (
        <nav className='full-head flex'>
            <div>
                <img className='img' src={logo} alt="" />
            </div>
            <div className='menu'>
                <a href='/Order'>Order</a>
                <a href="/Order-Review">Order-Review</a>
                <a href="/Manage-Inventory">Manage-Inventory</a>
                <a href="/Login">Login</a>
            </div>
        </nav>
    );
};

export default Header;