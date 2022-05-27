import React, { useContext } from 'react'
import Logo from '../assets/logo1.png'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
import {AiOutlineShoppingCart} from "react-icons/ai";
import {CartContext} from '../context/CartContext'


function Navbar() {
  const {items} = useContext(CartContext)
  return (
    <div className='navbar'> 
      <div className='leftSide'>
         <Link to="/home"> <img src={Logo}/> </Link> 
          <div className='hiddenlinks'>
          <Link to="/models"> Models </Link>
          <Link to="/payment"> Payment </Link>
          <Link to="/delivery"> Livraison </Link>
          <Link to="/contact"> Contact </Link>

          </div>
           </div>
    
       <div className='rightSide'>
              <span>{items.length}</span>
              <Link to="Shop">
          <AiOutlineShoppingCart color='white'></AiOutlineShoppingCart> 
          </Link>
          <Link to="/about"> About </Link>
          <Link to="/"> Logout </Link>
        </div>
    </div>
  )
}

export default Navbar