import "./App.css";
/*eslint-disable */
import GuGuDan from "./GamesComponents/gugudan";
import GugudanGame from "./GamesComponents/gugudancopy";
import WordPlay from "./GamesComponents/wordplay";
import { useState, useEffect } from "react";
import Numbaseball from "./GamesComponents/NumberBaseball";

function App() {
  return (
    <div className="App">
      {/* <GugudanGame /> */}
      {/* <WordPlay></WordPlay>
      <Clock></Clock> */}
      <Numbaseball></Numbaseball>
    </div>
  );

  function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
      const timer = setInterval(() => setDate(new Date()), 1000);
      return () => clearInterval(timer);
    }, []);

    return (
      <div>
        <p>현재 시간: {date.toLocaleTimeString()}</p>
        <p>현재 날짜: {date.toLocaleDateString()}</p>
      </div>
    );
  }
}

export default App;
