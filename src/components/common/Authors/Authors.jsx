import React from 'react'
import { Link } from "react-router-dom";
import './Authors.scss';
import { useNavigate } from 'react-router-dom';
import adinika from '../../../Resources/Images/Authors/adinika.jpg'
import grandha from '../../../Resources/Images/Authors/grandha.jpg'
import navala from '../../../Resources/Images/Authors/navala.jpg'
import prachina from '../../../Resources/Images/Authors/prachina.jpg'
import cinimapatallu from '../../../Resources/Images/Authors/cinimapatallu.jpg'

const Authors = () => {
    const navigate=useNavigate();
    const imagearray = [
      {img:prachina,imgdesc:"ప్రాచీన కవులు"},
      {img:grandha,imgdesc:"గ్రంథకర్తలు"},
      {img:adinika,imgdesc:"ఆధునిక కవులు"},
      {img:navala,imgdesc:"నవలా రచయితలు"},
      {img:cinimapatallu,imgdesc:"సినిమా పాటలు"}
     
     
    ];
      const test=(item)=>
      {
      
         
          navigate('/authorsgroup', { state: { myProp:item } })
      }
  return (
    <>
    <div >
  <div className='category-con-bg'>
    {imagearray.map((item, index) => (
      <div className='categorycontainers' key={index}>
        <div className='containerimg text-center' onClick={() => { test(item) }}>
          <img src={item.img} className='imgauthors' alt={`image-${index}`} />
          <h4 style={{ backdropFilter: 'blur(20px) saturate(70%)', color: 'black', fontWeight: 'bold' }}>{item.imgdesc}</h4>
        </div>
      </div>
    ))}
  </div>
</div>
</>
  )
}

export default Authors