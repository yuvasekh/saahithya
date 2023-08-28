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
      {img:thikkana,imgdesc:"ఆధునిక కవులు"},
       {img:srinadhudu,imgdesc:"వర్ధమాన కవులు"},
       {img:thikkana,imgdesc:"ఆధునిక కవులు"},
       {img:grandhakarthalu,imgdesc:"గ్రంధకర్తలు"},
       {img:srinadhudu,imgdesc:"వర్ధమాన కవులు"}
     
     
    ];
      const test=(item)=>
      {
      
         
          navigate('/subcateogories', { state: { myProp:item } })
      }
  return (
    <>

<div className='categorycontainers' style={{position:'relative',margin:'10px'}}>
      {imagearray.map((item, index) => (
        <div className='containerimg' key={index} onClick={()=>{test(item)}}>
          <img src={item.img} className='imgauthors' alt={`image-${index}`} />
          <h2 style={{ color: 'black', fontWeight:"bold", marginTop: '-42px', marginLeft: '30px' }}>{item.imgdesc}</h2>
        </div>
      ))}
    </div>


</>
  )
}

export default Authors