import React from "react";
import { showAlert } from "./actions";
import { CREATE_POST } from "./types";
const forbidden = ["fuck", "spam", "function", "console"];

const forbiddenWordsMiddleware = ({ dispatch }) => {
  return (next) => (action) => {
    if (action.type === CREATE_POST) {
      const found = forbidden.filter((w) => action.payload.title.includes(w));
      if (found.length) {
        return dispatch(showAlert("Wrong Text"));
      }
    }
    return next(action);
  };
};

export default forbiddenWordsMiddleware;
