import React from "react";

function Banner({ gameStatus, answer, numOfGuesses }) {
  if (gameStatus === "won") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
          </strong>
          .
        </p>
      </div>
    );
  } else if (gameStatus === "lost") {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer.toUpperCase()}</strong>.
        </p>
      </div>
    );
  }

  return null; // If no game status is passed, return nothing
}

export default Banner;
