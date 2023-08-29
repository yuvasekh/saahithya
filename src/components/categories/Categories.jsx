import React from 'react';


import Children from '../../Resources/Images/childrens.jpg';
import Athyadamika from '../../Resources/Images/athyadamikam.jpg';
import strilu from '../../Resources/Images/woman.jpg';
import Love from '../../Resources/Images/love.jpg';
import Romance from '../../Resources/Images/romance.jpg';
import Samajikam from '../../Resources/Images/samajikam.jpg';
import Health from '../../Resources/Images/health.jpg';
import Horror from '../../Resources/Images/horror.jpg';
import Comedy from '../../Resources/Images/comedy.jpg';
import Life from '../../Resources/Images/life.jpg';
import Science from '../../Resources/Images/science.jpg';
import Suspence from '../../Resources/Images/suspense.jpg';
import Anubandhalu from '../../Resources/Images/anubhandhallu.jpg';
import Fantasy from '../../Resources/Images/fantasy.jpg';
import Vantillu from '../../Resources/Images/vantillu.jpg';
import Anubavalu from '../../Resources/Images/anubhavallu.jpg';
import Mandalikhakathalu from '../../Resources/Images/mandalika kathallu.jpg';
import Prerana from '../../Resources/Images/prerana.jpg';
import Patalu from '../../Resources/Images/songs.jpg';
import Minikathalu from '../../Resources/Images/mini kathalu.jpg';
import Sports from '../../Resources/Images/sports.jpg';
import Detective from '../../Resources/Images/Detective.jpg';
import Crime from '../../Resources/Images/Crime.jpg';
import Bio from '../../Resources/Images/Bio.jpg';

import './Categories.scss';




import { useLocation, useNavigate } from 'react-router-dom';
 const imagearray = [
    {img:Children,imgdesc:"Child"},  {img:Athyadamika ,imgdesc:"athyadmika"},
    {img:strilu,imgdesc:"Women"}, {img:Love,imgdesc:"Prema"},
     {img:Romance,imgdesc:"Romance"}, {img:Samajikam,imgdesc:"samajikam"},
    {img:Health,imgdesc:"Health"}, {img:Horror,imgdesc:"Horror"},
    {img:Comedy,imgdesc:"Comedy"}, {img:Life,imgdesc:"Life"},
    {img:Science,imgdesc:"Science"},
    {img:Suspence,imgdesc:"Suspence"}, {img:Anubandhalu,imgdesc:"Anubandhalu"},
    {img:Fantasy,imgdesc:"Fantasy"}, {img:Vantillu,imgdesc:"Kitchen"},
    {img:Anubavalu,imgdesc:"Anubavalu"},
    {img:Mandalikhakathalu,imgdesc:"Mandalika kathalu"}, {img:Prerana,imgdesc:"Prerana"},
    {img:Patalu,imgdesc:"Patalu"}, {img:Minikathalu,imgdesc:"Mini kathalu"},
    {img:Sports,imgdesc:"Sports"},
    {img:Detective,imgdesc:"Detective"},
    {img:Crime,imgdesc:"Crime"},
    {img:Bio,imgdesc:"Bio"}
  ];

const Categories = () => {  
    const navigate=useNavigate();
    const location = useLocation();

  
    const myProp = location.state && location.state.myProp;
    console.log(myProp,"sssssssss")
    const test=(item)=>
    {
       console.log(item,"cnecccccccccccc")
       item['type']=myProp.imgdesc
      navigate('/subcateogories', { state: { myProp:item } })
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

export default Categories;