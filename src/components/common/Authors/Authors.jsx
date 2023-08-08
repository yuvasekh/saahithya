import React from 'react'
import { Link } from "react-router-dom";
import './Authors.scss';
import { useNavigate } from 'react-router-dom';
// import nannaya from '../../../Resources/Images/nanaya.jpg'
import thikkana from '../../../Resources/Images/thikkana.jpg'
// import pothana from '../../../Resources/Images/pothana.jpg'
import srinadhudu from '../../../Resources/Images/srinadhudu.jpg'
import grandhakarthalu from '../../../Resources/Images/grandhakarthalu.jpg'
const Authors = () => {
    const navigate=useNavigate();
    const imagearray = [
        // {img:nannaya,imgdesc:"ప్రాచీన కవులు"},  
        {img:thikkana,imgdesc:"ఆధునిక కవులు"},
        // {img:pothana,imgdesc:"నవలా రచయితలు"}, 
        {img:srinadhudu,imgdesc:"వర్ధమాన కవులు"},
        {img:grandhakarthalu,imgdesc:"గ్రంధకర్తలు"}
       
      ];
      const test=(item)=>
      {
      
         
          navigate('/categorieitem', { state: { myProp:item } })
      }
  return (
    <>

<div className='categorycontainers' style={{position:'relative',margin:'35px'}}>
      {imagearray.map((item, index) => (
        <div className='containerimg' key={index} onClick={()=>{test(item)}}>
          <img src={item.img} className='imgauthors' alt={`image-${index}`} />
          <h2 style={{ color: 'white', marginTop: '-42px', marginLeft: '30px' }}>{item.imgdesc}</h2>
        </div>
      ))}
    </div>


</>
  )
}

export default Authors