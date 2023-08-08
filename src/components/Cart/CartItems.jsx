import React,{useState,useEffect} from 'react'
import {cartLog} from '../services/api'
import './CartItems.scss'
import { Button } from 'antd'
 const CartItems = () => {


    const [items,setItems]=useState()
    async function getcall()
    {
var response=await cartLog();
// setItems(response)
console.log(response,"check")
const bufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };
  response.map((item,index)=>
  {
    const bufferData = item.ItemImage.data
console.log(bufferData,"ccccccccccccc")
    // Function to convert buffer to base64
    const base64 = bufferToBase64(bufferData);
    item.ItemImage.data=base64

  })
  setItems(response)
return response
    }
useEffect(()=>
{
var result= getcall()

},[])
useEffect(()=>
{
    console.log(items)

},[items])
  return (
    <div className='cartPage' >
        <h1>Welcome To Cart</h1>
        <div className='card'>
    {
        items!==undefined?<>      {
          items.map((item,index)=>
          (
           <div className='details'> <div><img  src={`data:image/png;base64,${item.ItemImage.data}`} className='img1'/> </div> <div className='BookName'><h3 style={{fontWeight:'bold'}}>{item.BookName}</h3></div><div className='price'><h3 style={{fontWeight:'bold'}}>{item.Price}</h3>In stock
           Eligible for FREE Shipping</div></div>
          ))
        }</>:<></>
      }
     
 </div>
 <div className='bottonItem'>
 <Button className='buynow'>Buy Now</Button>
 </div>
 <br></br>
 <br></br>
 </div>
  )
}

export default CartItems