import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {authorCategory} from '../../services/api'
import './AuthorsBooksDisplay.scss'
const Categories = () => {  
    const navigate=useNavigate();
    const location = useLocation();
    const [filesdata,setFilesData]=useState([])
    const myProp = location.state && location.state.myProp;
    console.log(myProp,"language")
    useEffect(()=>
    {
async function dummy()
{
var res=await authorCategory(myProp)
console.log(res,"Api res")
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
  console.log(res,"before")
setFilesData(res)
}
dummy()
    },[])
    const test=(item)=>
    {
        
      navigate('/itemdesc', { state: { myProp:item } })
    }
  return (

    <div className='categorycontainer'>
        {
        filesdata.map((item, index) => (
            <div className='containerimg' key={index} onClick={() => test(item)}>
              {/* <img src={`data:image/png;base64,${item.FileImage.data}`} className='category-image-size01' alt={`image-${index}`} /> */}
              <img  src={item.FileImage.data} className='category-image-size01' onClick={()=>{test(item)}}/>
              <h2 className="heading-one" style={{ backdropFilter: 'blur(20px) saturate(70%)',color:'Black' }}>{item.FileName}</h2>
            </div>))
}
    </div>
  );
};

export default Categories;