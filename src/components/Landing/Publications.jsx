import React from 'react'
import './Publications.scss'
import srisripic from '../../Resources/srisripic.png'
import { Link } from "react-router-dom"; 

const Publications = () => {
  return (
    <>
  
        <div className="publications-bg-con">
             <h1 className="Heading">OUR PUBLICATIONS</h1>

             <div className="con-two">
                <Link to ="https://srisrikalavedika.com/" target="_blank">
                <img className="image-sri" src ={srisripic} alt="#"/>
                </Link>

             </div>
        </div>
      
 
    </>
  )
}

export default Publications
