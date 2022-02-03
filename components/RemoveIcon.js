import React, { useContext } from 'react';
import removeIconStyles from '../styles/RemoveIcon.module.css';
import removeImage from '../public/remove.png';
import { CartContext } from '../context/storeContext';

const RemoveIcon = ({ productId }) => {
    const { state, dispatch } = useContext(CartContext);

    const handleRemoveProduct = (id) => {
        dispatch({
            type: "REMOVE_PRODUCT",
            payload: id
        })
    }


    return <div onClick={() => handleRemoveProduct(productId)} className={removeIconStyles.wrapper}><img src={removeImage.src} /></div>;
};

export default RemoveIcon;
