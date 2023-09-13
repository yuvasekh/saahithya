import React, { useEffect } from 'react';
import Novels from '../../Resources/Images/Novels.jpg'
import Books2 from '../../Resources/Images/Books2.jpg';
import Quotes from '../../Resources/Images/Quotes.jpg';
import Cartoons from '../../Resources/Images/Cartoon.jpg';
import Others from '../../Resources/Images/Others.jpg';

import './Categories.scss';
import { useNavigate,useLocation } from 'react-router-dom';
 const imagearray = [
    {img:Novels,imgdesc:"Novel"},  {img:Books2,imgdesc:"Books"},
    {img:Quotes,imgdesc:"Quotes"}, {img:Cartoons,imgdesc:"Cartoons"},
    {img:Others,imgdesc:"Others"}
  ];

const Subcategories = () => {
    const location = useLocation();
    const myProp = location.state && location.state.myProp;
    console.log(myProp,"subcategoryItems")
    const navigate=useNavigate();

    const test=(item)=>
    {
        
       var items={
        subcategory:item.imgdesc,
        category:myProp
       }
       console.log(items,"total")
        navigate('/categorieitem', { state: { myProp:items } })
    }
  return (

    <div className='categorycontainer' >
      {imagearray.map((item, index) => (
        <div className='containerimg' key={index} onClick={()=>{test(item)}}>
          <img   src={item.img} className='category-image-size01' alt={`image-${index}`} />
          <h2 className="heading-one" style={{backdropFilter:'blur(20px) saturate(70%)' }}>{item.imgdesc}</h2>
        </div>
      ))}
    </div>
  );
};

export default Subcategories;