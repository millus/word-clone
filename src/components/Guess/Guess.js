import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const [checkedValue, setCheckedValue] = React.useState([]);
  React.useEffect(() => {
    if (value !== undefined) {
      const result = checkGuess(value, answer);
      setCheckedValue(result);
    }
  }, [value, answer]);
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          className={`cell ${value ? checkedValue[num]?.status : ""}`}
          key={num}
        >
          {value ? checkedValue[num]?.letter : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
