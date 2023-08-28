import React, { useEffect, useState } from 'react';
// import logoimg from '../../Resources/saahithya_logo.jpg';
import Read from '../../Resources/Images/Landing_components/Read.jpg';
import Write from '../../Resources/Images/Landing_components/Write.jpg';
import Record from '../../Resources/Images/Landing_components/Record.jpg'
import Upload from '../../Resources/Images/Landing_components/Upload.jpg'
import Watch from '../../Resources/Images/Landing_components/Watch.jpg'
import Listen from '../../Resources/Images/Landing_components/Listen.jpg'
// import telugu from '../../Resources/telugutalli2.jpg';
// import substuff from '../../Resources/Images/banner.jpg';
import DummyCarousel from '../DummyCarousel';
import './Landingpage.scss';
import Authors from '../common/Authors/Authors';
import ImageRotator from '../ImageRotator';
import { Button, Modal } from 'antd';
import Register from '../Login/Register';
import Looks from '../Landing/Looks';
// import Looks from '.././Landing/Looks.jsx';
// import bookstore from '../../Resources/bookstore.jpg'
// import img1 from '../../Resources/img1.jpg'

const Landingpage = () => {
  const [open, setOpen] = useState(false);
  const images = [
   Upload,
   Read,
   Write,
   Watch,
   Listen,
   Record
    // Add more image URLs here
  ];
  useEffect(()=>
  {
    setOpen(true)

  },[])
  return (
    <>
    <div className="landing-con">
    <div className='landing-page'>
      <ImageRotator images={images} />
      <div className='animationcontainer'>
      </div>
       {/* <Modal
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={700}
      >
      <div style={{display:'flex',justifyContent:'start',marginLeft: '-500px'}}><Register/></div>
      </Modal> */}
    
      {/* <div>
      <img src={logoimg} className='saahithyalogo' />
      </div> */}

      <br></br>

      <div className='logoimgs zoom-in'>
 
        {/* <div className='cardcontain'>
          <div className='card'>
            A reader lives a thousand lives before he dies. The man who never reads lives only one
          </div>
          <div className='card'>There is no friend as loyal as a book</div>
        </div> */}
        <br />
            
        {/* <h1 style={{marginLeft:'50px'}}>Books Section</h1> */}
        <br></br>
        <div>
        <DummyCarousel />
        </div>

      </div>
    </div>

      <div><Looks/></div>
      <div>
        <h1 style={{marginLeft:'50px'}}>Authors</h1>
        <Authors/>
        </div>
        </div>
      </>
  );
};

export default Landingpage;
