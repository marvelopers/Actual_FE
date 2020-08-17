import React, { useState } from "react";
import ReactDOM from "react-dom";

function Counter({ count, onClick }) {
  // view 관리
  return (
    <div>
      <button type="button" onClick={onClick}>
        Click Me! ({count})
      </button>
    </div>
  );
}

function App() {
  // state관리
  const [stete, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick() {
    setState({ count: count + 1 });
  }
  return (
    <div>
      <Counter
        count={count}
        onClick={() => {
          handleClick();
        }}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));

export default Counter;
