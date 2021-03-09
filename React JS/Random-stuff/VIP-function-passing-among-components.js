/*
Coded by : Siddharth Kumar Yadav
Title : Passing of states between component using functions to display changes instantaneously !!! 
suppose two components ,for Filter and data feching from API and other containing table , to display changes instantly
*/
import React, { useState } from "react";
import "./style.css";

const C2 = props => {
  return (
    <div style={{ border: "solid 1px black", height: 200, width: 200 }}>
      {props.item}
    </div>
  );
};
        /*  Passing of setData function & data if needed */
const C1 = ({ setData, data }) => {
  return (
    <div style={{ border: "solid 1px black", height: 200, width: 200 }}>
      <input onChange={(e) => setData(e.target.value)} />
      {data}
    </div>
  );
};
export default function App() {
  const [data, setData] = useState("SKY");
  return (
    <div>
      <C1 setData={setData} data={data} />
      <C2 item={data} />
      {data}
    </div>
  );
}
