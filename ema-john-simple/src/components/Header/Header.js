import React from 'react';
import logo from './logo.png';
import header from './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                <a href="Shop">Shop</a>
                <a href="Review">Review</a>
                <a href="Manage">Manage-Inventery</a>
            </nav>
        </div>
    );
};

export default Header;