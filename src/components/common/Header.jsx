import React from 'react';
import './Header.scss';
import { Input } from 'antd';
import "bootstrap/dist/css/bootstrap.min.css"
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
    <div className='d-none d-lg-block'  >
        <div className="second-head-con">

          <div className='second-head-con2'>
            <div className='second-head-card'>
              <HomeOutlined style={{fontSize: "20px"}}/>
              <Link to="/">Home</Link>
            </div>
            <div className="second-head-card">
              <CompassOutlined style={{fontSize: "20px"}}/>
              <Link to="/language">Category</Link>
            
            </div>
            <div className="second-head-card">
              <UsergroupDeleteOutlined  style={{fontSize: "20px"}}/>
              <Link to="/authors">Authors</Link>
            </div>
            <div className="second-head-card" >
              <EditOutlined style={{fontSize: "20px"}}/>
              <Link to="/texteditor">Write</Link>
            </div>
            <div className="second-head-card" >
              <UploadOutlined style={{fontSize: "20px"}}/>
              <Link to="/uploadOptions">Upload</Link>
            </div>
            <div className="second-head-card" >
              <AudioOutlined  style={{fontSize: "20px"}}/>
              <Link to="/uploadAudio">Audio</Link>
            </div>
          </div>
        
          <div className="second-icon-con">
            <div className="second-bell-container">
              <BellOutlined className="bell-icon" />
              <span className="red-dot" />
            </div>
            <div className='second-shop'>
              <ShoppingCartOutlined className='shop-icon' onClick={()=>{goToCart()}}/>
            </div>
          </div>
        </div>

    </div>

    </>
  );
};

export default Header;