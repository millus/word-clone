import React from "react";

function GuessInputForm({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleGuess(event) {
    event.preventDefault();

    handleSubmitGuess(tentativeGuess);

    setTentativeGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={(event) => {
          setTentativeGuess(event.target.value.toUpperCase());
        }}
        maxLength={5}
        minLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        required
        disabled={gameStatus != "running"}
      ></input>
    </form>
  );
}

export default GuessInputForm;
