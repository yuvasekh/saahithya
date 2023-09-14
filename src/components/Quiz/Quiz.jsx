import React, { useEffect, useState } from 'react';
import './Poll.scss';
import { Button } from 'antd';
import { Radio } from 'antd';
import './Quiz.scss';
import { getquiz,participateQuiz } from '../services/api';

const Quiz = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [QuizId,setQuizId]=useState()
  const [options, setOptions] = useState([]);

  useEffect(() => {
    async function getdata() {
      var resp = await getquiz();
      console.log(resp,typeof(resp), "Inside api call");
      if(resp)
      {
      setOptions([
        { question: resp.QuestionOne, answer1: resp.OptionOne1, answer2: resp.OptionOne2, answer3: resp.OptionOne3, answer4: resp.OptionOne4 },
        { question: resp.QuestionTwo, answer1: resp.OptionTwo1, answer2: resp.OptionTwo2, answer3: resp.OptionTwo3, answer4: resp.OptionTwo4 },
        { question: resp.QuestionThree, answer1: resp.OptionThree1, answer2: resp.OptionThree2, answer3: resp.OptionThree3, answer4: resp.OptionThree4 },
        { question: resp.QuestionFour, answer1: resp.OptionFour1, answer2: resp.OptionFour2, answer3: resp.OptionFour3, answer4: resp.OptionFour4 },
        { question: resp.QuestionFive, answer1: resp.OptionFive1, answer2: resp.OptionFive2, answer3: resp.OptionFive3, answer4: resp.OptionFive4 },
      ]);
      setQuizId(resp.QuizId)
      return resp;
    }
     
    }
    getdata();
  }, []);

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [allOptionsSelected, setAllOptionsSelected] = useState(false);

  useEffect(() => {
    const allSelected = options.every((_, index) => selectedAnswers[index] !== undefined);
    setAllOptionsSelected(allSelected);
  }, [selectedAnswers, options]);

  const handleRadioChange = (questionIndex, selectedAnswer) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedAnswer,
    }));
  };

  const handleSubmit = async () => {
    console.log(selectedAnswers);
    if (allOptionsSelected) {
      selectedAnswers['QuizId']=QuizId
      participateQuiz(selectedAnswers);
    } else {
      console.log("Please select all options.");
    }
  };

  return (
    <div className="quiz-poll">
      <div className="ItemsList">
        <h1 className="Title">Welcome To Saahithya Quiz</h1>
        <br />
        {
          options.length>0?<> {options.map((item, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <p>{item.question}</p>
              <Radio.Group
                onChange={(e) => handleRadioChange(index, e.target.value)}
                value={selectedAnswers[index]}
              >
                <Radio value={item.answer1} required>{item.answer1}</Radio>
                <Radio value={item.answer2} required>{item.answer2}</Radio>
                <Radio value={item.answer3} required>{item.answer3}</Radio>
                <Radio value={item.answer4} required>{item.answer4}</Radio>
              </Radio.Group>
            </div>
          ))}
          <Button
            type="primary"
            onClick={handleSubmit}
            className="submitquiz"
            disabled={!allOptionsSelected}
          >
            Submit
          </Button></>:<>No Competations is Started At</>
        }
       
      </div>
    </div>
  );
};

export default Quiz;
