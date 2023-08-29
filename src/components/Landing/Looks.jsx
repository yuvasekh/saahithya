import React from 'react'
import '../Landing/Looks.scss'
import {Link} from 'react-router-dom'

function Looks() {
  return (
    <>
     


<div className='wrap-con'>
    <div class="container">
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                        <Link to='/read'>
                        <h1 className="element" style={{width:"10vw", backdropFilter:'blur(20px) saturate(70%)' ,fontWeight:'600', marginTop: '100px', marginLeft: '30px'}}>
                            Read
                        </h1>
                        </Link>
                    </div>
                </div>
            </div>



            <div class="face face2">
                <div class="content">
                <Link to='/texteditor'>
                <h1 className="element" style={{width:"10vw", backdropFilter:'blur(20px) saturate(70%)'  ,fontWeight:'700', marginTop: '50px', marginLeft: '30px'}}>
                            Write
                </h1>
                </Link>   
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                     <Link to='/Comingsoon'>   
                    <h1 className="element" style={{width:"10vw", backdropFilter:'blur(20px) saturate(70%)'  ,fontWeight:'700', marginTop: '100px', marginLeft: '30px'}}>
                            Listen
                </h1>
                </Link>
                    </div>
                </div>
            </div>
            <div class="face face3">
                <div class="content">
                <Link to='/Comingsoon'>
                <h1 className="element" style={{width:"10vw", backdropFilter:'blur(20px) saturate(70%)'  ,fontWeight:'700', marginTop: '50px', marginLeft: '30px'}}>
                           Record
                </h1>
                </Link>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                    <Link to='/Comingsoon'>
                    <h1 className="element" style={{width:"10vw", backdropFilter:'blur(20px) saturate(70%)'  ,fontWeight:'700', marginTop: '100px', marginLeft: '30px'}}>
                            Watch
                    </h1>
                    </Link>
                    </div>
                </div>
            </div>
            <div class="face face4">
                <div class="content">
                <Link to="/upload">
                <h1 className="element" style={{width:"11vw", backdropFilter:'blur(20px) saturate(70%)'  ,fontWeight:'700', marginTop: '50px', marginLeft: '30px'}}>
                           Upload
                </h1>
                </Link>
                </div>
            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default Looks