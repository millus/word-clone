import React from "react";

function GuessInputForm() {
  const [guess, setGuess] = React.useState("");

  function handleGuess(event) {
    event.preventDefault();
    if (guess.length == 5) {
      console.log({ guess });
      setGuess('');
    } else window.alert("Word must me minimum 5 letters");
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleGuess(event)}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      ></input>
    </form>
  );
}

export default GuessInputForm;
