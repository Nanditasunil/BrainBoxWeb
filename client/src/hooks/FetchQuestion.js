import { useEffect, useState } from "react";
import data from "../database/data";
import { useDispatch } from "react-redux";

import * as Action from "../redux/question_reducer";

export const useFetchQuestion = () => {
  const dispatch = useDispatch();
  const [getData, setgetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });
  useEffect(() => {
    setgetData((prev) => ({ ...prev, isLoading: true }));

    (async () => {
      try {
        let question = await data;
        if (question.length > 0) {
          setgetData((prev) => ({ ...prev, isLoading: false }));
          setgetData((prev) => ({ ...prev, apiData: question }));

          dispatch(Action.startExamAction(question));
        } else {
          throw new Error("No Question Available");
        }
      } catch (error) {
        setgetData((prev) => ({ ...prev, isLoading: false }));
        setgetData((prev) => ({ ...prev, serverError: error }));
      }
    })();
  }, [dispatch]);
  return [getData, setgetData];
};

// moved a tion dispatch function

export const moveNextQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.moveNextAction());
  } catch (error) {
    console.log(error);
  }
};


export const movePrevQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.movePrevAction());
  } catch (error) {
    console.log(error);
  }
};
