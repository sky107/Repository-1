/*
Coded by Siddharth Kumar Yadav
Email:siddharthsk101@gmail.com
Title: Routing in react using functional components
*/

import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./style.css";

export default function App() {
  const Home = () => {
    return (
      <>
        <h1
          style={{
            backgroundColor: "dodgerblue",
            height: "200px",
            width: "300px",
            padding: "20px",
            color: "white"
          }}
        >
          Home
        </h1>
      </>
    );
  };
  const About = () => {
    return (
      <>
        <h1
          style={{
            backgroundColor: "salmon",
            height: "200px",
            width: "300px",
            padding: "20px",
            color: "white"
          }}
        >
          About
        </h1>
      </>
    );
  };
  const Career = () => {
    return (
      <>
        <h1
          style={{
            color: "red",
            backgroundColor: "green",
            height: "200px",
            width: "300px",
            padding: "20px",
            color: "white"
          }}
        >
          Career
        </h1>
      </>
    );
  };

  const WebDevelopment = ({ match }) => {
    console.log(match);
    return <>Web Development</>;
  };

  const MobileDevelopment = ({ match }) => {
    console.log(match);
    return <>Mobile Development</>;
  };

  const Solutions = ({ match, location, history }) => {
    console.log(match);
    console.log(location);
    console.log(history);
    return (
      <>
        
          <h1
            style={{
              color: "red",
              backgroundColor: "blue",
              height: "200px",
              width: "300px",
              padding: "20px",
              color: "white"
            }}
          >
            Solutions
           </h1>

      
      </>
    );
  };

  return (
    <>
      <BrowserRouter>
        <div style={{ display: "inline-flex", padding: "10px" }}>
          <Link to="/home" style={{ margin: "10px" }}>
            Home
          </Link>
          <Link to="/about" style={{ margin: "10px" }}>
            About us
          </Link>
          <Link to="/career" style={{ margin: "10px" }}>
            Career
          </Link>
          <Link to="/solutions" style={{ margin: "10px" }}>
            Solutions
          </Link>
        </div>
        <br />
        <Switch>
          <Route path="/home" exact render={Home} />
          <Route path="/about" exact render={About} />
          <Route path="/career" exact render={Career} />
          <Route path="/solutions" exact render={Solutions} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
