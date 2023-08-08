import React, { useEffect, useState } from 'react';
// import logoimg from '../../Resources/saahithya_logo.jpg';
import Read from '../../Resources/Images/Landing_components/read.jpg';
import Write from '../../Resources/Images/Landing_components/write.jpg';
import Record from '../../Resources/Images/Landing_components/record.jpg'
import Upload from '../../Resources/Images/Landing_components/upload.jpg'
import Watch from '../../Resources/Images/Landing_components/watching.jpg'
import Listen from '../../Resources/Images/Landing_components/listen.jpg'
// import telugu from '../../Resources/telugutalli2.jpg';
// import substuff from '../../Resources/Images/banner.jpg';
import DummyCarousel from '../DummyCarousel';
import './Landingpage.scss';
import Authors from '../common/Authors/Authors';
import ImageRotator from '../ImageRotator';
import { Button, Modal } from 'antd';
import Register from '../Login/Register';
// import bookstore from '../../Resources/bookstore.jpg'
// import img1 from '../../Resources/img1.jpg'

const Landingpage = () => {
  const [open, setOpen] = useState(false);
  const images = [
    Upload,
    Read,
   Write,
   Watch,
   Listen
    // Add more image URLs here
  ];
  useEffect(()=>
  {
    setOpen(true)

  },[])
  return (
    <div className='landing-page'>
      <ImageRotator images={images} />
      <div className='animationcontainer'>
    {/* <div className='video'>
          <iframe
          className='iframeclass'

            src='https://www.youtube.com/embed/kDtBP5U3Hms'
            title='saahithya com'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
            </div> */}
            {/* <div className='imgtelugu'>
          <img src={telugu} className='telugutalli'/>
          </div> */}
        </div>
       <Modal
        centered
        open={open}
     onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
       
        width={700}

      >
   <div style={{display:'flex',justifyContent:'start',marginLeft: '-500px'}}><Register/></div>
        
   

      </Modal>
    
      <div>
      {/* <img src={logoimg} className='saahithyalogo' /> */}
      </div>
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
        <DummyCarousel />
       
        
        <div className='features'>
          <div className='subcontents'>
            <img src={Read} className='subcontentimg'   />
            <h2 style={{textAlign:'center'}}>Read</h2>
            <p style={{textAlign:'center'}}>
            A reader lives a thousand lives before he dies
       
            </p>
            </div>
          <div className='subcontents'>
            <img
              src={Write}
              className='subcontentimg'
            />
            <h2 style={{textAlign:'center'}}>Write</h2>
            <p style={{textAlign:'center'}}>
            If there's a book that you want to read, but it hasn't been written yet, then you must write it."
            </p>
          


          </div>
          <div className='subcontents'> 
          <img src={Record} className='subcontentimg'  />
          <h2 style={{textAlign:'center'}}>Record</h2>
          <p style={{textAlign:'center'}}>Today a reader, tomorrow a leader.</p>
          </div>
         
        </div>
        <div className='features'>
          <div className='subcontents'>
            <img src={Watch} className='subcontentimg'   />
            <h2 style={{textAlign:'center'}}>Watch</h2>
            <p style={{textAlign:'center'}}>
            A reader lives a thousand lives before he dies
       
            </p>
            </div>
          <div className='subcontents'>
            <img
              src={Upload}
              className='subcontentimg'
            />
            <h2 style={{textAlign:'center'}}>Upload</h2>
            <p style={{textAlign:'center'}}>
            If there's a book that you want to read, but it hasn't been written yet, then you must write it."
            </p>
          


          </div>
          <div className='subcontents'> 
          <img src={Listen} className='subcontentimg'  />
          <h2 style={{textAlign:'center'}}>Listen</h2>
          <p style={{textAlign:'center'}}>Today a reader, tomorrow a leader.</p>
          </div>
         
        </div>
        <h1 style={{marginLeft:'50px'}}>Authors</h1>
        <Authors/>
      </div>
    </div>
  );
};

export default Landingpage;
