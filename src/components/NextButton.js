import React from "react";

// export default function NextButton({ dispatch, answer, index, numQuestions }) {
//   if (answer === null) {
//     return null;
//   }

//   if (index === numQuestions - 1) {
//     return (
//       <button
//         className="btn btn-ui"
//         onClick={() => dispatch({ type: "finish" })}
//       >
//         Finish
//       </button>
//     );
//   }

//   return (
//     <button
//       className="btn btn-ui"
//       onClick={() => dispatch({ type: "nextQuestion" })}
//     >
//       Next
//     </button>
//   );
// }

function NextButton({ dispatch, answer, index, numQuestions }) {
  // const { dispatch, answer, index, numQuestions } = useQuiz();

  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
