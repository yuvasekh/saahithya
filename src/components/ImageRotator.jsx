import React, { useState, useEffect } from 'react';
import './ImageRotator.scss'
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
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
      <div className='content'>
        <h1>Publish your Book.
.</h1>
<h1>Publish your Story</h1>
<p className='para'>
All the tools you need to write, publish and sell your book in

</p>
<p> paperback and ebook Worldwide
</p>
        <Button className='bookssection' onClick={()=>{pagemove()}}>Books Section</Button>
      </div>
      <div className='imagescontent'>
      <img src={images[currentImageIndex]} alt="Rotating Image" style={{width:'320px',height:'320px'}}/>
      </div>

      {/* <ImageRotator images={images} /> */}
      
    </div>
  );
};

export default ImageRotator;
