'use strict';


const socketIoClient = require('socket.io-client');
const API_URL = ('http://localhost:3000');
const socket = socketIoClient.connect(API_URL);


const writers = require('./lib/writers');
const events = require('./lib/events/events.js');



let file = process.argv.slice(2).shift();

events.on('readFile', writers.readFileAsync);
events.on('writeFile', writers.writeFileAsync);
events.on('writeUpperCase', writers.textToUpperCase);


writers.alterFile(file);

