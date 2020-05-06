const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const errorhandler = require('errorhandler')
const port = 3000;
const app = express();

app.set('view engine', 'ejs');

//Middlewear
app.use(logger('dev'));
app.use(errorhandler());

app.use(express.static(__dirname + '/public'));

const {getIndex} = require('./public/js/myModule.js');

app.get('/', getIndex);


console.log("Server kör på port: " + port);

app.listen(port);
