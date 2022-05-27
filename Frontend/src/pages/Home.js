import React from 'react'
import {MenuList} from '../helpers/HomeList'
import BannerImage from '../assets/back1.jpg'
import  '../styles/Home.css'
import '../styles/Footer.css'
import MenuItem from '../components/MenuItem'
import Navbar from '../components/Navbar'


function Home() {
  return (
    <>
    <Navbar />
    <div className='home' style={{backgroundImage:'url('+BannerImage+')'}}  >
      <div className='headerContainer'  >
        <h1 class="elementor-heading-title elementor-size-default">Deluxe Gateau , plus de goût pour les gourmets  </h1>
        
        
      </div>
     
      </div>
      <div className='homeList'>
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
      </>
  );
}

export default Home