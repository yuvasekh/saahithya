import React, { useEffect } from 'react';
// import './OnGoingCompetation.scss'

import img1 from '../../Resources/Images/horror.jpg';
import img2 from '../../Resources/Images/comedy.jpg';
import img3 from '../../Resources/Images/life.jpg'; 
import img4 from '../../Resources/Images/love.jpg';
import { useNavigate,useLocation } from 'react-router-dom';
 const imagearray = [
    {img:img1,imgdesc:"quiz"},  {img:img2,imgdesc:"contest"},
    {img:img3,imgdesc:"poll"}]

const Events = (props) => {
    const navigate=useNavigate()
const test=((item)=>
{ 

let nav=item.imgdesc 
if(nav=="quiz")
{
    navigate('/quiz')
}
if(nav=="poll")
{
    navigate('/poll')
}
if(nav=="contest")
{
    navigate('/contest')
}


})

  return (
    <div>  
       <h1> OnGoning Competetion</h1>
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

export default Events;