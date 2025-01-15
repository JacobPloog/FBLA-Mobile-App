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
            title: "Math Quiz 1:",
            question: "What does 1 + 1 equal?",
            options: ["a. 1", "b. 2", "c. 3", "d. 4"],
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
    <div className={Styles.wrapper}>
      <h1 className={Styles.question}>{questions[0].title}<br/>{questions[0].question}</h1>
      <div className={Styles.options }>
        {questions[0].options.map((option) => {
            return <button onClick={checkIfCorrect}>{option}</button>
        })}
      </div>
    </div>
    </>
  );
}

// selectedOption === option? isCorrect? {backgroundColor: "lightgreen"} : {backgroundColor: "lightcoral"} : {backgroundColor: "gray"}