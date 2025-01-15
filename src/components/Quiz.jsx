import React, { useState } from "react";
import Styles from "../styles/Quiz.module.css";

export default function Quiz() {
  const [isCorrect, setIsCorrect] = useState(null);

  const questions = [
    {
      title: "Math Quiz 1:",
      question: "What does 1 + 1 equal?",
      options: ["a. 1", "b. 2", "c. 3", "d. 4"],
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
    <div className={Styles.wrapper}>
      <h1 className={Styles.question}>{questions[0].title}<br/>{questions[0].question}</h1>
      <div className={Styles.options }>
        {questions[0].options.map((option) => {
          return <button className={Styles.answers} onClick={checkIfCorrect}>{option}</button>
        })}
      </div>
    </div>
    </>
  );
}
