import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf'; // Import pdfjs to use worker

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function PDFViewer() {
  const location = useLocation();
  const [url,setUrl]=useState()
  const myProp = location.state && location.state.myProp;
useEffect(()=>{
  console.log(myProp)
  let data=`https://saahithyapdffiles.blob.core.windows.net/uploadfilessaahithya/${myProp}.pdf?sp=r&st=2023-08-28T11:42:38Z&se=2023-12-30T19:42:38Z&spr=https&sv=2022-11-02&sr=c&sig=fvbUPQhstqAT7OaFy7XS7LuERdDsNu6U8uACd72XLmA%3D`
setUrl(data)
},[])

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

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
    <div>
      <Document
        file={url}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <button onClick={goToPrevPage} disabled={pageNumber <= 1}>
          Previous Page
        </button>
        <p>Page {pageNumber} of {numPages}</p>
        <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
          Next Page
        </button>
      </div>
    </div>
  );
}

export default PDFViewer;
