import React, { useEffect, useState } from 'react'
// import img1 from '../Resources/img1.jpg'
// import img2 from '../Resources/cover (2).jpg'
// import img3 from '../Resources/cover (3).jpg'
// import img4 from '../Resources/cover (4).jpg'
// import img5 from '../Resources/cover (5).jpg'
// import img6 from '../Resources/cover (6).jpg'
// import img7 from '../Resources/cover (7).jpg'
// import Trending from '../Resources/Images/Landing_components/trendingnew.jpg'
// import Upcoming from '../Resources/Images/Landing_components/upcoming.jpg'
import './DummyCarosel.scss'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import {getData,latest,trending} from '../components/services/api'
export const DummyCarousel = (props) => {
  const [imagedata,setImageData]=useState("")
  const [filesdata,setFilesData]=useState([])
  const [filesdata1,setFilesData1]=useState([])
  var path = location.pathname;
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
      var res=await latest()
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
async function data1()
{
  var res=await trending()
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
 
  
setFilesData1(res)
  
  // setBase64Image(base64);
//     console.log(base64)
// setImageData(base64)
}
data1()
  },[])
useEffect(()=>
{
console.log(filesdata,"----------->>>>>>>>>")
},[filesdata,filesdata1])

  const test=(item)=>
  {
  
     
      navigate('/itemdesc', { state: { myProp:item } })
  }
  console.log(props, "props")
  return (
    <div className='homecontent' style={{marginTop:"40px"}}>
      {
        path!=='/'?<><p className='heading'> కనుగొనండి
      
        కథల ప్రపంచం
      </p></>:<></>
      }
      
      <h3>టాప్ ట్రెండింగ్ సిరీస్</h3>
      <div className='bookimages'>
      {/* <div className='ld-con'>
          <img className='ld-img' src={Trending} />
        </div> */}
        {
          filesdata.map((item,index)=>
          (
            <div>
 <img  src={`data:image/png;base64,${item.FileImage.data}`} className='img1' onClick={()=>{test(item)}}/>
 <h3>{item.FileName}</h3>
              </div>
           
          ))
        }
     
      </div>
      <br></br>
      <h3>ఇటీవల అప్డేట్ చేసిన టాప్ సిరీస్</h3>
      <div className='bookimages'>
        {/* <div className='ld-con'>
          <img className='ld-img' src={Upcoming} />
        </div> */}
        
        {
          filesdata1.map((item,index)=>
          (
            <div> <img  src={`data:image/png;base64,${item.FileImage.data}`} className='img1' onClick={()=>{test(item)}}/> <h3>{item.FileName}</h3></div>
           
          ))
        }
        </div>
     
    
<br></br>
    </div>

  )
}
export default DummyCarousel;
