import React from "react";

export default function Quiz() {
  const questions = [
    {
      question: "1 + 1",
      options: ["1", "2", "3", "4"],
      correctAnswer: "2",
    },
  ];

    return (
      <>
        <h1>{questions[0].question}</h1>
      </>
    );
}
