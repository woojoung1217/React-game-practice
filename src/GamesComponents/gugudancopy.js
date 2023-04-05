/*eslint-disable */
import React from "react";
import { useState, useRef } from "react";

// 구구단 게임

const GugudanGame = () => {
  const [first, setfirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setsecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setvalue] = useState("");
  const [result, setresult] = useState("");
  const inputEl = useRef(null);

  const Submit = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setresult("정답");
      setfirst(Math.ceil(Math.random() * 9));
      setsecond(Math.ceil(Math.random() * 9));
      setvalue("");
      inputEl.current.focus();
    } else {
      setresult("떙 다시!");
      setvalue("");
      inputEl.current.focus();
    }
  };

  return (
    <div>
      <div>
        {first} X {second} = ?
        <form onSubmit={Submit}>
          <input
            type="number"
            value={value}
            ref={inputEl}
            onChange={(e) => setvalue(e.target.value)}
          ></input>
          <button>입력</button>
        </form>
      </div>
      <div>{result}</div>
    </div>
  );
};

export default GugudanGame;
