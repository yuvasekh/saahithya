import React from 'react'
import '../Landing/Looks.css'

function Looks() {
  return (
    <>
     


<div className='body'>
    <div class="container">
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                        <h1 className="element" style={{ color: 'black',backdropFilter:'blur(0.1px) saturate(60%)' ,fontWeight:'600', marginTop: '100px', marginLeft: '30px'}}>
                            Read
                        </h1>
                    </div>
                </div>
            </div>



            <div class="face face2">
                <div class="content">

                <h1 className="element" style={{ color: 'black',backdropFilter:'blur(0.5px) saturate(60%)' ,fontWeight:'700', marginTop: '50px', marginLeft: '30px'}}>
                            Write
                </h1>
                    
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                    <h1 className="element" style={{color: 'black',backdropFilter:'blur(0.5px) saturate(60%)' ,fontWeight:'700', marginTop: '100px', marginLeft: '30px'}}>
                            Listen
                </h1>
                    </div>
                </div>
            </div>
            <div class="face face3">
                <div class="content">
                <h1 className="element" style={{color: 'black',backdropFilter:'blur(0.5px) saturate(60%)' ,fontWeight:'700', marginTop: '50px', marginLeft: '30px'}}>
                           Record
                </h1>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                    <h1 className="element" style={{color: 'black',backdropFilter:'blur(0.5px) saturate(60%)' ,fontWeight:'700', marginTop: '100px', marginLeft: '30px'}}>
                            Watch
                    </h1>
                    </div>
                </div>
            </div>
            <div class="face face4">
                <div class="content">

                <h1 className="element" style={{color: 'black',backdropFilter:'blur(0.5px) saturate(60%)' ,fontWeight:'700', marginTop: '50px', marginLeft: '30px'}}>
                           Upload
                </h1>
          
                </div>
            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default Looks
