import './cart.css';
import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    let totalPrice = 0;
    // const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice = totalPrice + product.price * product.quantity;
        
    }


    // shipping
    let shipping = 0;
    if (totalPrice > 200) {
        shipping = 0;
    }
    else if (totalPrice > 99) {
        shipping = 4.99;
    }
    else if (totalPrice > 0) {
        shipping = 9.99
    }

    // tax
    const tax = ((totalPrice / 100) * 5).toFixed(2);

    // grand totalPrice
    const grandTotalPrice = (totalPrice + shipping + Number(tax)).toFixed(2);


    // format number
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4 className="text-center text-warning">Order Summery</h4>
            <h6 className="text-center">Items Ordered: {cart.length}</h6><br />
            <p>Product Price: $ {formatNumber(totalPrice)}</p>
            <p>Shipping & Handling: $ {shipping}</p>
            <p>Tax + VAT: $ {tax} (5%)</p>
            <strong>Order Total: $ {grandTotalPrice} </strong><br /><br />
            {
                props.children
            }
        </div>
    );
};

export default Cart;