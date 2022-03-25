import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../data';
import Product from '../Product/Product';
import './productDetails.css';


const ProductDetails = () => {
    const { productKey } = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    // console.log(product);
    return (
        <div>
            <Product product={product} showAddToCart={false} />
        </div>
    )
};

export default ProductDetails;