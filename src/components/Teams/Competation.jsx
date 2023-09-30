import React, { useEffect } from 'react';
import './Competation.scss';

import img1 from '../../Resources/Images/horror.jpg';
import img2 from '../../Resources/Images/comedy.jpg';
import img3 from '../../Resources/Images/life.jpg';
// import img4 from '../../Resources/Images/love.jpg';
import { useNavigate,useLocation } from 'react-router-dom';


 const imagearray = [

    {img:img1,imgdesc:"quiz"},  {img:img2,imgdesc:"contest"},
    {img:img3,imgdesc:"poll"}
    
  ]

const CreateCompetation = (props) => {
const test=((item)=>
{ 
console.log(item,"itemaname")
let nav=item.imgdesc 

  props.sendData(nav)

})



  return (
    <div className='team-cat-op-con'>
      {imagearray.map((item, index) => (
        <div className='team-cat-op-con2' key={index} onClick={()=>{test(item)}}>
          <img  className='team-op-img' src={item.img}  alt={`image-${index}`} />
          <h2 className='heading-three'>{item.imgdesc}</h2>
        </div>
      ))}
    </div>
  );


};

export default CreateCompetation;