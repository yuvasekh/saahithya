import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
 const Addtocart = () => {
    const  [cartItems,setCartItems]=useState([])
    const location = useLocation();

    const myProp = location.state && location.state.myProp;
    const navigate=useNavigate();

  return (
    <div>
  {
    cartItems.map(()=>
    { 
<p>Hello</p>
    })
}
    </div>
    )
}
export default Addtocart;