import React from 'react'
import Backimage from '../assets/livraison.png'
import '../styles/Delivery.css'
import Navbar from '../components/Navbar'
function Trainer() {
  return (
    <>
    <Navbar />
      <div className='livraison'>  
       <div className='backdiv' style={{backgroundImage:'url('+Backimage+')'}}  >
         </div>
      
   </div>
   </>
    )
  }
export default Trainer
