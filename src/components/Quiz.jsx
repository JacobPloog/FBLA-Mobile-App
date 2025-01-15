import React, { useState } from "react";
import Styles from "../styles/Quiz.module.css";

export default function Quiz() {
  const [isCorrect, setIsCorrect] = useState(null);

  const questions = [
    {
      question: "What does 1 + 1 equal;",
      options: ["1", "2", "3", "4"],
      correctAnswer: "2",
    },
  ];

  const checkIfCorrect = (e) => {
    const selectedOption = e.target.innerHTML;
    

    console.log("selected:", selectedOption);
    if (selectedOption === questions[0].correctAnswer) {
      console.log("Correct");
      e.target.classList.add("correct")
      console.log(e.target.classList)
    } else {
      console.log("Incorrect");
    }
  }

  return (
    <>
      <h1>{questions[0].question}</h1>
      <div className={Styles.options }>
        {questions[0].options.map((option) => {
            return <button onClick={checkIfCorrect}>{option}</button>
        })}
      </div>
    </>
  );
}
