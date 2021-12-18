import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import Gretings from "./Greetings";
import Async from "./Async";
function App() {
  const [counter, setCounter] = React.useState(0);
  const handleDesc = () => setCounter((e) => e - 1);
  const handleInc = () => setCounter((e) => e + 1);
  return (
    <div className="App">
      <h1>{counter}</h1>
      <p>Hello world My name is Siddharth Kumar Yadav</p>
      <input className="input" />{" "}
      <button className="button" onClick={handleInc}>
        INCREASE
      </button>{" "}
      &nbsp;
      <button className="button" onClick={handleDesc}>
        DECREASE
      </button>
      <Gretings />
      <Async />
    </div>
  );
}

export default App;