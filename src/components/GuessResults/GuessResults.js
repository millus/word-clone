import React from "react";

function GuessResults({ guessList }) {
  return (
    <div class="guess-results">
      {guessList.map((item, index) => (
        <p key={index} className="guess">
          {item}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
