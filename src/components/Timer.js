import React, { useEffect } from "react";

export default function Timer({ dispatch, secondsRemaining }) {
  useEffect(
    function () {
      setInterval(() => {
        dispatch({ type: "tick" });
        // console.log('tick')
      }, 1000);
    },
    [dispatch]
  );
  return <div className="timer">{secondsRemaining}</div>;
}
