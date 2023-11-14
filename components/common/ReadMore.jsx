// ReadMore.js
import React, { useState } from 'react';
import './ReadMore.scss'; // Import your CSS file

const ReadMore = ({ text, maxChars }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the visibility of additional text
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="read-more">
      {text.length <= maxChars || isExpanded ? (
        <p>{text}</p>
      ) : (
        <div>
          <p>{`${text.substring(0, maxChars)}...`}</p>
          <button onClick={toggleReadMore}>Read More</button>
        </div>
      )}
    </div>
  );
};

export default ReadMore;
