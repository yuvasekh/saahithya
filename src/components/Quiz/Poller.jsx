import React, { useState } from 'react';
import './Poll.scss';

const Poll = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([
    { id: 1, text: 'Option 1', votes: 0 },
    { id: 2, text: 'Option 2', votes: 0 },
    { id: 3, text: 'Option 3', votes: 0 },
  ]);

  const handleOptionChange = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleVote = (optionId) => {
    const updatedOptions = options.map((option) =>
      option.id === optionId ? { ...option, votes: option.votes + 1 } : option
    );
    console.log(optionId)
    setOptions(updatedOptions);
    setSelectedOption(null);
  };

  const totalVotes = options.reduce((total, option) => total + option.votes, 0);

  return (
    <div className="opinion-poll">
      <h2>Opinion Poll</h2>
      <p>Which option do you prefer?</p>
      <ul className="options-list">
        {options.map((option) => (
          <li
            key={option.id}
            className={`option ${selectedOption === option.id ? 'selected' : ''}`}
            onClick={() => handleOptionChange(option.id)}
          >
            {option.text} ({option.votes} votes) - {totalVotes !== 0 ? ((option.votes / totalVotes) * 100).toFixed(2) : 0}%
          </li>
        ))}
      </ul>
      {selectedOption !== null && (
        <button className="vote-button" onClick={() => handleVote(selectedOption)}>
          Vote
        </button>
      )}
    </div>
  );
}

export default Poll;
