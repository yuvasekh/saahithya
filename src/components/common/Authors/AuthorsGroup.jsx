import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {authorCategoryImages} from '../../services/api'
import './AuthorGroup.scss';
const AuthorsGroup = () => {
    const navigate=useNavigate();
    const location=useLocation()

    const myProp=location.state;
    console.log(myProp.myProp.imgdesc,"myProp")
const [imagearray,setimageArray]=useState([])
    useEffect(()=>
    {
      async function dummy()
      {
      
     var res= await authorCategoryImages(myProp.myProp.imgdesc)
     console.log(res,"from api")
     const bufferToBase64 = (buffer) => {
      let binary = '';
      const bytes = new Uint8Array(buffer);
      for (let i = 0; i < bytes.length; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      return btoa(binary);
    };
    res.map((item,index)=>
    {
      const bufferData = item.ProfileImage.data
// console.log(bufferData,"ccccccccccccc")
      // Function to convert buffer to base64
     
      const base64 = bufferToBase64(bufferData);
      item.ProfileImage.data=base64

    })
console.log(res)
    setimageArray(res)
    }
dummy()
    },[])
    const test=((item)=>
    {
      var data={
        Email:item.Email,
        Category:myProp.myProp.imgdesc
      }
console.log(item.Email)
navigate('/authorsbooksdisplay', { state: { myProp:data } })
    })
  
  return (


    <div>
    {
      imagearray.length > 0 ? (
        <div className='profile-con'>
       {
          imagearray.map((item,index)=>
          (
            <div className='modified'>

              <div className='image-cont'> 
                <img  src={`data:image/png;base64,${item.ProfileImage.data}`} className='img-sizing-two' onClick={()=>{test(item)}}/>
                <h2 className='heading-size'>Name:-{item.Name}</h2>
              </div>

            </div>
           
          ))
        }
    </div>

  ) : (
    <></>
  )
}
</div>


  )
}

export default AuthorsGroup