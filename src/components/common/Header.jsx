import React from 'react';
import './Header.scss';
import { Input } from 'antd';
import { AudioOutlined,BellOutlined, CompassOutlined, EditOutlined, HomeOutlined, SearchOutlined, ShoppingCartOutlined, UploadOutlined, UserOutlined, UsergroupDeleteOutlined } from '@ant-design/icons';
// import logoimg from '../../Resources/saahithya_logo.jpg'
import { Outlet, Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate=useNavigate()
  const goToCart=(()=>
  {
    // alert("ok")
    navigate('/cartLogs')
    
  })
  return (
    <>
    <div className='header'>
   

        <div className="header-content">
          <div className="header-item">
       
          <HomeOutlined className="Home-Outlined"/>
          <Link to="/">Home</Link> 
        </div>

        <div className="header-item">
          <CompassOutlined className='Compass-Outlined'/>
           <Link to="/language">Category</Link> 
        </div>

        <div className="header-item">
          <UsergroupDeleteOutlined  className='Usergroup-DeleteOutlined'/>
     
     
           <Link to="/authors">Authors</Link> 
         
        </div>
 
        <div className="header-item" >
         
          <EditOutlined  className='Edit-Outlined'/>
          <Link to="/texteditor">Write</Link>  
       
        </div>
        <div className="header-item" >
      
         <UploadOutlined className='Upload-Outlined'/>
         <Link to="/upload">Upload</Link>  
      

      

       </div>

   
       <div className="vamsi-search-fixed">
         <div className="bell-container">
            <BellOutlined className="bell-icon" />
            <span className="red-dot" />
          </div>
          <div className='shop'>
            <ShoppingCartOutlined className='shop-icon' onClick={()=>{goToCart()}}/>
          </div>
      </div>


      </div>
    </div>

    </>
  );
};

export default Header;