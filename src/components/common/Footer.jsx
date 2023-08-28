// import React from 'react'
// import './Footer.scss'
// import { Row, Col } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
// import { Link } from 'react-router-dom'

// const Footer = () => {
//   return (
// <div id='footer' className='bg-dark text-white'>

//     <Row className='ft-con' >
//         <Col className='footer-container1' >
//         <p className='footer-head' style={{fontWeight:'600',fontSize:'25px'}}>Useful Links</p>
//             <Row>
//                 <Col >
//                     <div> Home</div>
//                     <div> ABOUT US</div>
//                     <div> FAQS</div>
//                     <div> TESTIMONIALS</div>
//                     <Link to="/Contactus" >  <p>Contactus</p>  </Link>
//                     <div> SITE MAP</div>
//                 </Col>
//             </Row>
//         </Col>

//         <Col className='footer-container'>
//         <p className='footer-head' style={{fontWeight:'600',fontSize:'25px'}}> Connect Us</p>
//             <Row >
//                 <Col >
//                     <div> REGISTER</div>
//                     <div> LOG IN</div>
//                     <div> FORGOT PASSWORD</div>
//                     <Link to="/Terms" >  <p>Terms and Conditions</p>  </Link>
//                     <Link to="/Privacy" >  <p>Privacy Policy</p>  </Link>
//                     <Link to="/Refund" >  <p>Refund policy</p>  </Link>
//                     <Link to="/Shipping" >  <p>Shipping</p>  </Link>
//                 </Col>
//             </Row>
//         </Col>

//         <Col className='footer-container'>
//         <p style={{fontWeight:'600',fontSize:'25px'}}> Just a Call/ Email Away</p>
//             <Row>
//                 <Col>
//                     <div> +91 9848 425 966</div>
//                     <div> +91 9848 425 966</div>
//                     <div> Saahithya@gmail.com</div>
//                     <div> Saahithya@gmail.com</div>
//                 </Col>
//             </Row>
//         </Col>

//         <Col className='footer-container'>
//         <p style={{fontWeight:'600',fontSize:'25px'}}>Search By Authors</p>
//             <Row>
//                 <Col>
//                     <div>   <Link to='/authors'>All Authors</Link></div>
//                     <div>   <Link to='/authors'>SRI SRI</Link></div>
//                     <div>   <Link to='/authors'>ADHIKAVI NANNAYA</Link></div>
//                     <div>   <Link to='/authors'>TIKKANA</Link></div>
//                     <div>   <Link to='/authors'>POTANA</Link></div>
//                       {/* <div> SRI SRI</div>
//                       <div> ADHIKAVI NANNAYA</div>
//                       <div> TIKKANA</div>
//                       <div> POTANA</div> */}
//                 </Col>
//             </Row>
//         </Col>
//     </Row>

//     <Row className='p-3 bg-dark text-white'>
//         <Col  className="custom-margin-top">
//         Copyrights © 2023 Saahithya, All Rights Reserved.
//         </Col>

//         <Col  className="custom-margin-top">
//          <FaFacebook /> <FaTwitter/> <FaInstagram/> <FaLinkedin/>
//         </Col>

//     </Row>
    
//     </div>
    
//   )
// }

// export default Footer


import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import {FaFacebookSquare,FaInstagram, FaTwitterSquare, FaLinkedin, FaPinterest } from "react-icons/fa"

const Footer = () => {
    return (
        <>
    <div className='footer-con'>

        <div className='footer-head'>
            <h1>Have an idea to help us improve? <span>Send Feedback</span></h1>
        </div>

        <div className='sec-con'>

            <div>
                <h1>Get to Know Us</h1>
                <div>
                    <Link to ='/home'><p>Home</p></Link>
                    <Link to ='/aboutus'><p>About Us</p></Link>
                    <Link to ='/contactus'><p>Contact Us</p></Link>
                    <Link to ='/testmonials'><p>Testmonials</p></Link>
                    <Link to ='/sitemap'><p>Site Map</p></Link>
                </div>
            </div>

            <div>
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

            <div>
                <h1>Work With Saahithya</h1>
                <div>
                    <Link to ='/upload'><p>Sell</p></Link>
                    <Link to ='/advertise'><p>Advertise On Saahithya</p></Link>
                    <Link to ='/author'><p>Become An Author</p></Link>
                </div>
            </div>

            <div>
                <h1>Just a Call/ Email Away</h1>
                <div>
                    <Link to ='/contactus'><p>Saahithya.com@gmail.com</p></Link>
                    <Link to ='/contactus'><p>+91-9143364777</p></Link>
                </div>
            </div>
            
            <div>
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

        <div className='second'>

            {/* <div className='footer-sec'>
                <div className='footer-sec-con'>
                    <h1>Share</h1>
                    <h3>Share this page with your friends</h3>
                </div>
            </div> */}

            <div className='social-icons'>
                <FaFacebookSquare className='facebook'/> <FaInstagram className='instagram'/> <FaTwitterSquare className='twitter'/> <FaLinkedin className='linkedin'/> <FaPinterest className='pinterest'/>
            </div>

        </div>

    </div>
    </>
  )
}

export default Footer