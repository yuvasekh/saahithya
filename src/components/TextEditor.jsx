import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import html2pdf from 'html2pdf.js';

// import getSuggestions from '../api'
import './TextEditor.css'
import { Button } from 'antd';
const TextEditor = (props) => {
    console.log(props)
  const [content, setContent] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const handleDownload = () => {
    const editorContent = document.querySelector('.ql-editor').innerHTML;
    const pdfOptions = {
      margin: 10,
      filename: 'editor_content.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };
  
    const pdfElement = document.createElement('div');
    pdfElement.innerHTML = editorContent;
  
    html2pdf().from(pdfElement).set(pdfOptions).save();
  };
  
  const handleEditorChange = async (value,e) => {
    // console.log(e.ops,"gggggggggggg")
    // var res = await getSuggestions(value);
    // if(e.ops[0].insert!=undefined ||  e.ops[1]?.insert=='')
    // {
      console.log(res, "------------>");
      setSuggestions(res);
      setContent(value);
//     }
//  else{
//   setSuggestions([])
//  }
  };

  useEffect(() => {
    // Perform any necessary side effects when 'suggestions' state changes
  }, [suggestions,content]);

  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // text formatting
    [{ header: [1, 2, 3, 4, 5, 6, false] }], // header formatting
    [{ list: 'ordered' }, { list: 'bullet' }], // lists
    [{ indent: '-1' }, { indent: '+1' }], // indentation
    ['link', 'image'], // links and images
    ['clean'], // remove formatting
  ];
  const handleSetCursorPosition = () => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      const indexToSetCursor = 10; // Set the index where you want to move the cursor
      editor.setSelection(indexToSetCursor);
    }
  };
  
  const handleNextPage = () => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      const currentPage = getCurrentPageNumber(); // Implement a function to get the current page number
      const nextPageIndex = getNextPageIndex(currentPage); // Implement a function to get the index of the next page
  
      if (nextPageIndex !== null) {
        scrollToPageIndex(editor, nextPageIndex);
      }
    }
  };
  
  return (
    <div>
      <ReactQuill
        value={content}
        onChange={handleSetCursorPosition}
        modules={{ toolbar: toolbarOptions }}
      />
      <ul>
        {suggestions.length > 0 ? (
          suggestions.map((suggestion, index) => <li key={index}>{suggestion}</li>)
        ) : (
          <></>
        )}
      </ul>
      <Button/>
      <Button onClick={handleDownload}>Download PDF</Button>
    </div>
  );
};

export default TextEditor;

