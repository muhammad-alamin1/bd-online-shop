import './reviewItems.css';
import React from 'react';

const ReviewItems = (props) => {
    // console.log(props);
    const { name, quantity , key, price } = props.product;
    return (
        <div className="review-items">
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p>Price: ${price}</p>
            <br />
            <button
                className="main-btn"
                onClick={()=>{props.RemoveProduct(key)}}
            >Remove</button>
        </div>
    );
};

export default ReviewItems;