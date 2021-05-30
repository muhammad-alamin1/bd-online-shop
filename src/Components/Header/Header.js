import './header.css';
import React, { useState } from 'react';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <div className="header">
            <div className="text-center">
                <img src={logo} alt="" />
            </div>
            <nav className="text-center">
                <Link to="/shop">Shop</Link>
                <Link to="/review">Review</Link>
                <Link to="/inventory">Manage inventory </Link>
                <a href="/"><FontAwesomeIcon icon={faShoppingCart} /></a>
                <div className="product-search my-2">
                    <input type="text" className="form-control" placeholder="Search product" />
                </div>
            </nav>
        </div>
    );
};

export default Header;