import React from "react";
import { useState, useRef } from "react";

function WordPlay() {
  const [word, Setword] = useState("윤우중");
  const [result, Setresult] = useState("");
  const [value, Setvalue] = useState("");
  const inputEl = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      Setresult("딩동댕");
      Setword(value);
      Setvalue("");
      inputEl.current.focus();
    } else {
      Setresult("실패");
      Setvalue("");
      inputEl.current.focus();
    }
  };

  return (
    <>
      <p>끝말잇기 게임</p>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          onChange={(e) => {
            Setvalue(e.currentTarget.value);
          }}
          ref={inputEl}
          value={value}
        />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  );
}

export default WordPlay;
