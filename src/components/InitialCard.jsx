import React from "react";
import Card from "react-bootstrap/Card";

export default function InitialCard({
  fetchQuiz,
  quizCategory,
  setQuizCategory,
  quizDifficulty,
  setQuizDifficulty,
}) {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-12 d-flex justify-content-center align-items-center"
          style={{ height: "90vh" }}
        >
          <Card style={{ width: "22rem" }} className="shadow px-4 py-3">
            <Card.Body>
              <Card.Title className="mb-2">Quiz Application</Card.Title>
              <Card.Subtitle className="mb-4 text-muted">
                Developed by Miraz
              </Card.Subtitle>
              <div className="mb-3">
                <label htmlFor="quiz_category">Select Quiz Category</label>
                <select
                  id="quiz_category"
                  className="form-select"
                  value={quizCategory}
                  onChange={(e) => setQuizCategory(e.target.value)}
                >
                  <option value="any">Any Category</option>
                  <option value="9">General Knowledge</option>
                  <option value="10">Entertainment: Books</option>
                  <option value="11">Entertainment: Film</option>
                  <option value="12">Entertainment: Music</option>
                  <option value="13">
                    Entertainment: Musicals &amp; Theatres
                  </option>
                  <option value="14">Entertainment: Television</option>
                  <option value="15">Entertainment: Video Games</option>
                  <option value="16">Entertainment: Board Games</option>
                  <option value="17">Science &amp; Nature</option>
                  <option value="18">Science: Computers</option>
                  <option value="19">Science: Mathematics</option>
                  <option value="20">Mythology</option>
                  <option value="21">Sports</option>
                  <option value="22">Geography</option>
                  <option value="23">History</option>
                  <option value="24">Politics</option>
                  <option value="25">Art</option>
                  <option value="26">Celebrities</option>
                  <option value="27">Animals</option>
                  <option value="28">Vehicles</option>
                  <option value="29">Entertainment: Comics</option>
                  <option value="30">Science: Gadgets</option>
                  <option value="31">
                    Entertainment: Japanese Anime &amp; Manga
                  </option>
                  <option value="32">
                    Entertainment: Cartoon &amp; Animations
                  </option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="quiz_difficulty">Select Difficulty</label>
                <select
                  id="quiz_difficulty"
                  className="form-select"
                  value={quizDifficulty}
                  onChange={(e) => setQuizDifficulty(e.target.value)}
                >
                  <option value="any">Any Difficulty</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
              <button
                className="btn btn-success btn-sm"
                onClick={() => fetchQuiz(quizCategory, quizDifficulty)}
              >
                Start Quiz
              </button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
