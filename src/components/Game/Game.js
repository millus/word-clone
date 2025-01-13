import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInputForm from "../GuessInputForm";
import GuessResults from "../GuessResults/GuessResults";
import Banner from "../Banner/Banner.js";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);
    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    } else if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus("won");
    }
  }
  return (
    <>
      {gameStatus != "running" && (
        <Banner
          gameStatus={gameStatus}
          answer={answer}
          numOfGuesses={guesses.length}
        />
      )}
      <GuessResults answer={answer} guesses={guesses}></GuessResults>
      <GuessInputForm
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
    </>
  );
}

export default Game;
