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
    <div className='header'  >
      
        <div className="header-content">
          <div className="header-item">
       
          <HomeOutlined style={{fontSize: "20px"}}/>
          <Link to="/">Home</Link> 
        </div>
        <div className="header-item">
          <CompassOutlined style={{fontSize: "20px"}}/>
     
     
           <Link to="/language">Category</Link> 
         
        </div>
        <div className="header-item">
          <UsergroupDeleteOutlined  style={{fontSize: "20px"}}/>
     
     
           <Link to="/authors">Authors</Link> 
         
        </div>
 
        <div className="header-item" >
         
          <EditOutlined style={{fontSize: "20px"}}/>
          <Link to="/texteditor">Write</Link>  
       
        </div>
        <div className="header-item" >
      
         <UploadOutlined style={{fontSize: "20px"}}/>
         <Link to="/upload">Upload</Link>  
      
       </div>
        {/* <div className="header-item">
         
          <UserOutlined style={{fontSize: "30px"}}/>
          <Link to="/register">User</Link> 
       
        </div> */}
        </div>
        
        <div className="search-bar">
         <div className="bell-container">
            <BellOutlined className="bell-icon" />
            <span className="red-dot" />
          </div>
          <div className='shop'>
            <ShoppingCartOutlined className='shop-icon' onClick={()=>{goToCart()}}/>
          </div>
      </div>
    </div>

    </>
  );
};

export default Header;