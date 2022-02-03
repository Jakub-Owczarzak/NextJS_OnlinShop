import React from 'react';
import ProductItem from './ProductItem';
import productStyles from '../styles/Product.module.css'

const ProductList = ({ products }) => {

    return <div className={productStyles.grid}>
        {products.map((product, index) => <ProductItem key={index} product={product} />)}
    </div>;;
};


export default ProductList;
