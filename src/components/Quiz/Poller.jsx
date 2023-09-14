import React, { useEffect, useState } from "react";
import "./Poll.scss";
import { poller, getpole } from "../services/api";
const Poll = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([]);
  const [percentage, setpercentage] = useState();
  const [question, setquestion] = useState();
  const [votes, setvotes] = useState([]);
  const [flag, setflag] = useState(false);
  useEffect(() => {
    async function getdata() {
      var resp = await getpole();
      console.log(resp, "InsidePollapi");

      if (resp) {
        console.log("InsideIf");
        setquestion(resp.PoleQuestion);
        setOptions([
          { id: 1, text: resp.PoleOption1, votes: 0, Poleid: resp.PoleId },
          { id: 2, text: resp.PoleOption2, votes: 0, Poleid: resp.PoleId },
          { id: 3, text: resp.PoleOption3, votes: 0, Poleid: resp.PoleId },
          { id: 4, text: resp.PoleOption4, votes: 0, Poleid: resp.PoleId },
        ]);
        return resp;
      }
    }
    getdata();
  }, []);

  const handleOptionChange = async (optionId) => {
    console.log(optionId, "fun");
    setSelectedOption(optionId);
    var voters = await poller(optionId);
    console.log(voters.data, "percenatge");
    const parsedData = voters.data[0]; // Assuming there's only one object in the array
    console.log(parsedData, "check");
    let temp = options;
    temp[0].votes = parsedData.Option1Percentage;
    temp[1].votes = parsedData.Option2Percentage;
    temp[2].votes = parsedData.Option3Percentage;
    temp[3].votes = parsedData.Option4Percentage;
    console.log(temp, "final values");
    setOptions(temp);
    setflag(true);
  };

  useEffect(() => {
    console.log(options, "options");
    setflag(false);
  }, [flag]);

  return (
    <div className="opinion-poll">
      <h2>Opinion Poll</h2>

      <ul className="options-list">
        {options.length > 0 ? (
          <>
            {" "}
            <p>{question}?</p>
            {options.map((option) => (
              <li
                key={option.id}
                className={`option ${
                  selectedOption === option.id ? "selected" : ""
                }`}
                onClick={() => handleOptionChange(option)}
              >
                {option.text} - {Math.floor(option.votes)}%
              </li>
            ))}
          </>
        ) : (
          <h1>No Pool's At</h1>
        )}
      </ul>
    </div>
  );
};

export default Poll;
