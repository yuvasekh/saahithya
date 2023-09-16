import React from 'react'
import '../Landing/Looks.scss'
import {Link} from 'react-router-dom'

function Looks() {
  return (
    <>
     


<div >
    <div class="con">
        <div className='row'>
            <div class="card col-12 col-md-4 ">
                <div class="face face1">
                    <div class="content">
                        <div class="icon">
                            <Link to='/read'>
                            <h1 className="element" style={{ backdropFilter:'blur(5px) saturate(70%)' ,fontWeight:'600'}}>
                                Read
                            </h1>
                            </Link>
                        </div>
                    </div>
                </div>



                <div class="face face2">
                    <div class="content">
                    <Link to='/texteditor'>
                    <h1 className="element text-center" style={{ backdropFilter:'blur(5px) saturate(70%)'  ,fontWeight:'700'}}>
                                Write
                    </h1>
                    </Link>   
                    </div>
                </div>
            </div>

            <div class="card col-12 col-md-4 ">
                <div class="face face1">
                    <div class="content">
                        <div class="icon">
                        <Link to='/Comingsoon'>   
                        <h1 className="element" style={{ backdropFilter:'blur(5px) saturate(70%)'  ,fontWeight:'700'}}>
                                Listen
                    </h1>
                    </Link>
                        </div>
                    </div>
                </div>
                <div class="face face3">
                    <div class="content">
                    <Link to='/Comingsoon'>
                    <h1 className="element text-center" style={{ backdropFilter:'blur(5px) saturate(70%)'  ,fontWeight:'700'}}>
                            Record
                    </h1>
                    </Link>
                    </div>
                </div>
            </div>

            <div class="card col-12 col-md-4 ">
                <div class="face face1">
                    <div class="content">
                        <div class="icon">
                        <Link to='/Comingsoon'>
                        <h1 className="element" style={{ backdropFilter:'blur(5px) saturate(70%)'  ,fontWeight:'700'}}>
                                Watch
                        </h1>
                        </Link>
                        </div>
                    </div>
                </div>
                <div class="face face4">
                    <div class="content">
                    <Link to="/upload">
                    <h1 className="element text-center" style={{ backdropFilter:'blur(5px) saturate(70%)'  ,fontWeight:'700'}}>
                            Upload
                    </h1>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default Looks