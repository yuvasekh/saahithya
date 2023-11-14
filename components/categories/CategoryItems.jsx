import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './Categoriesitems.scss'
import { categories } from '../services/api';
 const CategoryItems = () => {
const [filesdata,setFilesData]=useState()
const navigate=useNavigate()
  const location = useLocation();
  
const myProp = location.state && location.state.myProp;
console.log(myProp,"whole")
useEffect(()=>
{
  async function items()
  {
   var res= await categories(myProp)
   console.log(res,"checl")
       
   const bufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };
  const updatedData = await Promise.all(res.map(async (item) => {
    // const bufferData = item.FileImage.data;

    // const base64 = await bufferToBase64(bufferData);
    let url=`https://saahithyapdffiles.blob.core.windows.net/uploadfilessaahithya/${item.EpisodeId}${item.ImageExtension}?sp=r&st=2023-08-28T11:42:38Z&se=2023-12-30T19:42:38Z&spr=https&sv=2022-11-02&sr=c&sig=fvbUPQhstqAT7OaFy7XS7LuERdDsNu6U8uACd72XLmA%3D`
    item.FileImage.data = url;
    return item;
  }));
 
  
setFilesData(res)
    console.log(myProp,"valuechecck")
  }
  items()
},[])
const test=(item)=>
{
    navigate('/itemdesc', { state: { myProp:item } })
}
const [selectedimage,setSelectedImage]=useState()
  // console.log(myProp,"yuvaprops")
  return (
    <div style={{position:'relative'}} className='categoryitems'>
      <br></br>
    <h2>{myProp.category.imgdesc}/{myProp.subcategory.imgdesc}</h2>
    <div className='bookimages'>
      {
        filesdata!==undefined?<>      {
          filesdata.map((item,index)=>
          (
            // <img  src={`data:image/png;base64,${item.FileImage.data}`} className='img1' onClick={()=>{test(item)}}/>
            <img  src={item.FileImage.data} className='img1' onClick={()=>{test(item)}}/>
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