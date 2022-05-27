import React from "react";
import '../styles/Paiement.css'
import Backimage from '../assets/paiements.jpg'
import Navbar from "../components/Navbar";

function Paiement(){
    return (
        <>
    <Navbar />
        <div className='paiement'>
        <div className='backdiv' style={{backgroundImage:'url('+Backimage+')'}}  >
     </div>
     
     </div>
     </>
     
    );
}
export default Paiement