import React from 'react';
import Link from 'next/link';

import productStyles from '../styles/Product.module.css'

const ProductItem = ({ product }) => {
    return <Link href="/product/[id]" as={`/product/${product.id}`}>
        <a className={productStyles.card}>
            <img className={productStyles.image} src={product.image} />
            <h2>{product.name} &rarr;</h2>
            <h2>Price:{product.price}</h2>
            <p>{product.description}</p>
        </a>
    </Link>;
};



export default ProductItem;
