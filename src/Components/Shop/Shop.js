import './shop.css';
import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';



const Shop = () => {
    // console.log(fakeData); 
    const [products, setProducts] = useState(fakeData); // 81 items
    const [cart, setCart] = useState([]);


    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = saveCart[existingKey];
            return product;
            // console.log(existingKey, saveCart[existingKey]);
        })
        setCart(previousCart);
        // console.log(previousCart);
    }, [])

    const handleAddProduct = (product) => {
        // console.log(product);
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