import './App.css';
import 'antd/dist/antd.css';

import {Button} from 'antd';
import React, {Component} from 'react';

import logo from './logo.svg';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
class App extends Component {

  render() {
        return (
      <div className='App'>
     <h1>Google Maps in ReactJS - <small>Siddharth Kumar Yadav</small></h1>

     <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
      </Map>
      </div>
    
    );

  }
}

export default GoogleApiWrapper({
  apiKey: ("API KEY")
})(App)
