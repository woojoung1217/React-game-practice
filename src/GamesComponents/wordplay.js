import React from "react";
import { useState, useRef } from "react";

// 끝말잇기 게임
function WordPlay() {
  const [word, Setword] = useState("윤우중");
  const [result, Setresult] = useState("");
  const [value, Setvalue] = useState("");
  const inputEl = useRef(null);

  const [count, setcount] = useState(0);

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
      setcount(count + 1);
      if (count >= 2) {
        Setword("쉬운 단어로 바꿔드림 = 김치");
      }
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
      <p>틀린 횟수 : {count}</p>
    </>
  );
}

export default WordPlay;
