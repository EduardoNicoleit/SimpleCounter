import React, { useState } from "react";

const StateTutorial = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  }
  const decrease = () => {
    setCounter(counter - 1);
  }
  const reset = () => {
    setCounter(counter * 0);
  }

  return (
    <div>
        {counter}
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default StateTutorial;