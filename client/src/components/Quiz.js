import React from "react";
import { Questions } from "./Questions";

export const Quiz = () => {
  function onNext() {
    console.log("next");
  }

  function onPrev() {
    console.log("prev");
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
