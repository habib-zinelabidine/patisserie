import React, { useContext } from 'react'
import {CartContext} from '../context/CartContext'
import MenuItem from './MenuItem';

function Shop() {
  const {items} = useContext(CartContext)
  return (
    <div>

<div className='homeList'>
      {items.map((menuItem, Key )=>{
        return (
        <MenuItem 
                  id={menuItem.id}
                  Key={Key} 
                  image={menuItem.image} 
                  name={menuItem.name} 
                  price={menuItem.price}
                  />
        );
    })}
    </div>


    </div>
  )
}

export default Shop