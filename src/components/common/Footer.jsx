import React from 'react'
import './Footer.scss'
import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
<div id='footer' className='p-3 bg-dark text-white'>


    <Row className='ft-con' style={{textAlign:'center'}}>
        <Col className='footer-container1' style={{textAlign:'center'}}>
        <p className='footer-head' style={{fontWeight:'600',fontSize:'25px'}}>Useful Links</p>
            <Row>
                <Col >
                    <div> Home</div>
                    <div> ABOUT US</div>
                    <div> FAQS</div>
                    <div> TESTIMONIALS</div>
                    <Link to="/Contactus" >  <p>Contactus</p>  </Link>
                    <div> SITE MAP</div>
                </Col>
            </Row>
        </Col>

        <Col className='footer-container'>
        <p className='footer-head' style={{fontWeight:'600',fontSize:'25px'}}> Connect Us</p>
            <Row >
                <Col >
                    <div> REGISTER</div>
                    <div> LOG IN</div>
                    <div> FORGOT PASSWORD</div>
                    <Link to="/Terms" >  <p>Terms and Conditions</p>  </Link>
                    <Link to="/Privacy" >  <p>Privacy Policy</p>  </Link>
                    <Link to="/Refund" >  <p>Refund policy</p>  </Link>
                    <Link to="/Shipping" >  <p>Shipping</p>  </Link>
                </Col>
            </Row>
        </Col>

        <Col className='footer-container'>
        <p style={{fontWeight:'600',fontSize:'25px'}}> Just a Call/ Email Away</p>
            <Row>
                <Col>
                    <div> +91 9848 425 966</div>
                    <div> +91 9848 425 966</div>
                    <div> Saahithya@gmail.com</div>
                    <div> Saahithya@gmail.com</div>
                </Col>
            </Row>
        </Col>

        <Col className='footer-container'>
        <p style={{fontWeight:'600',fontSize:'25px'}}>Search By Authors</p>
            <Row>
                <Col>
                    <div>   <Link to='/authors'>All Authors</Link></div>
                    <div>   <Link to='/authors'>SRI SRI</Link></div>
                    <div>   <Link to='/authors'>ADHIKAVI NANNAYA</Link></div>
                    <div>   <Link to='/authors'>TIKKANA</Link></div>
                    <div>   <Link to='/authors'>POTANA</Link></div>
                      {/* <div> SRI SRI</div>
                      <div> ADHIKAVI NANNAYA</div>
                      <div> TIKKANA</div>
                      <div> POTANA</div> */}
                </Col>
            </Row>
        </Col>
    </Row>

    <Row className='p-3 bg-dark text-white'>
        <Col  className="custom-margin-top">
        Copyrights © 2023 Saahithya, All Rights Reserved.
        </Col>

        <Col  className="custom-margin-top">
         <FaFacebook /> <FaTwitter/> <FaInstagram/> <FaLinkedin/>
        </Col>

    </Row>
    
    </div>
    
  )
}

export default Footer
