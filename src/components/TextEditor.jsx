import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import getSuggestions from '../api'
import './TextEditor.css'
import { Button } from 'antd';
const TextEditor = (props) => {
    console.log(props)
  const [content, setContent] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const handleEditorChange = async (value,e) => {
    console.log(e.ops,"gggggggggggg")
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

  return (
    <div>
      <ReactQuill
        value={content}
        // onChange={handleEditorChange}
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
  );
};

export default TextEditor;

