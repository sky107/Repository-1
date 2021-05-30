import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";
import { Button } from 'antd';
import Buttonx from './MaterialUI';
import Articles from './components/Articles';
import Users from './components/Users';


//lowercase are reserved by EJX
class App extends Component { 
//class has property of state
//16.8 me hooks introduced

  //JSX Code 
  // do not add () this will trigger at load as we are using EJX6 arrow function

  render() {
//you can't use all css in this way
    return (
      <div className="App">
      <header><h1>React Skeletons</h1></header>
	
	<div className="content">
	<Articles/>
	<Users/>
	</div>



            </div>
    
    );

    //This above code get comiles to  below code
    // return React.createElement('div',null,React.createElement('h1',null,"Siddharth"));
  }
}

export default App;
