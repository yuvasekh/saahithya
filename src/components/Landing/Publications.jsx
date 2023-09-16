import React from 'react'
import './Publications.scss'
import sri from '../../Resources/Images/sri.png'
import { Link } from "react-router-dom"; 

const Publications = () => {
  return (
    <>
  
        <div className="publications-bg-con">
             <h1 className="Heading">OUR PUBLICATIONS</h1>

             <div className="con-two">
                <Link to ="https://srisrikalavedika.com/" target="_blank">
                  <img className="image-sri" src ={sri} alt="#"/>
                </Link>

             </div>
        </div>
      
 
    </>
  )
}

export default Publications
