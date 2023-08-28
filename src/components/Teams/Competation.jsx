import React, { useEffect } from 'react';

import img1 from '../../Resources/Images/horror.jpg';
import img2 from '../../Resources/Images/comedy.jpg';
import img3 from '../../Resources/Images/life.jpg';
import img4 from '../../Resources/Images/love.jpg';
import { useNavigate,useLocation } from 'react-router-dom';
 const imagearray = [
    {img:img1,imgdesc:"Quiz"},  {img:img2,imgdesc:"Contest"},
    {img:img3,imgdesc:"Poll"}]


const test=((item)=>
{
console.log(item.imgdesc)   


})
const CreateCompetation = (props) => {
    const location = useLocation();
    const myProp = location.state && location.state.myProp;
    console.log(myProp)
    console.log(props.key,"props")
  return (
    <div className='categorycontainer' style={{position:'relative',margin:'35px'}}>
      {imagearray.map((item, index) => (
        <div className='containerimg' key={index} onClick={()=>{test(item)}}>
          <img src={item.img} style={{ width: '340px', height: '200px' }} alt={`image-${index}`} />
          <h2 style={{ color: 'white', marginTop: '-42px', marginLeft: '30px' }}>{item.imgdesc}</h2>
        </div>
      ))}
    </div>
  );
};

export default CreateCompetation;