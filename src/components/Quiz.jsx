import React, { useState } from "react";
import Styles from "../styles/Quiz.module.css";

import { useParams, useNavigate } from "react-router-dom";

export default function Quiz() {
  const navigate = useNavigate()

  const [isCorrect, setIsCorrect] = useState(null);
  const [isOver, setIsOver] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const [questionNum, setQuestionNum] = useState(0);
  const [health, setHealth] = useState(2)

  let {subject, quizNum} = useParams();



  const questions = 
    {
      math: {
        1: [
          {
            title: "Math Quiz 1:",
            question: "What does 1 + 1 equal?",
            options: ["a. 1", "b. 2", "c. 3", "d. 4"],
            correctAnswer: "b. 2",
          },
          {
            title: "Math Quiz 1:",
            question: "What does 2 + 2 equal?",
            options: ["a. 0", "b. 2", "c. 8", "d. 4"],
            correctAnswer: "d. 4",
          }
        ],
        2: [
          {
            title: "Math Quiz 2:",
            question: "What does 1 X 2 equal?",
            options: ["a. 1", "b. 2", "c. 3", "d. 4"],
            correctAnswer: "b. 2",
          }
        ]
      },
      english: {
        1: [
          {
            title: "English Quiz 1:",
            question: "What does 1 + 1 equal?",
            options: ["a. 1", "b. 2", "c. 3", "d. 4"],
            correctAnswer: "b. 2",
          }
        ]
      }
    };
  
  let quiz = questions[subject][quizNum]
  console.log(quiz.length)

  const saveEvent = (e) => {
    setIsCorrect(null);

    const html = e.target.innerHTML;
    setSelectedOption(html);
  }
  const checkIfCorrect = () => {
    if (isOver) {
      navigate("/")
    }
    setIsCorrect(null)
    if (selectedOption === quiz[questionNum].correctAnswer) {
      setIsCorrect(true);
      // nextPage()
      console.log("Correct");
    } else {
      setIsCorrect(false);
      console.log("Incorrect");

      setHealth(health - 1)
      if (health < 2) {
        setIsOver(true)
      }
    }
  }
 

  const nextPage = () => {
    checkIfCorrect();
    if (questionNum < quiz.length - 1) {
      console.log(questionNum)
      if (isCorrect) {
        setQuestionNum(questionNum + 1);
        setIsCorrect(null);
      }
      if(questionNum + 1 > 1) {
        navigate('/')
      }
    }
  }

  return (
    <>
    <div className={Styles.wrapper}>
      <h1 className={Styles.question}>{quiz[questionNum].question}</h1>
      <div className={Styles.options }>
        {quiz[questionNum].options.map((option) => {
            let buttonColor = {backgroundColor: "lightGray"}
            
              if (selectedOption) {
                if (selectedOption === option) {
                  if (isCorrect == true) {
                    buttonColor = {backgroundColor: "lightgreen"}    
                  } else if (isCorrect == false) {
                    buttonColor = {backgroundColor: "lightcoral"}
                  } else if (isCorrect == null) {
                    buttonColor = {backgroundColor: "lightGray"}
                  }
                }
              }
            return(
               <button onClick={saveEvent} key={option} className={Styles.answers} style={buttonColor}>{option}</button>
            )
        })}
      </div>
      <button onClick={nextPage}> &gt; </button>
      <p>{questionNum + 1}/{quiz.length}</p>
      <p>Health: {health}</p>
      <p>{isOver? "NO MORE LIVES RESTART": ""}</p>
    </div>
    </>
  );
}