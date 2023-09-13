import React, { useEffect } from 'react';

import img1 from '../../Resources/Images/horror.jpg';
import img2 from '../../Resources/Images/comedy.jpg';
import img3 from '../../Resources/Images/life.jpg';
import img4 from '../../Resources/Images/love.jpg';
import { useNavigate,useLocation } from 'react-router-dom';
 const imagearray = [
    {img:img1,imgdesc:"quizarea"},  {img:img2,imgdesc:"contest"},
    {img:img3,imgdesc:"pollarea"}]

const OnGoingCompetation = (props) => {
const test=((item)=>
{ 

let nav=item.imgdesc 

  props.sendData(nav)

})

  return (
    <div>   <h1>   OnGoing Competations</h1>
    <div className='categorycontainer' style={{position:'relative',margin:'35px'}}>
   
      {imagearray.map((item, index) => (
        <div className='containerimg' key={index} onClick={()=>{test(item)}}>
          <img src={item.img} style={{ width: '340px', height: '200px' }} alt={`image-${index}`} />
          <h2 style={{ color: 'white', marginTop: '-42px', marginLeft: '30px' }}>{item.imgdesc}</h2>
        </div>
      ))}
    </div>
    </div>
  );
};

export default OnGoingCompetation;