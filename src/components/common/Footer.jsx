import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import {FaFacebookSquare,FaInstagram, FaTwitterSquare, FaLinkedin, FaPinterest } from "react-icons/fa"

const Footer = () => {
    return (
        <>
    <div className='row'>
        <div className='col-12 text-center '>
            <div className='footer-con'>

                <div className='row'>
                    <div className='footer-head col-12'>
                        <h1>Have an idea to help us improve? <span>Send Feedback</span></h1>
                    </div>
                </div>

                <div className='sec-con'>
                    <div className='row'>

                        <div className='col-12 col-md-3 col-lg-2 text-center'>
                            <h1>Get to Know Us</h1>
                            <div>
                                <Link to ='/'><p>Home</p></Link>
                                <Link to ='/aboutus'><p>About Us</p></Link>
                                <Link to ='/contactus'><p>Contact Us</p></Link>
                                <Link to ='/testmonials'><p>Testmonials</p></Link>
                                <Link to ='/sitemap'><p>Site Map</p></Link>
                            </div>
                        </div>

                        <div className='col-12 col-md-3 col-lg-3 text-center'>
                            <h1>Let Us Help You</h1>
                            <div>
                                <Link to ='/customerservices'><p>Customer Services</p></Link>
                                <Link to ='/shipping'><p>Shipping Rates & Policies</p></Link>
                                <Link to="/terms" >  <p>Terms and Conditions</p>  </Link>
                                <Link to="/privacy" >  <p>Privacy Policy</p>  </Link>
                                <Link to="/refund" >  <p>Refund policy</p>  </Link>
                                <Link to ='/faq'><p>FAQ</p></Link>

                            </div>
                        </div>

                        <div className='col-12 col-md-3 col-lg-2 text-center'>
                            <h1>Work With Saahithya</h1>
                            <div>
                                <Link to ='/upload'><p>Sell</p></Link>
                                <Link to ='/register'><p>Advertise On Saahithya</p></Link>
                                <Link to ='/register'><p>Become An Author</p></Link>
                            </div>
                        </div>

                        <div className='col-12 col-md-3 col-lg-3 text-center'>
                            <h1>Just a Call/ Email Away</h1>
                            <div>
                                <Link to ='/contactus'><p>Saahithya.com@gmail.com</p></Link>
                                <Link to ='/contactus'><p>+91-9143364777</p></Link>
                            </div>
                        </div>
                        
                        <div className='col-12 col-md-3 col-lg-2 text-center'>
                            <h1>Search By Authors</h1>
                            <div>
                                <Link to ='/authors'><p>All Authors</p></Link>
                                <Link to ='/authors'><p>SRI SRI</p></Link>
                                <Link to ='/authors'><p>ADHIKAVI NANNAYA</p></Link>
                                <Link to ='/authors'><p>TIKKANA</p></Link>
                                <Link to ='/authors'><p>POTANA</p></Link>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='second'>
                    <div className='row '>
                        <div className='social-icons col-12 text-center'>
                            <FaFacebookSquare className='facebook'/> <FaInstagram className='instagram'/> <FaTwitterSquare className='twitter'/> <FaLinkedin className='linkedin'/> <FaPinterest className='pinterest'/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Footer