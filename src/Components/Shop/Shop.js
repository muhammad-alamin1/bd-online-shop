import './shop.css';
import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../../Cart/Cart';

const Shop = () => {
    // console.log(fakeData); 
    const [products, setProducts] = useState(fakeData); // 81 items
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="product-container my-3">
                <ul>
                    {
                        products.map(product =>
                            <Product key={product.key}
                                product={product}
                                handleAddProduct={handleAddProduct} />)
                    }
                </ul>
            </div>
            <div className="cart-container my-3">
                <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Shop;