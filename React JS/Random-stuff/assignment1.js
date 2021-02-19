/*
Coded by Siddharth Kumar Yadav
Email: siddharthsk101@gmail.com
Assignment 1 : solution
*/

import React, { Component } from "react";

const Validation = props => {
  return (
    <>
      <h2 style={{ color: "dodgerblue" }}>
        {props.children.length <= 5 ? "Too small" : props.children}{" "}
        <span style={{ color: "green", fontSize: "0.5em" }}>
          {"props successfully passed"}
        </span>
      </h2>
    </>
  );
};

const CharComponent = props => {
  return (
    <div
      style={{
        display: "inline-block",
        padding: "16px",
        textAlign: "center",
        margin: "16px",
        border: "1px solid black",
        cursor: "pointer"
      }}
      onClick={props.clicked}
    >
      {props.children}
    </div>
  );
};
class App extends Component {
  state = {
    userInput: "sdf"
  };

  inputHandleChange = event => {
    this.setState({ userInput: event.target.value });
  };

  deleteCharHandler = index => {
    const text = this.state.userInput.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({ userInput: updatedText });
    /*
splice is used to separate and join is used to combine as a string
    */
  };

  render() {
    const charList = this.state.userInput.split("").map((ch, index) => {
      return (
        <CharComponent
          key={index}
          clicked={() => this.deleteCharHandler(index)}
        >
          {ch}
        </CharComponent>
      );
    });

    return (
      <>
        <div>
          <input
            type="text"
            onChange={this.inputHandleChange}
            value={this.state.userInput}
          />
          <p>
            {this.state.userInput}
            {this.state.userInput.length == 0
              ? "Enter something"
              : " : " + this.state.userInput.length}
          </p>
        </div>

        {this.state.userInput ? (
          <Validation>{this.state.userInput}</Validation>
        ) : null}

        {charList}
      </>
    );
  }
}

export default App;
