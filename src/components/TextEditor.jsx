import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import getSuggestions from '../api'
import './TextEditor.css'
import { Button } from 'antd';
import { getSuggestions } from './services/api';
const TextEditor = (props) => {
    console.log(props)
  const [content, setContent] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const handleEditorChange = async (value,e) => {
  
    var res = await getSuggestions(value.substring(3,value.length-4));
    if(e.ops[0].insert!=undefined ||  e.ops[1]?.insert=='')
    {
      console.log(res, "------------>");
      setSuggestions(res);
      setContent(value);
    }
 else{
  setSuggestions([])
 }
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

  return (


    <div className='ReactQuill-con' >

      <h1 className='text-head'>WRITE YOUR STORY</h1>


      <div >
      <ReactQuill 
        value={content}
        onChange={handleEditorChange}
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
      </div>


    </div>



  );
};

export default TextEditor;