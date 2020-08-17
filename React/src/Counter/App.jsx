import React, { useState } from "react";

import Page from "./Page";

export default function App() {
  // state관리
  const [stete, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick(increment) {
    setState({ count: count + increment });
  }
  return (
    <div>
      <Page
        count={count}
        onClick={() => {
          handleClick();
        }}
      />
    </div>
  );
}
