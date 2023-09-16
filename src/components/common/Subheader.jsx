import React from 'react';
// import './Header.scss';
import { Button, Input } from 'antd';
import { BellOutlined, BookOutlined, CompassOutlined, EditOutlined, HomeOutlined, InfoCircleOutlined, SearchOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
// import logoimg from '../../Resources/saahithya_logo.jpg'
import { Outlet, Link } from "react-router-dom"; 
// import child from './child.png';
import child from '../../Resources/child.png'
import { Select } from 'antd';
import './subheader.scss'

// import './Subheader.scss';
// import write from'../../Resources/write.jpg';
 const Subheader = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className='subheader'>
    
        <div className="subheader-content">
         
        
        <div className="subheader-item">
       
          
          <Link to="/">Home</Link> 
        </div>
        <div className="subheader-item">
         
     
           <Link to="/Comingsoon">Aboutus</Link> 
         
        </div>
        <div className="subheader-item">
         
         
          <Link to="/teams">Team</Link> 
       
        </div>
        <div className="subheader-item">
         
     
         <Link to="/Comingsoon">Media</Link> 
       
      </div>
      <div className="subheader-item">
         
     
         <Link to="/Publications">Publications</Link> 
       
      </div>
      <div className="subheader-item">
         
     
           <Link to="/Comingsoon">Events</Link> 
         
        </div>
        <div className="subheader-item">
         
     
         <Link to="/Comingsoon">Contactus</Link> 
       
      </div>
      <div className="subheader-item">
         
      <Link to='/Comingsoon'>
       <Button className='registerbutton'>Download App</Button>
       </Link>
      </div>
      </div>
     
      

        </div>
  
  )
}
export default Subheader;
