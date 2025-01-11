import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInputForm from "../GuessInputForm";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guessList, setGuessList] = React.useState([]);

  return (
    <>
      <GuessInputForm
        guess={guess}
        setGuess={setGuess}
        setGuessList={setGuessList}
        guessList={guessList}
      ></GuessInputForm>
      <GuessResults guessList={guessList}></GuessResults>;
    </>
  );
}

export default Game;
