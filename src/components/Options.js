import React from "react";

export default function Options({ question, dispatch, answer }) {
  console.log(answer);
  function clickHandler(index) {
    // console.log("dispatch");
    // console.log(dispatch);
    return dispatch({ type: "newAnswer", payload: index });
  }

  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => clickHandler(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
