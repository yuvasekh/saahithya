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
  res.map((item,index)=>
  {
    const bufferData = item.FileImage.data
console.log(bufferData,"ccccccccccccc")
    // Function to convert buffer to base64
    const base64 = bufferToBase64(bufferData);
    item.FileImage.data=base64
  })
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
              <img src={`data:image/png;base64,${item.FileImage.data}`} className='category-image-size01' alt={`image-${index}`} />
              <h2 className="heading-redesigned">{item.FileName}</h2>
            </div>))
}
    </div>
  );
};

export default Categories;