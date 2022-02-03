import React, { useContext } from 'react';
import { CartContext } from '../context/storeContext';
import busketImage from '../public/busket.png';
import busketStyles from '../styles/Busket.module.css'
import Link from 'next/link'


const Busket = (props) => {
    const { state, dispatch } = useContext(CartContext);
    return (
        <>
            {state.itemsInCart.length > 0 &&
                <Link href="/cart">
                    <div className={busketStyles.busketWrapper}><img src={busketImage.src} />
                        <div className={busketStyles.productCounter}>{state.itemsInCart.reduce((partialSum, el) => partialSum + el.amount, 0)}</div>
                    </div>
                </Link>
            }
        </>
    )
};

export default Busket;
