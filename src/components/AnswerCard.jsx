import Parser from "html-react-parser";
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export default function AnswerCard({
  answer,
  index,
  handleSelectedAnswer,
  correctAnswer,
  selectedAnswer,
}) {
  const isRightAnswer = selectedAnswer && answer === correctAnswer;
  const isWrongAnswer =
    selectedAnswer &&
    answer === selectedAnswer &&
    selectedAnswer !== correctAnswer;
  const correctClass = isRightAnswer ? "correct-answer" : "";
  const wrongClass = isWrongAnswer ? "incorrect-answer" : "";
  const disableClass = selectedAnswer ? "disabled-answer" : "";

  return (
    <>
      <ListGroup.Item
        action
        href={`#${index}`}
        className={`${correctClass} ${wrongClass} ${disableClass}`}
        onClick={(e) => {
          e.preventDefault();
          return handleSelectedAnswer(answer);
        }}
      >
        {Parser(answer)}
      </ListGroup.Item>
    </>
  );
}
