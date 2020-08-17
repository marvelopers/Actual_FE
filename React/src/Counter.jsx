import React, { useState } from "react";
import ReactDOM from "react-dom";

function Counter() {
  const [stete, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick() {
    setState({ count: count + 1 });
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          handleClick();
        }}
      >
        Click Me! ({count})
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));

export default Counter;
