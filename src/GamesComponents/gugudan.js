import React from "react";
import { useState, useRef } from "react";

const GuGuDan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputEl = useRef(null);
  const [final, setfinal] = useState("");

  const Check = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult("정답");
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      setfinal(value);
      inputEl.current.focus();
    } else {
      setResult("떙 바보");
      setValue("");
      inputEl.current.focus();
    }
  };

  return (
    <>
      <div>
        {first} x {second} = ?
        <form onSubmit={Check}>
          <input
            type="number"
            ref={inputEl}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <button>입력</button>
        </form>
        <div>
          {final} {result}
        </div>
      </div>
    </>
  );
};

export default GuGuDan;
