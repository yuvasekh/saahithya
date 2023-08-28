import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Document, Page,pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import './Read.scss'
  import {getDataById} from "../components/services/api"
//PDFjs worker from an external cdn
const url = 
"https://saahithyapdffiles.blob.core.windows.net/uploadfilessaahithya/27290fe2-2297-48b5-9e9c-667b9abd7a54.pdf?sp=r&st=2023-07-17T02:04:20Z&se=2023-07-17T10:04:20Z&spr=https&sv=2022-11-02&sr=c&sig=b4TS9EispHKr0iw%2BP1YEC%2Bd5FGaRQiwKF3vuf1Uzlao%3D"
 const Read = () => {
    // pdfjs.GlobalWorkerOptions.workerSrc = 
 
    // `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const location = useLocation();
    const myProp = location.state && location.state.myProp;
    console.log(myProp,"readfile")

    const [url,seturl] = useState(`https://saahithyapdffiles.blob.core.windows.net/uploadfilessaahithya/${myProp}.pdf?sp=r&st=2023-08-28T11:42:38Z&se=2023-12-30T19:42:38Z&spr=https&sv=2022-11-02&sr=c&sig=fvbUPQhstqAT7OaFy7XS7LuERdDsNu6U8uACd72XLmA%3D`);

    useEffect(()=>{
      console.log(`https://saahithyapdffiles.blob.core.windows.net/uploadfilessaahithya/${myProp}.pdf?sp=r&st=2023-08-28T11:42:38Z&se=2023-12-30T19:42:38Z&spr=https&sv=2022-11-02&sr=c&sig=fvbUPQhstqAT7OaFy7XS7LuERdDsNu6U8uACd72XLmA%3D`)
    seturl(`https://saahithyapdffiles.blob.core.windows.net/uploadfilessaahithya/${myProp}.pdf?sp=r&st=2023-08-28T11:42:38Z&se=2023-12-30T19:42:38Z&spr=https&sv=2022-11-02&sr=c&sig=fvbUPQhstqAT7OaFy7XS7LuERdDsNu6U8uACd72XLmA%3D`)
    },[])
    // useEffect(()=>
    // {
    //   async function data()
    //   {
    //     var res=await getDataById(myProp)
    //     console.log(res)
    //   }
    //   data()
    // })
    
    /*To Prevent right click on screen*/
    document.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });
      
    /*When document gets loaded successfully*/
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
      setPageNumber(1);
    }
    
    function changePage(offset) {
      setPageNumber(prevPageNumber => prevPageNumber + offset);
    }
    
    function previousPage() {
      changePage(-1);
    }
    
    function nextPage() {
      changePage(1);
    }
  
  return (
    <div className="mains">
      <Document
        file={url}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <br></br>
      <div className='subitem'>
        <div className="pagec">
        <p style={{marginTop:'10px'}}> Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}</p> 
        </div>
        <div className="buttonc">
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
          className='buttonnormal'
            
        >
          Previous
        </button>
        <button className='buttonnormal'
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
           
        >
          Next
        </button>
        </div>
      </div>
      </div>
  )
}
export default Read