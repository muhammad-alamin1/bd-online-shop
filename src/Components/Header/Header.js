import './header.css';
import React, { useState } from 'react';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    const [cart, setCart] = useState([]);
    return (
        <div className="header">
            <div className="text-center">
                <img src={logo} alt="" />
            </div>
            <nav className="text-center">
                <a href="/shop">Shop</a>
                <a href="/review">Review</a>
                <a href="/mange">Manage inventory</a>
                <a href="/"><FontAwesomeIcon icon={faShoppingCart} /></a>
                <div className="product-search my-2">
                    <input type="text" className="form-control" placeholder="Search product" />
                </div>
            </nav>
        </div>
    );
};

export default Header;