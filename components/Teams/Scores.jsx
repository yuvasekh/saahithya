import React, { useEffect } from 'react';

import img1 from '../../Resources/Images/horror.jpg';
import img2 from '../../Resources/Images/comedy.jpg';
import img3 from '../../Resources/Images/life.jpg';
import img4 from '../../Resources/Images/love.jpg';
import { useNavigate,useLocation } from 'react-router-dom';
 const imagearray = [
    {img:img1,imgdesc:"quizResults"},  {img:img2,imgdesc:"contestResults"},
    {img:img3,imgdesc:"pollResults"}]

const Scores = (props) => {
const test=((item)=>
{ 

let nav=item.imgdesc 
  props.sendData(nav)
})

  return (
    <div>  
       <h1> Select Category</h1>
    <div className='OnGoing-category-container'>
   
      {imagearray.map((item, index) => (
        <div className='OnGoing-container-img' key={index} onClick={()=>{test(item)}}>
          <img className='OnGoing-container-img-size'src={item.img}  alt={`image-${index}`} />
          <h2  className="heading-four" >{item.imgdesc}</h2>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Scores;