import React, { useEffect } from 'react';
import './CategoryOptions.scss'

import Audio from '../../Resources/Images/Audio.jpg';
import Books from '../../Resources/Images/Books.jpg';
import Clips from '../../Resources/Images/Vedioclips.jpg';






import { useNavigate,useLocation } from 'react-router-dom';
 const imagearray = [
    {img:Audio,imgdesc:"Audio"}, 
     {img:Books,imgdesc:"Books"}, 
     {img:Clips,imgdesc:"Clips"}
  ];

const CategoryOptions = () => {
    const navigate=useNavigate()
    const test=((item)=>
    {
  alert(item.imgdesc)
  navigate('/categories', { state: { myProp:item } })
    })
  return (

    <div className='category-container' style={{position:'relative',margin:'35px'}}>
      {imagearray.map((item, index) => (
        <div className='container-img' key={index} onClick={()=>{test(item)}}>
          <img src={item.img} style={{width: '470px', height: '300px', borderRadius:"5px"}} alt={`image-${index}`} />
          <h2 style={{ color: 'white', marginTop: '-42px', marginLeft: '30px' }}>{item.imgdesc}</h2>
        </div>
      ))}
    </div>
  );
};


export default CategoryOptions;