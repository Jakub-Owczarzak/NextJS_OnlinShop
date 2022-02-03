import React, { useContext } from 'react';
import Button from '../components/Button';
import RemoveIcon from '../components/RemoveIcon.js';
import { CartContext } from '../context/storeContext';
import productStyles from '../styles/Product.module.css'


const Cart = (props) => {
    const { state, dispatch } = useContext(CartContext);


    const handleAddProduct = (el) => {
        dispatch({
            type: "ADD_PRODUCT",
            payload: { amount: 1, product: { id: el.product.id } }
        })
    }
    20
    const handleSubtractProduct = (el) => {
        dispatch({
            type: "DELETE_PRODUCT",
            payload: { amount: 1, product: { id: el.product.id } }
        })
    }

    const handleCleanCart = () => {
        dispatch({
            type: "CLEAR_CART",
        })
    }
    return <div onClick={(event) => {
        event.stopPropagation();
    }} className={productStyles.checkoutGrid}>

        {state.itemsInCart.length === 0 ? <div>No products in busket</div> : <div className={productStyles.summarySection}>
            <div className={productStyles.summary}>To pay {state.itemsInCart.reduce((partialSum, el) => partialSum + el.amount * el.product.price, 0)}</div>
            <Button type="subtract" title="Clean cart" action={handleCleanCart} />
        </div>
        }

        <div className={productStyles.checkoutProducts}>
            {state.itemsInCart.map((el, index) => <div key={index} className={productStyles.products}>
                <RemoveIcon productId={el.product.id} />
                <img className={productStyles.checkoutImage} src={el.product.image} />
                <div className={productStyles.infoChekoutWrapper}>
                    <h2>{el.product.name}</h2>
                    <h2>Amount: {el.amount}</h2>
                    <p>Price per item {el.product.price}</p>
                    <p>Summary per items:{el.amount * el.product.price}</p>
                    <div className={productStyles.controlWrapper}>
                        <Button type="subtract" title="Subtract" action={() => handleSubtractProduct(el)} />
                        <Button type="add" title="Add" action={() => handleAddProduct(el)} />
                    </div>

                </div>
            </div>)}
        </div>




    </div>

};


export default Cart;
