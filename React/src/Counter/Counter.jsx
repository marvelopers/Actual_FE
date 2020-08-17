import React, { useState } from "react";

function Counter({ count, onClick }) {
  // view 관리
  return (
    <div>
      <button type="button" onClick={() => onClick(1)}>
        Click Me! ({count})
      </button>
    </div>
  );
}
export default Counter;
