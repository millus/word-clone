import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInputForm from "../GuessInputForm";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
  }
  return (
    <>
      <GuessResults answer={answer} guesses={guesses}></GuessResults>
      <GuessInputForm handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
