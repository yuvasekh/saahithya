import React, { useEffect } from 'react';
import './CategoryOptions.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

import Audio from '../../Resources/Images/Audio.jpg';
import Books from '../../Resources/Images/Books.jpg';
import Clips from '../../Resources/Images/Vedioclips.jpg';

import audio from '../../Resources/Images/Options/audio.jpg'
import video from '../../Resources/Images/Options/video.jpg'
import book from '../../Resources/Images/Options/book.jpg'





import { useNavigate,useLocation } from 'react-router-dom';
 const imagearray = [
    {img:Audio,imgdesc:"Audio"}, 
     {img:Books,imgdesc:"Books"}, 
     {img:Clips,imgdesc:"Clips"}
  ];

  const teluguimagearray = [
    {img:audio,imgdesc:"ఆడియో"}, 
     {img:book,imgdesc:"పుస్తకములు "}, 
     {img:video,imgdesc:"వీడియో"}
  ];

const CategoryOptions = () => {
    const navigate=useNavigate()
    const location = useLocation();
    const myProp = location.state && location.state.myProp;
    console.log(myProp,"checkprops")
    const test=((item)=>
    {
      // alert(item.imgdesc)
      var append={language:myProp,BookType:item.imgdesc}
      navigate('/categories', { state: { myProp:append } })
    })
    return (
      <>
      <div className='row'>
    {myProp === "Telugu"
    ? teluguimagearray.map((item, index) => (
        <div className='col-12 col-md-3' style={{margin:'30px'}}>
        {/* {imagearray.map((item, index) => ( */}
          <div  key={index} onClick={()=>{test(item)}}>
            <img src={item.img} className='img-opt' alt={`image-${index}`} />
            <h2 style={{ color: 'white', marginTop: '-42px', marginLeft: '30px' }}>{item.imgdesc}</h2>
          </div>
          </div>
        
      ))
      : imagearray.map((item, index) => (
      <div className=' col-12 col-md-3' style={{position:'relative',margin:'30px'}}>
        <div  key={index} onClick={()=>{test(item)}}>
          <img src={item.img} className='img-opt' alt={`image-${index}`} />
          <h2 style={{ color: 'white', marginTop: '-42px', marginLeft: '30px' }}>{item.imgdesc}</h2>
        </div>
      </div>
      ))}
      </div>
    </>
  );
};


export default CategoryOptions;