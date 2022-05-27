import React from 'react'
import {MenuList} from '../helpers/ProductList'
import MenuItem from '../components/MenuItem'
import Imcimage from '../assets/sucre2.jpg'
import '../styles/Models.css'
import Navbar from '../components/Navbar'

function Products() {
  return (
    <>
    <Navbar />
    <div className='products'  > 
    <div className='imcdiv' style={{backgroundImage:'url('+Imcimage+')'}}  >
      <div className='imcleft'>
      <h1>Les Gateaux c'est vraiment un Régal</h1>
     
     </div>
      </div>
    <h1 className='prodoctsTitle'>OUR MODELS</h1>
    <div className='productsList'>
      {MenuList.map((menuItem, Key )=>{
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
    </>
  );
}

export default Products