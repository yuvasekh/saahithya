import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./Text.scss";
import { getSuggestions } from "./services/api";
function UncontrolledEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [suggestion, setsuggestion] = useState([]);
  const [updater, setUpdater] = useState(false);
  const [isMounted, setIsMounted] = useState(true); // Add a mounted flag

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  async function getSuggest(lastWord) {
    if (lastWord.trim() !== "") {
      const result = await getSuggestions(lastWord);
      let temp = result.map((item) => ({
        text: item,
        value: item,
        url: item,
      }));
      return temp;
    } else {
      return [];
    }
  }

  useEffect(() => {
     // Track if this effect is still current

    async function updateSuggestions() {
      const plainText = editorState.getCurrentContent().getPlainText();
      const words = plainText.split(" ");
      const lastTypedWord = words[words.length - 1];

      const newSuggestions = await getSuggest(lastTypedWord);
      
      // Check if the component is still mounted before updating state
 
        setsuggestion(newSuggestions);
        setUpdater(true);
      
    }

    updateSuggestions();

    return () => {
      // This cleanup function runs when the component is unmounted
     // Set the flag to false to indicate unmounting
    };
  }, [editorState]);

  useEffect(() => {
   
  }, [updater]);

  return (
    <div className="text">
      <Editor 
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        mention={{
          separator: " ",
          trigger: "@",
          suggestions: suggestion,
        }}
      />
    </div>
  );
}

export default UncontrolledEditor;
