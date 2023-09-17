import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
// import './Header.scss';
import { useLocation } from 'react-router-dom';
import { Avatar, Button, Input,Dropdown } from 'antd';
import { SearchOutlined,  UserOutlined } from '@ant-design/icons';
import logoimg from '../../Resources/saahithya_logo.png'
import { Select } from 'antd';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';  
import logo from "../../Resources/saahithya_logo.png"

import './CommonHeader.scss';
import { register } from '../services/api';
// import write from'../../Resources/write.jpg';
 const CommonHeader = () => {
  const navigate=useNavigate()
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
    navigate('/')
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
    <>

    <div className='headers d-none d-lg-flex'>
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
             <Link to="/language">
                <Button className='registerbutton' style={{fontFamily:'sans-serif', width:"12vw",fontSize:"17px",backgroundColor:"#266B69" }}>
                  CATEGORIES
                </Button>
            </Link>
          </div>
        </div>

       
       {
        token==null?<>   <div className="header-item">
        <div>
          <Link to="/login">
            <Button className='signinbutton' style={{fontFamily:'sans-serif', fontSize:"17px",backgroundColor:"#266B69" }}>SignIn</Button>
          </Link>
        </div>
    </div>  
    <div className="header-item">
     
        <div>
        <Link to="/register">
            <Button className='registerbutton' style={{fontFamily:'sans-serif', fontSize:"17px",backgroundColor:"#266B69" }}>Register</Button>
          </Link>
        </div>
     </div>
     </>:<> 
      <Dropdown
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
  
    



        <div className='d-block d-lg-none'>
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/"><img className='logosmain' src={logo} /></Navbar.Brand>
            <div className="container w-50">
                  <form className="d-flex" role="search">
                    
                    <Select    defaultValue="Telugu"
                        style={{
                          width: 100,marginRight:"10px"
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
                  </form>
                </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav " />
            <Navbar.Collapse id="responsive-navbar-nav  ">
              <Nav className="me-auto">
          
              </Nav>
              <Nav >
              <input
                      className="form-control me-2"
                      type="search"
                      // style={{width:"40vw"}}
                      placeholder='Search in Saahithya'
                      aria-label="Search"
                    />
                <button className=" btn btn-primary" type="submit">
                      Search
                </button>
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="/language">Categories</Nav.Link>
                <Nav.Link href="/home">Trending</Nav.Link>
                <Nav.Link href="/Comingsoon">Aboutus</Nav.Link>
                <Nav.Link href="/teams">Team</Nav.Link>
                <Nav.Link href="/Comingsoon">Media</Nav.Link>
                <Nav.Link href="/Publications">Publications</Nav.Link>
                <Nav.Link href="/Comingsoon">Events</Nav.Link>
                <Nav.Link href="/Comingsoon">Contactus</Nav.Link>
                <Nav.Link href="/Comingsoon">Download Now</Nav.Link>
                {token==null?
                <>
                <Nav.Link href="/register">Register</Nav.Link>
                <Nav.Link  href="/login">login</Nav.Link>
                </>
                :
                <>
                <NavDropdown title={<UserOutlined />} id="collasible-nav-dropdown">
                  <NavDropdown.Item onClick={logout}>logout</NavDropdown.Item>
                  
                </NavDropdown>
                </>
 }
              </Nav>
            </Navbar.Collapse>
          </Container>
          </Navbar>
        </div>
    </>
  
  )
}
export default CommonHeader;
