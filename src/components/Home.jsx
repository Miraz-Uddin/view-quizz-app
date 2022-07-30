import React, { useState } from "react";
import arrayShuffle from "../utils/arrayShuffle";
import InitialCard from "./InitialCard";
import QuestionCard from "./QuestionCard";
import ScoreCard from "./ScoreCard";

export default function Home() {
  const [allQuiz, setAllQuiz] = useState(null);
  const [quizOver, setQuizOver] = useState(false);
  const currentQuizInitial = {
    index: 0,
    totalMark: 0,
    totalScore: 0,
    selectedAnswer: null,
    correctAnswer: null,
    question: null,
    answersSet: [],
  };
  const [currentQuiz, setCurrentQuiz] = useState(currentQuizInitial);

  const [quizCategory, setQuizCategory] = useState("18");
  const [quizDifficulty, setQuizDifficulty] = useState("easy");

  const fetchQuiz = async (category, difficulty) => {
    try {
      let response = await fetch(
        `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`
      );
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const { results } = await response.json();
      setAllQuiz(results);
      setQuizOver(false);
      setCurrentQuiz((prev) => {
        return {
          index: 0,
          totalMark: results.length,
          totalScore: 0,
          correctAnswer: results[0].correct_answer,
          question: results[0].question,
          answersSet: arrayShuffle([
            ...results[0].incorrect_answers,
            results[0].correct_answer,
          ]),
        };
      });
    } catch (e) {
      setAllQuiz(null);
      console.log("Data cannot be Fetched");
      console.log(e);
    }
  };

  const navigateNext = () => {
    if (currentQuiz.index < allQuiz.length - 1) {
      setCurrentQuiz((prev) => {
        return {
          ...prev,
          index: prev.index + 1,
          selectedAnswer: null,
          correctAnswer: allQuiz[prev.index + 1].correct_answer,
          question: allQuiz[prev.index + 1].question,
          answersSet: arrayShuffle([
            ...allQuiz[prev.index + 1].incorrect_answers,
            allQuiz[prev.index + 1].correct_answer,
          ]),
        };
      });
    }
  };

  const quizEnd = () => {
    setQuizOver(true);
    setAllQuiz(null);
    setCurrentQuiz((prev) => {
      return {
        ...prev,
        index: 0,
        correctAnswer: allQuiz[0].correct_answer,
        question: allQuiz[0].question,
        answersSet: arrayShuffle([
          ...allQuiz[0].incorrect_answers,
          allQuiz[0].correct_answer,
        ]),
      };
    });
  };

  const resetQuiz = () => {
    setQuizOver(false);
    setAllQuiz(null);
    setCurrentQuiz((prev) => {
      return currentQuizInitial;
    });
  };

  const handleSelectedAnswer = (answer) => {
    setCurrentQuiz((prev) => {
      return {
        ...prev,
        selectedAnswer: answer,
      };
    });
    if (answer === currentQuiz.correctAnswer) {
      setCurrentQuiz((prev) => {
        return {
          ...prev,
          totalScore: prev.totalScore + 1,
        };
      });
    }
  };

  return (
    <>
      {quizOver && (
        <ScoreCard
          totalScore={currentQuiz.totalScore}
          totalMark={currentQuiz.totalMark}
          resetQuiz={resetQuiz}
        />
      )}
      {allQuiz ? (
        <QuestionCard
          quiz={currentQuiz}
          count={allQuiz.length}
          navigateNext={navigateNext}
          quizEnd={quizEnd}
          resetQuiz={resetQuiz}
          handleSelectedAnswer={handleSelectedAnswer}
        />
      ) : quizOver ? (
        <></>
      ) : (
        <InitialCard
          fetchQuiz={fetchQuiz}
          quizCategory={quizCategory}
          setQuizCategory={setQuizCategory}
          quizDifficulty={quizDifficulty}
          setQuizDifficulty={setQuizDifficulty}
        />
      )}
    </>
  );
}
