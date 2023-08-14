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
    {img:Children,imgdesc:"పిల్లలు"},  {img:Athyadamika ,imgdesc:"ఆధ్యాత్మికం"},
    {img:strilu,imgdesc:"మహిళ"}, {img:Love,imgdesc:"ప్రేమ"},
     {img:Romance,imgdesc:"రొమాన్స్"}, {img:Samajikam,imgdesc:"సామాజికం"},
    {img:Health,imgdesc:"ఆరోగ్యం"}, {img:Horror,imgdesc:"హర్రర్"},
    {img:Comedy,imgdesc:"హాస్యం"}, {img:Life,imgdesc:"జీవితం"},
    {img:Science,imgdesc:"సైన్స్"},
    {img:Suspence,imgdesc:"సస్పెన్స్"}, {img:Anubandhalu,imgdesc:"అనుబంధాలు"},
    {img:Fantasy,imgdesc:"ఫాంటసీ"}, {img:Vantillu,imgdesc:"వంటిల్లు"},
    {img:Anubavalu,imgdesc:"అనుభవాలు"},
    {img:Mandalikhakathalu,imgdesc:"మాండలిక కథలు"}, {img:Prerana,imgdesc:"ప్రేరణ"},
    {img:Patalu,imgdesc:"పాటలు"}, {img:Minikathalu,imgdesc:"మినీ కథలు"},
    {img:Sports,imgdesc:"క్రీడలు"},
    {img:Detective,imgdesc:"డిటెక్టివ్"},
    {img:Crime,imgdesc:"క్రైమ్"},
    {img:Bio,imgdesc:"బయో"}
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

    <div className='categorycontainer' style={{position:'relative',margin:'35px'}}>
      {imagearray.map((item, index) => (
        <div className='containerimg' key={index} onClick={()=>{test(item)}}>
          <img src={item.img} style={{ width: '340px', height: '200px' }} alt={`image-${index}`} />
          <h2 style={{ color: 'white',backdropFilter:'blur(20px) saturate(70%)' ,fontWeight:'700', marginTop: '-42px', marginLeft: '30px' }}>{item.imgdesc}</h2>
        </div>
      ))}
    </div>
  );
};

export default Categories;