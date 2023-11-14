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
      
        <div className='card'>
    {
        items!==undefined?<>     <h2 style={{textAlign:'start'}}>Shopping Cart</h2>   {
          items.map((item,index)=>
          (
           <div className='details'>
             <div><img  src={`data:image/png;base64,${item.ItemImage.data}`} className='img1'/> </div>
              <div className='BookName'>
              <h3 style={{fontWeight:'semi-bold'}}>{item.BookName}</h3>
              <h2 className='price'>
              <h3 style={{fontWeight:'bold'}}>{item.Price}</h3>In stock
           Eligible for FREE Shipping</h2></div></div>
          ))
        }</>:<></>
      }
     
 </div>
 <div className='bottonItem'>
  <div>
  <p style={{textAlign:'center'}}>
Your order is eligible for FREE Delivery Details:
<br></br>

 <h2>
Subtotal (2 item):   500.00

</h2>
  </p>
 <Button className='buynow'>Buy Now</Button>
 </div>
 </div>

 </div>
  )
}

export default CartItems