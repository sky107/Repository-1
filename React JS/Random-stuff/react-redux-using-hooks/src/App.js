import React from "react";

import {useSelector,useDispatch} from 'react-redux';

import "./style.css";

export default function App() {
  const counter=useSelector(state=>state.counter);
  const dispatch=useDispatch();

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {"COUNTER " + counter+ "    "}
      <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
      <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
    </div>
  );
}
