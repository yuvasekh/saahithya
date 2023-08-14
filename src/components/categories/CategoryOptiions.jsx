import React, { useEffect } from 'react';

import img1 from '../../Resources/Images/horror.jpg';
import img2 from '../../Resources/Images/comedy.jpg';
import img3 from '../../Resources/Images/life.jpg';
import img4 from '../../Resources/Images/love.jpg';
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

// import './Categories.scss';
import { useNavigate,useLocation } from 'react-router-dom';
 const imagearray = [
    {img:img1,imgdesc:"Audio"},  {img:img2,imgdesc:"Books"},
  ];

const CategoryOptions = () => {
    const navigate=useNavigate()
    const test=((item)=>
    {
  alert(item.imgdesc)
  navigate('/categories', { state: { myProp:item } })
    })
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

export default CategoryOptions;