//const fs = require('fs');
import fs from 'fs';
import express from 'express';
import {resHandler} from './response-handler.js';
//import inside curly braces if not as default or if export default ommit curlly braces

//Note when we use third party package we need not to mention the file extenstion but in imorting files we should use it
//const resHandler =require('./response-handler');

//const express = require('express');

const app = express();

app.get('/', resHandler);

app.listen(3000);
