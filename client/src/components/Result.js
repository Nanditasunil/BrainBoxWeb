import React, { useEffect } from "react";
import "./Result.css";
import { Link } from "react-router-dom";
import { ResultTable } from "./ResultTable";
import { useDispatch, useSelector } from "react-redux";
import { resetAllAction } from "../redux/question_reducer";
import { resetResultAction } from "../redux/result_reducer";
import { attemptsNumber, earnPoints_Number } from "../helper/helper";
export const Result = () => {
  const dispatch = useDispatch();
  const {
    questions: { queue, answers },
    result: { result, userId },
  } = useSelector((state) => state);

  useEffect(() => {
    console.log(earnPoints);
  });

  const tottalPoints = queue.length * 10;
  const attempts = attemptsNumber(result);
  const earnPoints = earnPoints_Number(result, answers);

  function onRestart() {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      <div className=" result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className="bold ">nandita</span>
        </div>
        <div className="flex">
          <span>Total quiz points:</span>
          <span className="bold ">50</span>
        </div>
        <div className="flex">
          <span>Total quiz Questions :</span>
          <span className="bold ">05</span>
        </div>
        <div className="flex">
          <span>Total quiz Attempts :</span>
          <span className="bold ">03</span>
        </div>
        <div className="flex">
          <span>Total Points :</span>
          <span className="bold ">30</span>
        </div>
        <div className="flex">
          <span>Quiz Result</span>
          <span className="bold ">Passed</span>
        </div>
      </div>
      <div className="start">
        <Link className="btn" to={"/"} onClick={onRestart}>
          Restart
        </Link>
      </div>
      <div className="container">
        <ResultTable></ResultTable>
      </div>
    </div>
  );
};
