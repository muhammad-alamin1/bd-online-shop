import React, { useEffect, useState } from 'react';
import fakeData from '../../data';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import OrderDelivery from '../OrderDelivery/OrderDelivery';
import ReviewItems from '../ReviewItems/ReviewItems';
import './review.css';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

    const RemoveProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);

        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);

        const cartProduct = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveCart[key];

            return product;
        });
        setCart(cartProduct);
    }, []);

    let thankYou;
    if (orderPlaced) {
        thankYou = <OrderDelivery />
    }
    return (
        <div className="twin-container" >
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItems
                        key={pd.key}
                        product={pd}
                        RemoveProduct={RemoveProduct}
                    />)
                }
                {
                    thankYou
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="main-btn">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;