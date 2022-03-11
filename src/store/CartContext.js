
import {createContext, useState} from 'react'
import { getCartFromLocalStorage } from '../utils/storageHelper/CartStorageHelper';

const CartContext =  createContext(null);


export const CartProvider = ({children}) => {

    let defaultCart = getCartFromLocalStorage()
    const [cart, setCart] = useState(defaultCart);


    const values = {
        cart,
        setCart
    }

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>

}

export default CartContext