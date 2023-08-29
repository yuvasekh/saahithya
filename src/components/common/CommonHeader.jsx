import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
// import './Header.scss';
import { useLocation } from 'react-router-dom';
import { Avatar, Button, Input,Dropdown } from 'antd';
import { BellOutlined, BookOutlined, CompassOutlined, EditOutlined, HomeOutlined, InfoCircleOutlined, SearchOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import logoimg from '../../Resources/saahithya_logo.png'
// import { Outlet, Link } from "react-router-dom"; 
// import child from './child.png';
// import child from '../../Resources/child.png'
import { Select } from 'antd';


import './CommonHeader.scss';
import { register } from '../services/api';
// import write from'../../Resources/write.jpg';
 const CommonHeader = () => {
  const location = useLocation();
var token=localStorage.getItem('token')
// const [token,setToken]=useState(localStorage.getItem('token'))
console.log("common1",token)
const [flag,setflag]=useState(false)
useEffect(()=>
{
  console.log("common")
   
  // setToken(localStorage.getItem('token'))

},[])
useEffect(()=>
{
  console.log(token,"Common header")
},[flag])

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const logout=(()=>
  {
    localStorage.clear();
    // setToken(null)
    token=null
    setflag(true)

  })
  const items = [
  
    {
      key: "1",
      label: (
        <div className="flex  items-center gap-2 p-1" onClick={logout}>
          <div className="text-sm font-semibold">Logout</div>
        </div>
      ),
    },
  ];
  return (
    <div className='headers'>
      <div className='logoitems'>
          <img src={logoimg} className="logosmain"/>
          <Input
          placeholder='Search in Saahithya'
          style={{ width: '350px',height:'50px', borderRadius: '16px',alignItems:'center', background: 'rgba(188, 156, 156, 0.2)' }}
          prefix={<SearchOutlined />}
        />
        <Select    defaultValue="Telugu"
    style={{
      width: 100,
    }}
    onChange={handleChange}
    options={[
      {
        label: 'Select Language',
        options: [
          {
            label: 'Telugu',
            value: 'Telugu',
          },
          {
            label: 'English',
            value: 'English',
          },
        ],
      },
    ]}/>
    </div>
        <div className="header-content">
        <div className='loginItems'> 
     



        <div className="header-item">
         <div>
             {/* <Button className='registerbutton' style={{ width:"16vw",fontSize:"15px" }}> */}
             <Link to="/categoryOptions">
             <Button className='registerbutton' style={{ width:"12vw",fontSize:"17px",backgroundColor:"#266B69" }}>
              CATEGORIES
            </Button>
            </Link>
         </div>
      </div>



       
       {
        token==null?<>   <div className="header-item">
        <div>
          <Link to="/login">
            <Button className='signinbutton' style={{ fontSize:"17px",backgroundColor:"#266B69" }}>SignIn</Button>
          </Link>
        </div>
    </div>  
    <div className="header-item">
     
        <div>
        <Link to="/register">
            <Button className='registerbutton' style={{ fontSize:"17px",backgroundColor:"#266B69" }}>Register</Button>
          </Link>
        </div>
     </div></>:<> <Dropdown
            menu={{ items }}
            placement="bottom"
            trigger={"click"}
            arrow={{
              pointAtCenter: true,
            }}
          >
            <Avatar
              className="flex items-center justify-center cursor-pointer"
              size="large"
          
              icon={<UserOutlined />}
            />
          </Dropdown></>

       }
     
      
       </div> 
      </div>
     
      

        </div>
  
  )
}
export default CommonHeader;
