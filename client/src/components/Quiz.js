import React, { useEffect, useState } from "react";
import { Questions } from "./Questions";

import { moveNextQuestion, movePrevQuestion } from "../hooks/FetchQuestion";
import { useSelector, useDispatch } from "react-redux";
import { PushAnswer } from "../hooks/setResult";

export const Quiz = () => {
  const [check, setChecked] = useState(undefined);
  const state = useSelector((state) => state);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(trace);
  });

  function onNext() {
    console.log("next");
    if (trace < queue.length) {
      dispatch(moveNextQuestion());

      dispatch(PushAnswer(check));
    }
  }

  function onPrev() {
    console.log("prev");
    if (trace > 0) {
      dispatch(movePrevQuestion());
    }
  }

  function onChecked(check) {
    console.log(check);
    setChecked(check)
  }
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <Questions onChecked={onChecked} />

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
