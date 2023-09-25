import React from 'react'
import '../Landing/Looks.scss'
import {Link} from 'react-router-dom'

function Looks() {
  return (
    <>
     


<div >
    <div class="con">
        <div className='row'>
            <div class="card col-12 col-md-4 p-4">

                <Link to='/read'>
                    <div class="face face1">
                        <div class="content">
                            <div class="icon">
                                <h1 className="element" style={{ backdropFilter:'blur(5px) saturate(70%)' ,fontWeight:'600'}}>
                                    Read
                                </h1>
                            </div>
                        </div>
                    </div>
                </Link>


                <Link to='/texteditor'>
                    <div class="face face2">
                        <div class="content">
                        <h1 className="element" style={{ backdropFilter:'blur(5px) saturate(70%)'  ,fontWeight:'700'}}>
                                    Write
                        </h1>
                        </div>
                    </div>
                </Link>   

            </div>

            <div class="card col-12 col-md-4 p-4">

                <Link to='/Comingsoon'>   
                    <div class="face face1">
                        <div class="content">
                            <div class="icon">
                            <h1 className="element" style={{ backdropFilter:'blur(5px) saturate(70%)'  ,fontWeight:'700'}}>
                                    Listen
                        </h1>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to='/Comingsoon'>
                    <div class="face face3">
                        <div class="content">
                        <h1 className="element" style={{ backdropFilter:'blur(5px) saturate(70%)'  ,fontWeight:'700'}}>
                                Record
                        </h1>
                        </div>
                    </div>
                </Link>

            </div>

            <div class="card col-12 col-md-4 p-4">
            <Link to='/Comingsoon'>
                <div class="face face1">
                    <div class="content">
                        <div class="icon">
                        
                        <h1 className="element" style={{ backdropFilter:'blur(5px) saturate(70%)'  ,fontWeight:'700'}}>
                                Watch
                        </h1>
                        </div>
                    </div>
                </div>
            </Link>

            <Link to="/upload">
                <div class="face face4">
                    <div class="content">
                    <h1 className="element" style={{ backdropFilter:'blur(5px) saturate(70%)'  ,fontWeight:'700'}}>
                            Upload
                    </h1>
                    </div>
                </div>
            </Link>
            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default Looks