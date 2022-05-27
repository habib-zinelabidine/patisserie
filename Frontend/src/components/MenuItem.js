import React from 'react'
import '../styles/MenuItem.css'
import {Link, useLocation} from 'react-router-dom'

import {CartContext} from '../context/CartContext'
import {useContext} from "react"


function MenuItem({image, name, price, id}) {
  const {pathname} = useLocation()

 
  const cartContext = useContext(CartContext)
 
  const handleClick = (e) => {
  
    cartContext.addItem({image, name, price, id})
  }

  const handleDelete = () => {
   
    cartContext.remove(id)
  }
  
     
  return (
    <div className='menuItem'>
        <div className='img-product' style={{backgroundImage:'url('+image+')'}} ></div>
        <h1> {name}</h1>
        <p>{price} Dt</p>
        {pathname === '/Shop' ? <button onClick={handleDelete} className='btn btn-primary'>Supprimer</button>  : <button onClick={handleClick} className='btn-primary'
                            >Ajouter au panier</button>}



    </div>
  )
}

export default MenuItem 
