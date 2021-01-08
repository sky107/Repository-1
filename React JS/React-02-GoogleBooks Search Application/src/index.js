import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Button} from 'antd';
import Checkbox from '@material-ui/core/Checkbox';
import Buttonx from './MaterialUI';
import registerServiceWorker from './registerServiceWorker';
import Radio from '@material-ui/core/Radio';


ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
