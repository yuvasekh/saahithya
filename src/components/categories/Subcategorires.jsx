import React, { useEffect } from 'react';
import Novels from '../../Resources/Images/Novels.jpg'
import Books2 from '../../Resources/Images/Books2.jpg';
import Quotes from '../../Resources/Images/Quotes.jpg';
import Cartoons from '../../Resources/Images/Cartoon.jpg';
import Others from '../../Resources/Images/Others.jpg';
// import img5 from '../../Resources/Images/history.jfif';
// import img6 from '../../Resources/Images/child sahityam.jfif';
// import img7 from '../../Resources/Images/woman.jpg';
// import img8 from '../../Resources/Images/samajikam.jfif';
// import img9 from '../../Resources/Images/arokyam.jpg';
// import img10 from '../../Resources/Images/ATHYADHIKAM.jpg';
// import img11 from '../../Resources/Images/suspense.jfif';
// import img12 from '../../Resources/Images/science ff.jfif';
// import img13 from '../../Resources/Images/anubhandhaluu.jfif';
// import img14 from '../../Resources/Images/fantasyy.jfif';
// import img15 from '../../Resources/Images/poerty.jfif';
// import img16 from '../../Resources/Images/vantilluu.jfif';
// import img17 from '../../Resources/Images/anubhavaluu.jfif';
// import img18 from '../../Resources/Images/LGBTt.jpg';
// import img19 from '../../Resources/Images/mandalika kathaluu.jfif';
// import img20 from '../../Resources/Images/preranaa.jfif';
// import img21 from '../../Resources/Images/pataluu.jfif';
// import img22 from '../../Resources/Images/mini kathaluu.jfif';
// import img23 from '../../Resources/Images/sportss.jfif';
// import img24 from '../../Resources/Images/kotha rachanaluu.jfif';
// import img25 from '../../Resources/Images/blogg.jfif';

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
    const navigate=useNavigate();

    const test=(item)=>
    {
        
       var items={
        subcategory:item,
        category:myProp
       }
       console.log(items,"total")
        navigate('/categorieitem', { state: { myProp:items } })
    }
  return (

    <div className='categorycontainer' style={{position:'relative',margin:'35px'}}>
      {imagearray.map((item, index) => (
        <div className='containerimg' key={index} onClick={()=>{test(item)}}>
          <img src={item.img} style={{ width: '340px', height: '200px' }} alt={`image-${index}`} />
          <h2 style={{ color: 'Black', marginTop: '-42px', marginLeft: '30px' }}>{item.imgdesc}</h2>
        </div>
      ))}
    </div>
  );
};

export default Subcategories;