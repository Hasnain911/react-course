import React from "react";
import { useState } from "react";

const StateHook = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // setCount(0);
    // No re-render will occur because the current state is already 0.
    // React compares the previous and next state using Object.is().
    // Since both values are equal, React skips the re-render as an optimization.

    setCount(count + 1);

    console.log(`inner ${count}`);
    // Output: "inner 0"
    // This logs the value from the current render.
    // setCount() only schedules a state update.
    // React applies the update and re-renders the component
    // after this event handler finishes.
  };

  console.log(`outer ${count}`);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
};

export default StateHook;