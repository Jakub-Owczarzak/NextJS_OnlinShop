import React, { createContext, useReducer } from 'react';

const initialState = {
    itemsInCart: []
}

const SET_CART = "SET_CART";
const ADD_PRODUCT = "ADD_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const CLEAR_CART = "CLEAR_CART";
const REMOVE_PRODUCT = "REMOVE_PRODUCT"

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART:
            return { ...state, ...action.payload }
        case ADD_PRODUCT:
            const itemIndex = state.itemsInCart.findIndex(el => el.product.id === action.payload.product.id);
            if (itemIndex >= 0) {
                const copy = {
                    ...state.itemsInCart[itemIndex], amount: state.itemsInCart[itemIndex].amount + 1
                }
                const productsCopy = [...state.itemsInCart]
                productsCopy.splice(itemIndex, 1, copy)
                return {
                    ...state,
                    itemsInCart: productsCopy
                }
            }
            return {
                ...state, itemsInCart: [...state.itemsInCart, action.payload]
            }
        case DELETE_PRODUCT:
            const removeItemIndex = state.itemsInCart.findIndex(el => el.product.id === action.payload.product.id);
            if (removeItemIndex >= 0) {
                const copyItem = {
                    ...state.itemsInCart[removeItemIndex], amount: state.itemsInCart[removeItemIndex].amount > 1 ? state.itemsInCart[removeItemIndex].amount - 1 : 0
                }
                const productsCopy = [...state.itemsInCart]
                productsCopy.splice(removeItemIndex, 1, copyItem)
                return {
                    ...state,
                    itemsInCart: productsCopy
                }
            }
            return {
                ...state, itemsInCart: [...state.itemsInCart, action.payload]
            }

        case REMOVE_PRODUCT:
            return {
                ...state,
                itemsInCart: state.itemsInCart.filter(el => el.product.id != action.payload)
            }

        case CLEAR_CART:
            return {
                ...state,
                itemsInCart: []
            }
        default:
            return {
                ...state
            }
    }
}

export const CartContext = createContext();

export const CartProvider = ({ children }) => {


    const [state, dispatch] = useReducer(reducer, initialState);

    const value = { state, dispatch }

    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}