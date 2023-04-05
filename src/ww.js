import React from "react";
import { useState, useRef } from "react";

const MultipieGame = () => {
  let [first, setfirst] = useState(Math.ceil(Math.random() * 9));
  let [second, setsecond] = useState(Math.ceil(Math.random() * 9));
  let [value, setValue] = useState("");
  let [result, setResult] = useState("");
  const inputEl = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefalut();
    if (parseInt(value) === first * second) {
      setResult("정답");
      setfirst(Math.ceil(Math.random() * 9));
      setsecond(Math.ceil(Math.random() * 9));
      setValue("");
      inputEl.current.focus();
    } else {
      setResult("떙");
      setValue("");
      inputEl.current.focus();
    }
  };

  return (
    <div>
      <div>
        {first} 곱하기 {second}
        <form onSubmit={onSubmitForm}>
          <input
            ref={inputEl}
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <button>입력</button>
        </form>
        <div>{result}</div>
      </div>
    </div>
  );
};
export default MultipieGame;
