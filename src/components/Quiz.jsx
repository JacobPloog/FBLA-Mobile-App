import React, { useState } from "react";
import Styles from "../styles/Quiz.module.css";

import { useParams } from "react-router-dom";

export default function Quiz() {
  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const [questionNum, setQuestionNum] = useState(0);

  let {subject} = useParams();

  const questions = [
    {
      // math: {
        // 1: [
          // {
            question: "What does 1 + 1 equal;",
            options: ["1", "2", "3", "4"],
            correctAnswer: "2",
          // }
        // ]
      }
    // },
  ];

  // let quiz = questions.find()

  const checkIfCorrect = (e) => {
    const html = e.target.innerHTML;
    setSelectedOption(html);
    

    console.log("selected:", html);
    if (html === questions[0].correctAnswer) {
      setIsCorrect(true);
      console.log("Correct");
    } else {
      setIsCorrect(false);
      console.log("Incorrect");
    }
  }

  return (
    <>
      <h1>{questions[0].question}</h1>
      <div className={Styles.options }>
        {questions[0].options.map((option) => {
            let buttonColor = {backgroundColor: "gray"}
            
              if (selectedOption) {
                if (selectedOption === option) {
                  if (isCorrect) {
                    buttonColor = {backgroundColor: "lightgreen"}    
                  } else {
                    buttonColor = {backgroundColor: "lightcoral"}
                  }
                }
              }
            return(
               <button onClick={checkIfCorrect} key={option} style={ buttonColor }>{option}</button>
            )
        })}
      </div>
    </>
  );
}

// selectedOption === option? isCorrect? {backgroundColor: "lightgreen"} : {backgroundColor: "lightcoral"} : {backgroundColor: "gray"}