import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../data';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css';

const Shop = () => {
    const [products, setProducts] = useState(fakeData); // 81 items
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = saveCart[existingKey];

            return product;
        })
        setCart(previousCart);
    }, [])

    const handleAddProduct = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }

    return (
        <div className="twin-container">
            <div className="product-container my-3">
                <ul>
                    {
                        products.map(product =>
                            <Product key={product.key}
                                product={product}
                                handleAddProduct={handleAddProduct}
                                showAddToCart={true}
                            />)
                    }
                </ul>
            </div>
            <div className="cart-container my-3">
                <Cart cart={cart}>
                    <Link to="/review"><button type="button" className="main-btn" > Review Order</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;