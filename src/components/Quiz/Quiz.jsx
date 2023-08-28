import React, { useState } from 'react';
import './Poll.scss';
import { Button } from 'antd';
import { Radio } from 'antd'
import './Quiz.scss'
const Quiz = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([
    { question: "1)List Some Author Names", answer1: 'Option 1',  answer2: 'Option 2', answer3: 'Option 3', answer4: 'Option 4'},
    { question: "2)List Some Popular Books", answer1: 'Option 1',  answer2: 'Option 2', answer3: 'Option 3', answer4: 'Option 4'},
    { question: "3)List Some Author Names", answer1: 'Option 1',  answer2: 'Option 2', answer3: 'Option 3', answer4: 'Option 4'},
    { question: "4)List Some Author Names", answer1: 'Option 1',  answer2: 'Option 2', answer3: 'Option 3', answer4: 'Option 4'},
  ]);

  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleRadioChange = (questionIndex, selectedAnswer) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedAnswer,
    }));
  };

  const handleSubmit = () => {
    // You can access the selected answers using the selectedAnswers state object.
    console.log(selectedAnswers);
  };

  

  return (
    <div className="quiz-poll">
    
        <div className='ItemsList'>
        <h1 className='Title'>Welcome To Saahithya Quiz</h1>
        <br></br>
      {options.map((item, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <p>{item.question}</p>
          <Radio.Group
            onChange={(e) => handleRadioChange(index, e.target.value)}
            value={selectedAnswers[index]}
          >
          
              <Radio value={item.answer1}>{item.answer1}</Radio>
              <Radio value={item.answer2}>{item.answer2}</Radio>
              <Radio value={item.answer3}>{item.answer3}</Radio>
              <Radio value={item.answer4}>{item.answer4}</Radio>
          
          </Radio.Group>
        </div>
      ))}
      <Button type="primary" onClick={handleSubmit} className='submitquiz'>
        Submit
      </Button>
      </div>
    </div>
  
      
  
  );
}

export default Quiz;
