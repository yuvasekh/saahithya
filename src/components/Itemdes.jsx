import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import './Itemdesc.scss'
import { Button } from 'antd';
import { EyeOutlined, ShoppingCartOutlined, StarOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { addToCart } from './services/api';

import { useNavigate } from 'react-router-dom';
 const Itemdesc = () => {
  const [liked, setLiked] = useState(false);
const [items,setItems]=useState()
  const handleLike = () => {
    setLiked(!liked);
  };
  const navigate=useNavigate();
  const location = useLocation();
const myProp = location.state && location.state.myProp;
const [selectedimage,setSelectedImage]=useState(myProp.FileImage.data)
  console.log(myProp,"yuvaprops")
 

// useEffect(()=>
// {
// console.log(selectedimage,"sssssssssssss")
// },[selectedimage])
  function readPage(FileID)
  {
  
     navigate('/read', { state: { myProp:FileID } })
    
  }
  async function cart(CartItem)
  {
    console.log(CartItem,"Inside Fun")
    await addToCart(CartItem)
    navigate('/cart', { state: { myProp:FileID } })
  }
  return (
    <div style={{position:'relative'}} className='itemcontaineritems'>
        <div  className='styleconainer'>
        </div>
        <div className='imgcontainers'>
            <div style={{width:'850px',gap:'32px'}}> <h2>{myProp.FileName}</h2>
            <p>{myProp.bookdescription}</p>
            <p style={{color:'green',fontWeight:'800x'}}><StarOutlined />{myProp.Rating}</p>
            <p style={{color:'black',fontWeight:'800x'}}><EyeOutlined />{myProp.Views}</p>
            <Button style={{backgroundColor:"f81414d0 !important"}} onClick={()=>{readPage(myProp.FileId)}}>Read</Button>
            <Button onClick={handleLike}>
      <FontAwesomeIcon icon={liked ? faThumbsDown : faThumbsUp} />
      {liked ? ' Likes' : ' Likes'}
      {myProp.Likes}
    </Button>
    {/* {
      myProp.Iscart.data[0]==1?<> <Button style={{backgroundColor:"f81414d0 !important",marginLeft:'20px',width:'140px'}} onClick={()=>{navigate('/viewcart')}}><ShoppingCartOutlined /> View Cart</Button></>:<> <Button style={{backgroundColor:"f81414d0 !important",marginLeft:'20px',width:'140px'}} onClick={()=>{cart(myProp.FileId)}}><ShoppingCartOutlined /> Addtocart</Button></>
    } */}
    <Button style={{backgroundColor:"f81414d0 !important",marginLeft:'20px',width:'140px'}} onClick={()=>{cart(myProp.FileId)}}><ShoppingCartOutlined /> Addtocart</Button>
           </div>
           <div> <img   src={`data:image/png;base64,${selectedimage}`} style={{width:'180px',height:'250px'}}/>
</div>
       
        </div>
    {/* <div>CategoryItems</div>
    <img src={myProp.img}/>
    <div><h1>{myProp.imgdesc}</h1></div> */}
    <br></br>
  
    </div>
  )
}
export default Itemdesc