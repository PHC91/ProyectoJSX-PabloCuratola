import {createContext, useState} from "react";

export const CartContext = createContext(null)


const ShoppingCartProvider = ({children}) =>{
    const [cart,setCart] = useState([])

    const mediapalta = mediapalta

    return(
        <CartContext.Provider value={{cart,setCart,mediapalta}}>
            {children}
        </CartContext.Provider>
    )
}

export default ShoppingCartProvider