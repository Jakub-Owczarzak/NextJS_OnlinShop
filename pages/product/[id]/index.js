import React, { useContext } from 'react';
import Link from 'next/link';
import productStyles from '../../../styles/Product.module.css'
import { CartContext } from '../../../context/storeContext';
import Button from '../../../components/Button';

const Product = ({ product }) => {
    const { state, dispatch } = useContext(CartContext);

    const handleAddToCart = () => {
        dispatch({
            type: "ADD_PRODUCT",
            payload: { amount: 1, product: { id: product[0].id, price: product[0].price, name: product[0].name, image: product[0].image } }

        })
    }

    return (<>
        <div className={productStyles.card}>

            <img className={productStyles.image} src={product[0].image} />
            <h2>{product[0].name}</h2>
            <h2>Price:{product[0].price}</h2>
            <p>{product[0].description}</p>
            <br />
            <div className={productStyles.controlWrapper}>
                <Link style={{ textDecoration: 'none' }} href="/"> &larr; Back</Link>
                <Button type="action" title={'Add to cart'} action={handleAddToCart} />
            </div>

        </div>

    </>);
};



export const getStaticProps = async (context) => {

    const res = await fetch(`http://localhost:3000/api/products/${context.params.id}`)
    const data = await res.json();
    return {
        props: {
            product: data.productById
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`http://localhost:3000/api/products_id`);
    const { data } = await res.json();

    const ids = data.products.map(product => product.id);
    const paths = ids.map(id => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false
    }
}

export default Product;
