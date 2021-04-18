import React from "react";
import MediaQuery from "react-responsive";
import "./style.css";

export default function App() {
  return (
    <div>
      <MediaQuery maxDeviceWidth={300}>
        <p>Manipulate me with the powers of React Responsive</p>
      </MediaQuery>
      <MediaQuery minDeviceWidth={900}>
        <p>Manipulate me with the powers of React Responsive</p>
      </MediaQuery>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
