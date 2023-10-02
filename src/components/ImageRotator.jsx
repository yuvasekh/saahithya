import React, { useState, useEffect } from 'react';
import './ImageRotator.scss'
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


const ImageRotator = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
const navigate=useNavigate()
  // Function to update the image index every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    // Clear the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(interval);
  }, [images]);
const pagemove=()=>
{

  navigate('/home')
}
  return (
    <div className="image-rotator">
      <div className='row'>
        <div className='content col-12 col-md-8'>
          <h1 style={{paddingTop:'10px',fontSize:'50px'}}>మీ పుస్తకాన్ని ప్రచురించండి...</h1>
          <h1 style={{paddingTop:'10px',fontSize:'50px'}}>Publish your Book...</h1>

          <br/>
          <p style={{fontSize:'25px',padding:'10px'}} >
            "సాహిత్యం అంటే తెల్లకాగితం పై రాసే నల్లని అక్షరాలు కాదు..<br/>  మనసు విదిల్చిన భావోద్వేగాలు"
          </p>
          <Button className='bookssection btn' onClick={()=>{pagemove()}} style={{ backgroundColor:"#266B69",fontFamily:"Trebuchet MS" ,padding:'20px'}}>Books Section</Button>
        </div>

        <div className='imagescontent col-12 col-md-4'>
          <img  className="image-rotator-image-size" src={images[currentImageIndex]} alt="Rotating Image"/>
        </div>

      {/* <ImageRotator images={images} /> */}
      </div>
    </div>
  );
};

export default ImageRotator;
