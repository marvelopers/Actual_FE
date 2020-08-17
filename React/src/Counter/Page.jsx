import React from "react";
import Counter from ".";
import Buttons from "./Buttons";

export default function Page({ count, onClick }) {
  return (
    <div>
      <Counter
        count={count}
        onClick={() => {
          handleClick();
        }}
      />
      <Buttons onClick={onClick} />
    </div>
  );
}
