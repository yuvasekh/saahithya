import React, { useEffect } from 'react';
import Novels from '../../Resources/Images/Novels.jpg'
import Kavitalu from '../../Resources/Images/poetry.jpg'
import Books2 from '../../Resources/Images/Books2.jpg';
import series from '../../Resources/Images/series.jpg';
import Others from '../../Resources/Images/Others.jpg';
import './Subcategory.scss'

// import './Categories.scss';
import { useNavigate,useLocation } from 'react-router-dom';
 const imagearray = [
  {img:Kavitalu,imgdesc:"Poetry"},{img:series,imgdesc:"Series"},
  {img:Novels,imgdesc:"Novel"},  {img:Books2,imgdesc:" Story Books"},
  {img:Others,imgdesc:"Others"}
  ];

const Subcategories = () => {
    const location = useLocation();
    const myProp = location.state && location.state.myProp;
    // console.log(myProp,"subcategoryItems")
    const navigate=useNavigate();

    const test=(item)=>
    {
        
       var items={
        subcategory:item.imgdesc,
        category:myProp
       }
      //  console.log(items,"total")
        navigate('/categories', { state: { myProp:items } })
    }
  return (

    <div  className='sub-cat-con'>
      <div className='row'>
        {imagearray.map((item, index) => (
          <div className=' col-12 col-md-3' key={index} onClick={()=>{test(item)}}>
            <img   src={item.img} className='sub-cat-img' alt={`image-${index}`} />
            <h2 className="heading-one" style={{marginLeft:'20px',marginRight:'15px',marginTop:'-60px',backdropFilter:'blur(20px) saturate(70%)',color:'white' }}>{item.imgdesc}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subcategories;