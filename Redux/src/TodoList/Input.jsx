import React from "react";

export default function Input({ taskTitle, onChange, onClick }) {
  return (
    <div>
      <h1></h1>
      <input
        type="text"
        placeholder="할일을 입력해주세요"
        taskTitle={taskTitle}
        onChange={onChange}
      ></input>
      <button type="button" onClick={onClick}>
        추가
      </button>
    </div>
  );
}
