/* eslint-disable */
import { wait } from "@testing-library/user-event/dist/utils";
import React, { useCallback, useRef, useState } from "react";
import axios from "axios";
const ResponseCheck = () => {
  const [state, setState] = useState("waiting");
  const [message, setmassage] = useState("클릭해서 시작하세요");
  const [result, setResult] = useState([]);
  const timeout = useRef(null);
  const startTime = useRef(0);
  const endTime = useRef(0);

  ///
  const onClickScreen = useCallback(() => {
    if (state === "waiting") {
      timeout.current = setTimeout(() => {
        setState("now");
        setmassage("지금 클릭!");
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
      setState("ready");
      setmassage("초록색이 되면 클릭하세요");
    } else if (state === "ready") {
      //성급
      clearTimeout(timeout.current);
      setState("waiting");
      setmassage("너무 성급하시군요 초록이 되면 클릭하세요");
    } else if (state === "now") {
      // 체크 부분
      endTime.current = new Date();
      setState("waiting");
      setmassage("클릭해서 시작하세요");
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current];
      });
    }
  }, [state]);

  const onReset = useCallback(() => {
    setResult([]);
  }, []);

  // 평균 시간 구하는 함수
  const renderAverage = () => {
    return result.length === 0 ? null : (
      <>
        <div>평균시간 :{result.reduce((a, c) => a + c) / result.length} ms</div>
        <button onClick={onReset}>리셋</button>
      </>
    );
  };

  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {renderAverage()}
        {message}
      </div>
    </>
  );
};

export default ResponseCheck;
