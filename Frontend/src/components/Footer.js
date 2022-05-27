import React from 'react'
import {AiFillInstagram} from "react-icons/ai";
import {FaFacebookSquare} from "react-icons/fa";
import '../styles/Footer.css';
import { Link } from 'react-router-dom'

function Footer() {
  return ( 
    <div className='footer'>
        <div className='socialMedia'>
        <Link  to="#"> <AiFillInstagram size={50}> </AiFillInstagram> </Link>
        <Link  to="#"> <FaFacebookSquare size={45}> </FaFacebookSquare> </Link>
          </div>

        <p> © Copyright 2022..  All Right Reserved.</p>
        
    </div>
    
  )
}

export default Footer