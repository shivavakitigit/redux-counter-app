import React, { useState } from "react";

function TestCounter() {
  const [state, setState] = useState(0);
  // state 0 1 2 3 4
  // state update
  const increment = () => {
    setState(state + 10);
    console.log("increment works");
  };
  const decrement = () => {
    setState(state - 1);
  };
  return (
    <div>
      <button onClick={increment}>Add 10</button>
      <div>{state}</div>
      <button onClick={decrement}>Minus</button>
    </div>
  );
}

// const mapStateToProps = state => ({keerthiStatevalue: state.counterApp.counter})

export default TestCounter;
