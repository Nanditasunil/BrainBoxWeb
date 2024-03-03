import React, { useEffect } from "react";
import { Questions } from "./Questions";

import { moveNextQuestion, movePrevQuestion } from "../hooks/FetchQuestion";
import { useSelector, useDispatch } from "react-redux";

export const Quiz = () => {
  // const trace = useSelector((state) => state.questions.trace);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(trace);
  });

  function onNext() {
    console.log("next");
    if (trace < queue.length) {
      dispatch(moveNextQuestion());
    }
  }

  function onPrev() {
    console.log("prev");
    if (trace > 0) {
      dispatch(movePrevQuestion());
    }
  }
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <Questions></Questions>

      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Prev
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};
