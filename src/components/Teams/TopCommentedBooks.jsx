import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {gettopcomments} from '../../components/services/api'
export const TopCommentedBooks = () => {
  const [imagedata,setImageData]=useState("")
  const [filesdata,setFilesData]=useState([])
  const [filesdata1,setFilesData1]=useState([])
  var path = location.pathname;
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
         slidesToShow: 3,
         slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
         slidesToShow: 2,
         slidesToScroll: 1,
        }
       },
       {
        breakpoint: 480, // Adjust this value for your desired mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ]
  };
  console.log(path,"path")
  const navigate=useNavigate();
  // const imagearray = [
  //   {img:img1,imgdesc:"నా ఎద చప్పుడు నీవే చెలి",imgsummary:"రాత్రి 8 : 30 సమయం లో విజయవాడ నగరం లో ఉరికి కొంచెం చివరిగా ఉన్న ఒక పెద్ద డూప్లెక్స్ హౌస్ లో ఒక గదిలో కొందరు ఆడవాళ్ళు కలిసి ఒక అమ్మాయి నీ అద్దం ముందు కూర్చోపెట్టి రెడీ చేస్తున్నారు..... తనకి తెల్ల ... ..."}
  //   ,{img:img2,imgdesc:"comedy",imgsummary:"రాత్రి 8 : 30 సమయం లో విజయవాడ నగరం లో ఉరికి కొంచెం చివరిగా ఉన్న ఒక పెద్ద డూప్లెక్స్ హౌస్ లో ఒక గదిలో కొందరు ఆడవాళ్ళు కలిసి ఒక అమ్మాయి నీ అద్దం ముందు కూర్చోపెట్టి రెడీ చేస్తున్నారు..... తనకి తెల్ల ... ..."},
  //   {img:img3,imgdesc:"Life",imgsummary:"రాత్రి 8 : 30 సమయం లో విజయవాడ నగరం లో ఉరికి కొంచెం చివరిగా ఉన్న ఒక పెద్ద డూప్లెక్స్ హౌస్ లో ఒక గదిలో కొందరు ఆడవాళ్ళు కలిసి ఒక అమ్మాయి నీ అద్దం ముందు కూర్చోపెట్టి రెడీ చేస్తున్నారు..... తనకి తెల్ల ... ..."}, {img:img4,imgdesc:"Prema"},
  //   {img:img5,imgdesc:"Child",imgsummary:"రాత్రి 8 : 30 సమయం లో విజయవాడ నగరం లో ఉరికి కొంచెం చివరిగా ఉన్న ఒక పెద్ద డూప్లెక్స్ హౌస్ లో ఒక గదిలో కొందరు ఆడవాళ్ళు కలిసి ఒక అమ్మాయి నీ అద్దం ముందు కూర్చోపెట్టి రెడీ చేస్తున్నారు..... తనకి తెల్ల ... ..."}, {img:img6,imgdesc:"Women"},
  //   {img:img7,imgdesc:"samajikam",imgsummary:"రాత్రి 8 : 30 సమయం లో విజయవాడ నగరం లో ఉరికి కొంచెం చివరిగా ఉన్న ఒక పెద్ద డూప్లెక్స్ హౌస్ లో ఒక గదిలో కొందరు ఆడవాళ్ళు కలిసి ఒక అమ్మాయి నీ అద్దం ముందు కూర్చోపెట్టి రెడీ చేస్తున్నారు..... తనకి తెల్ల ... ..."}
   
  // ];
  useEffect(()=>
  {
    
    async function data()
    {
      var res=await gettopcomments()
      console.log(res,"checking")
      let temp=[]
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
     console.log(res,"checkdb")
      
   setFilesData(res)
      
      // setBase64Image(base64);
  //     console.log(base64)
  // setImageData(base64)
    }
data()
  },[])
useEffect(()=>
{
console.log(filesdata,"----------->>>>>>>>>")
},[filesdata,filesdata1])

  const test=(item)=>
  {
  
     
      navigate('/itemdesc', { state: { myProp:item } })
  }

  return (
    <div className='homecontent' style={{marginTop:"40px"}}>
     
      
      <p className='trending-head'>Top Commented Books</p>
     <br></br>
      {/* <div className='ld-con'>
          <img className='ld-img' src={Trending} />
        </div> */}
        
        <Slider {...settings}>
        
            {
              filesdata.map((item,index)=>
              (
            
            
                  <div className='trend-img-con1'>
                      <img  src={`data:image/png;base64,${item.FileImage.data}`} className='img5' onClick={()=>{test(item)}}/>
                      <h3 className='trend-head'>{item.FileName}</h3>
                  </div>
            
              ))
            }
          
        </Slider>
<br></br>
    </div>

  )
}
export default TopCommentedBooks;
