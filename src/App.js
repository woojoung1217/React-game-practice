import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
/*eslint-disable */
// import GuGuDan from "./GamesComponents/gugudan";
// import GugudanGame from "./GamesComponents/gugudancopy";
// import WordPlay from "./GamesComponents/wordplay";
// import { useState, useEffect } from "react";
// import Numbaseball from "./GamesComponents/NumberBaseball";
// import { type } from "@testing-library/user-event/dist/type";
// import ResponseCheck from "./GamesComponents/responsegame";
// import Numberbaseball2 from "./GamesComponents/baseballtest";
// import Numbase from "./GamesComponents/숫자야구";

import ResponseCheck from "./GamesComponents/reactionvelocitygame";

function MyComponent(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
}

function App() {
  let [shoe, setshoe] = useState([]);
  return (
    <div className="App">
      {/* <GugudanGame /> */}
      {/* <WordPlay></WordPlay>
      <Clock></Clock> */}
      {/* <Numbaseball></Numbaseball> */}
      {/* {<Numberbaseball2 />} */}
      <ResponseCheck></ResponseCheck>
    </div>
  );
}

export default App;
