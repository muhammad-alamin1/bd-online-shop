/* eslint-disable jsx-a11y/anchor-is-valid */
import './product.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { key, name, img, seller, price, shipping, star, starCount, stock } = props.product;
    // console.log(props);
    return (
        <div className="product ">
            <div className="product-img  ">
                <img src={img} alt="product-img" className="img-fluid" />
            </div>
            <div className="product-details ">
                <a href="#">{name}</a>
                <br /><br />
                <p><small>by: {seller}</small></p>
                <p>Price: ${price}</p>
                <p><small>Only left in stock - order soon {stock}</small></p>
                <button onClick={() => { props.handleAddProduct(props.product) }} type="button" className="main-btn" >
                    <FontAwesomeIcon icon={faShoppingCart} />
                Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;