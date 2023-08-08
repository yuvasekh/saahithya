import React from 'react';
import './Header.scss';
import { Input } from 'antd';
import { BellOutlined, CompassOutlined, EditOutlined, HomeOutlined, SearchOutlined, ShoppingCartOutlined, UploadOutlined, UserOutlined, UsergroupDeleteOutlined } from '@ant-design/icons';
import logoimg from '../../Resources/saahithya_logo.jpg'
import { Outlet, Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate=useNavigate()
  const goToCart=(()=>
  {
    alert("ok")
    navigate('/cartLogs')
    
  })
  return (
    <div className='header'style={{left:'0',position:'relative',top:'0'}} >
      <div className="search-bar">
        <img src={logoimg} className="logos"/>
        <Input
          placeholder='Search'
          style={{ width: '300px',height:'40px', borderRadius: '16px',alignItems:'center', background: 'rgba(188, 156, 156, 0.2)' }}
          prefix={<SearchOutlined />}
        />
         <div className="bell-container">
      <BellOutlined className="bell-icon" />
      <span className="red-dot" />
    
     
    </div>
    <div style={{marginRight:'100px'}}>
      <ShoppingCartOutlined  onClick={()=>{goToCart()}}/>
      </div>
      </div>
      <div className="header-content">
        <div className="header-item">
       
          <HomeOutlined />
          <Link to="/">Home</Link> 
        </div>
        <div className="header-item">
          <CompassOutlined />
     
     
           <Link to="/categories">Category</Link> 
         
        </div>
        <div className="header-item">
          <UsergroupDeleteOutlined  />
     
     
           <Link to="/authors">Authors</Link> 
         
        </div>
        <div className="header-item" style={{display:'flex'}}>
         
          <EditOutlined />
          <Link to="/texteditor">Write</Link>  
       
        </div>
        <div className="header-item" style={{display:'flex'}}>
      
         <UploadOutlined />
         <Link to="/upload">Upload</Link>  
      
       </div>
        <div className="header-item">
         
          <UserOutlined />
          <Link to="/register">User</Link> 
       
        </div>
      </div>
    </div>
  );
};

export default Header;
