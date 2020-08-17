import React from "react";

export default function Button({ children, onClick }) {
  return (
    <button type="button" onClick={onclick}>
      {children}
    </button>
  );
}
