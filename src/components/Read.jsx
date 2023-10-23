import React, { useState,useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useLocation } from 'react-router-dom';
import './Read.scss'
import { Button } from 'antd';
import AudioPlayer from './Audio/AudioPlayer';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function PDFViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [showItem,setShowItem]=useState(true)
  const [info,setInfo]=useState()
  const location = useLocation();
  const [url,setUrl]=useState()
  const myProp = location.state && location.state.myProp;
useEffect(()=>{
  console.log(myProp,"checkteam")
  if(myProp.extension==".webm")
  {
    setShowItem(false)
  }
setInfo(myProp)

  let data=`https://saahithyapdffiles.blob.core.windows.net/uploadfilessaahithya/${myProp.FileId}.pdf?sp=r&st=2023-08-28T11:42:38Z&se=2023-12-30T19:42:38Z&spr=https&sv=2022-11-02&sr=c&sig=fvbUPQhstqAT7OaFy7XS7LuERdDsNu6U8uACd72XLmA%3D`
setUrl(data)
},[])
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function goToPrevPage() {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }

  function goToNextPage() {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  }

  

  return (
    <div className='mains'>
      {
showItem==true?<div> <Document
file={url}
onLoadSuccess={onDocumentLoadSuccess}
>
<Page
  pageNumber={pageNumber}

/>
</Document>
<div className='buttonItems'>
<Button onClick={goToPrevPage} disabled={pageNumber <= 1} className='buttonnormal'>
  Previous Page
</Button>
<p>Page {pageNumber} of {numPages}</p>
<Button onClick={goToNextPage} disabled={pageNumber >= numPages} className='buttonnormal'>
  Next Page
</Button>
</div></div>:<><AudioPlayer value={info}/></>
      }
     
    </div>
  );
}

export default PDFViewer;
