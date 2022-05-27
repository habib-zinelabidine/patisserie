import { createContext, useState } from "react";



export const CartContext = createContext([])



export const CartProvider = ({children}) => {

    const [items, setItems]  =useState([]);
    const addItem = (item) =>  setItems(prev => setItems([...prev, item]))
    const remove = (id) => setItems(prev => prev.filter(item => item.id !== id))

   return <CartContext.Provider value={{items, addItem, remove}}>
       {children}
   </CartContext.Provider>
}



