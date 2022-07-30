import React from "react";
import Card from "react-bootstrap/Card";

export default function ScoreCard({ totalScore, totalMark, resetQuiz }) {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-12 d-flex justify-content-center align-items-center"
          style={{ height: "90vh" }}
        >
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Quiz Result</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Score</Card.Subtitle>
              <Card.Text>
                {" "}
                You Got: <strong> {totalScore} </strong>{" "}
              </Card.Text>
              <Card.Text>
                {" "}
                Total Mark: <strong> {totalMark} </strong>{" "}
              </Card.Text>
              <button onClick={resetQuiz} className="btn btn-danger btn-sm">
                Reset Quiz
              </button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
