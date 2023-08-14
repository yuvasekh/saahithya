import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './Categoriesitems.scss'
import { categories } from '../services/api';
 const CategoryItems = () => {
const [filesdata,setFilesData]=useState()
const navigate=useNavigate()
  const location = useLocation();
  
const myProp = location.state && location.state.myProp;
console.log(myProp,"sssssssss")
useEffect(()=>
{
  async function items()
  {
   var res= await categories(myProp.subcategory.imgdesc,myProp.category.imgdesc)
   console.log(res,"checl")
       
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
    const bufferData = item.FileImage.data
console.log(bufferData,"ccccccccccccc")
    // Function to convert buffer to base64
    const base64 = bufferToBase64(bufferData);
    item.FileImage.data=base64

  })
 
  
setFilesData(res)
    console.log(myProp,"valuechecck")
  }
  items()
},[])
const test=(item)=>
{
alert("okk")
   
    navigate('/itemdesc', { state: { myProp:item } })
}
const [selectedimage,setSelectedImage]=useState()
  console.log(myProp,"yuvaprops")
  return (
    <div style={{position:'relative'}} className='categoryitems'>
      <br></br>
    <h2>{myProp.category.imgdesc}/{myProp.subcategory.imgdesc}</h2>
    <div className='bookimages'>
      {
        filesdata!==undefined?<>      {
          filesdata.map((item,index)=>
          (
            <img  src={`data:image/png;base64,${item.FileImage.data}`} className='img1' onClick={()=>{test(item)}}/>
          ))
        }</>:<></>
      }
 
     
      </div>
      <br></br>

<br></br>
    </div>
  )
}
export default CategoryItems